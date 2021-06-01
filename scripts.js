(function () {
    class GoodsItem {
        conctructor(title, price, img, id) {
            this.title = title;
            this.price = price;
            this.img = img;
        }

        render({
            title = 'Unknown Product',
            price = 100500,
            img = 'https://via.placeholder.com/300x457',
            id
        }) {
            return `<div class="cell-3 m-b-30 cell-4-m cell-6-sm cell-12-xs">
                        <div class="product-item">
                            <a class="product-image square rel-img m-b-20 no-transparent " href="#" data-url="#" data-prod-title="${title}" data-open-product="">
                                <img class="transition" src="${img}">
                            </a>
                            <div class="product-item__title text-center">
                                <a class="fw-400" href="#">${title}</a>
                                <div><span class="product-price fw-700">$${price}</span></div>
                            </div>
                            <div class="cell-12 cell-12-m">
                                <button type="submit" data-item-add="${id}" class="bttn-reg in-product js-basket c_button w-100" custom-popup-link="dynamic_basket">ADD TO CART</button>
                            </div>
                        </div>
                    </div>`;
        }
    }

    class GoodsList {
        constructor() {
            this.goods = [];
        }

        fetchGoods() {
            this.goods = [
                {
                    "title": "The Squad Raglan in Black and White (Black Sleeves)",
                    "price": 60.00,
                    "img": "images/products/shirts/1.jpg",
                    "id": 1
                }, {
                    "title": "The D'evils Tee in White",
                    "price": 15.95,
                    "img": "images/products/shirts/2.jpg",
                    "id": 2
                }, {
                    "title": "The Ride Or Die Baseball Tee in White & Black",
                    "price": undefined,
                    "img": "images/products/shirts/3.jpg",
                    "id": 3
                }, {
                    "title": "The Florio Rosas Graphic Tee in Black",
                    "price": 14.95,
                    "img": "images/products/shirts/4.jpg",
                    "id": 4
                }, {
                    "title": undefined,
                    "price": 67.99,
                    "img": "images/products/joggers/1.jpg",
                    "id": 5
                }, {
                    "title": "Piped Joggers",
                    "price": 31.99,
                    "img": "images/products/joggers/2.jpg",
                    "id": 6
                }, {
                    "title": "Alva Jogger in Black",
                    "price": 114.99,
                    "img": "images/products/joggers/3.jpg",
                    "id": 7
                }, {
                    "title": "Phys Ed Jogger in Black",
                    "price": 99.99,
                    "img": undefined,
                    "id": 8
                }
            ];
        }

        render() {
            let listHtml = '';

            this.goods.forEach(good => {
                const goodItem = new GoodsItem();
                listHtml += goodItem.render(good);
            });

            document.querySelector('.goods-list').innerHTML = listHtml;

            // После рендеринга товаров запускаем слушатель для кнопки добавления в корзину
            this.addToCart();
        }


        // Здесь проверяем клик по кнопке добавления товара в корзину, и если ID кнопки совпадает с ID товара, то пушим этот товар в CartList
        addToCart() {
            const cartList = new CartList();
            let goods = this.goods;
            dynamicBasket.render();

            document.querySelectorAll('[data-item-add]').forEach(item => {
                item.addEventListener('click', () => {
                    goods.forEach(good => {
                        if (good.id == item.getAttribute('data-item-add')) {
                            cartList.items.push(good);
                            cartList.render();
                        }
                    });
                });
            });
        }
    }

    // Наследуемся от GoodsItem и создаём новый класс для товара добавленного в корзину пишем метод его рендеринга
    class CartItem extends GoodsItem {
        constructor(title, price, img, id) {
            super(title, price, img, id);
        }

        render({
            title = 'Unknown Product',
            price = 100500,
            img = 'https://via.placeholder.com/300x457',
            id
        }) {
            return `
                <div class="cart-item relative b-top p-t-15 p-b-15 is-one" data-item-id="${id}">
                    <div class="row is-grid flex-middle">
                        <div class="cart-image cell-2 cell-4-s">
                            <img src="${img}">
                        </div>
                        <div class="cart-text cell-10 cell-8-s">
                            <div class="cart-title text-uppercase m-b-5">${title}</div>

                            <div class="cart-price m-b-5">
                                <label class="cart-label fw-300">Цена:</label>
                                <span class="c_special_2_color fw-400" data-change-price="">$${price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // Создаём класс для вывода списка товаров добавленных в корзину и выводим их итоговую стоимость.
    class CartList {
        constructor(items) {
            this.items = [];
        }

        render() {
            // Заводим переменные
            let listHtml = '',
                cartTotal = 0;
            const dynamicBusketList = document.querySelector('.dynamic_basket-list'),
                dynamicBusketTotal = document.querySelector('[data-cart-total-price]');

            // Перебирем список товаров
            this.items.forEach(item => {
                // Отправляем товары на рендеринг в CartItem
                const cartItem = new CartItem();
                listHtml += cartItem.render(item);

                // Считаем стоимость всех товаров в корзине
                cartTotal += (!item.price ? 100500 : item.price);
            });

            // Выводим список товаров и их стоимость
            dynamicBusketList.innerHTML = listHtml;
            dynamicBusketTotal.setAttribute('data-cart-total-price', cartTotal);
            dynamicBusketTotal.innerHTML = `$${cartTotal.toFixed(2)}`;
        }
    }

    // Здесь перечислены все слушатели событий связанные с управлением корзиной. Долго ломал голову, как тут лучше поступить. Возможно, стоило все события появления корзины оставить в рамках CartList.
    class DynamicBasket {
        constuctor() {
            this.popup = popup;
            this.buttonClose = buttonClose;
            this.links = links;
        }

        render() {
            this.popup = document.querySelector('[custom-popup-modal="dynamic_basket"]');
            this.buttonClose = document.querySelector('[custom-popup-close="dynamic_basket"]');
            this.links = document.querySelectorAll('[custom-popup-link="dynamic_basket"]');

            this.open = () => {
                this.popup.classList.add('opened');
            }

            this.close = () => {
                this.popup.classList.remove('opened');
            }

            this.links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.open();
                });
            });

            this.buttonClose.addEventListener('click', (e) => {
                e.preventDefault();
                this.close()
            });
        }
    }

    const goodsList = new GoodsList(),
        dynamicBasket = new DynamicBasket();
    goodsList.fetchGoods();
    goodsList.render();
}())


/*
4. Доп задание
*/
