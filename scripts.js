(function () {
    class GoodsItem {
        conctructor(title, salePrice, img, id, count) {
            this.title = title;
            this.salePrice = salePrice;
            this.img = img;
            this.count = count;
            this.id = id;
        }

        render({
            title = 'Unknown Product',
            salePrice = 100500,
            img = 'https://via.placeholder.com/300x457',
            count,
            id
        }) {
            return `<div class="cell-3 m-b-30 cell-4-m cell-6-sm cell-12-xs">
                        <div class="product-item">
                            <a class="product-image square rel-img m-b-20 no-transparent " href="#" data-url="#" data-prod-title="${title}" data-open-product="">
                                <img class="transition" src="${img}">
                            </a>
                            <div class="product-item__title text-center">
                                <a class="fw-400" href="#">${title}</a>
                                <div><span class="product-price fw-700">$${salePrice}</span></div>
                            </div>
                            <div class="cell-12 cell-12-m">
                                <button type="submit" data-item-add="${id}" data-count="1" class="bttn-reg in-product js-basket c_button w-100" custom-popup-link="dynamic_basket">ADD TO CART</button>
                            </div>
                        </div>
                    </div>`;
        }
    }

    class GoodsList {
        constructor() {
            this.goods = [];
            this.filteredGoods = [];
        }

        fetchGoods() {
            let xhr = new XMLHttpRequest();

            function makeGETRequest() {
                return new Promise((resolve, reject) => {
                    xhr.open('GET', `${API_URL}products/data.json`, 'true');
                    xhr.send(null);

                    xhr.onload = function () {
                        if (xhr.status == 200) {
                            let response = JSON.parse(xhr.responseText);
                            resolve(response);
                        } else {
                            reject(`Не удалось получить объект с товарами: функция makeGETRequest вернула статус ${xhr.status}`);
                        }
                    }
                });
            }

            makeGETRequest().then((response) => {
                response.goods.forEach(good => {
                    // Меняем пустые значения из JSON (null) на undefined, чтобы наши дефолтные значения параметров при рендеринге отрабатывали как надо (в JSON не бывает undefined)
                    for (let key in good) {
                        if (good[key] === null) {
                            good[key] = undefined;
                        }
                    }

                    // Пушим товары в массив
                    this.goods.push(good);
                    this.filteredGoods.push(good);
                });
            }).then(() => {
                // Запускаем рендеринг товаров
                goodsList.render();
            }).catch((message) => {
                // На случай, если сервер не обработает наш запрос
                console.error(message);
            });
        }

        filterGoods(value) {
            // Здесь будем фильтровать список товаров
            const regexp = new RegExp(value, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.title));
            this.render();
        }

        render() {
            let listHtml = '';

            this.filteredGoods.forEach(good => {
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
            let goods = this.goods,
                goodAdded = false;
            dynamicBasket.render();

            document.querySelectorAll('[data-item-add]').forEach(item => {
                item.addEventListener('click', (e) => {
                    let itemID = +e.target.getAttribute('data-item-add');
                    goods.forEach(good => {
                        if (good.id === itemID) {
                            // Проверяем, присутствует ли товар в корзине
                            cartList.items.forEach(cartItem => {
                                if (good.id === cartItem.id) {
                                    // Если да, то присваем переменной true
                                    goodAdded = true;
                                } else {
                                    // Если нет, то false
                                    goodAdded = false;
                                }
                            })

                            // Пушим товар в массив, если он ещё не был добавлен 
                            if (!goodAdded) {
                                cartList.items.push(good);
                                cartList.render();
                                // Если уже добавлен, то просто добавляем количество и рендерим корзину, чтобы оно обновилось
                            } else {
                                good.count++;
                                cartList.render();
                            }
                        }
                    });
                });
            });
        }
    }

    // Наследуемся от GoodsItem и создаём новый класс для товара добавленного в корзину пишем метод его рендеринга
    class CartItem extends GoodsItem {
        constructor(title, salePrice, img, id, count, cartPrice) {
            super(title, salePrice, img, id);
            this.count = count;
            this.cartPrice = cartPrice;
        }

        render({
            title = 'Unknown Product',
            salePrice = 100500,
            img = 'https://via.placeholder.com/300x457',
            count = 1,
            cartPrice = (salePrice * count),
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
                                <span class="c_special_2_color fw-400" data-change-price="">$${(cartPrice).toFixed(2)}</span>
                            </div>
                            <div class="cart-quan m-b-5">
                            <label class="cart-label fw-300 inline-middle">Количество:</label>
                            <div data-quantity="" class="quantity is-basket inline-middle">
                              <div class="quantity-controls">
                                <button data-quantity-change="-1" class="quantity-control bttn-count">-</button>
                                <input class="quantity-input" type="text" data-item-id="${id}" value="${count}">
                                <button data-quantity-change="1" class="quantity - control bttn-count">+</button>
                              </div>
                            </div>
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
                cartTotal += ((!item.salePrice ? 100500 : item.salePrice) * item.count);
            });

            // Выводим список товаров и их стоимость
            dynamicBusketList.innerHTML = listHtml;
            dynamicBusketTotal.setAttribute('data-cart-total-price', cartTotal);
            dynamicBusketTotal.innerHTML = `$${cartTotal.toFixed(2)}`;
        }
    }

    // Здесь перечислены все слушатели событий связанные с управлением корзиной
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

    class SearchPopup {
        costructor() {
            this.popup = popup;
            this.buttonClose = buttonClose;
            this.links = links;
            this.searchInput = searchInput;
            this.searchLink = searchLink;
        }

        render(searchLink) {
            this.popup = document.querySelector('[custom-popup-modal="search-form"]');
            this.buttonClose = document.querySelector('[custom-popup-close="search-form"]');
            this.searchSubmit = document.querySelector('.search_widget button[type="submit"]');
            this.searchInput = document.querySelector('input[data-search-field]');
            this.searchLink = document.querySelector('[custom-popup-link="search-form"]');

            this.open = () => {
                this.popup.classList.add('opened');
            }

            this.close = () => {
                this.popup.classList.remove('opened');
            }

            this.searchLink.addEventListener('click', () => {
                this.open();
                this.searchInput.focus();
            });

            this.buttonClose.addEventListener('click', () => {
                this.close();
            })

            this.searchSubmit.addEventListener('click', (e) => {
                e.preventDefault();
                const value = this.searchInput.value;
                goodsList.filterGoods(value);
                this.close();
            });

        }
    }

    const API_URL = 'http://127.0.0.1:60694/',
        goodsList = new GoodsList(),
        dynamicBasket = new DynamicBasket(),
        searchPopup = new SearchPopup();
    goodsList.fetchGoods();
    searchPopup.render();
}())


/*
4. Доп задание
*/
