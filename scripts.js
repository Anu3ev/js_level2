let shopGoodsItem = {
    props: {
        good: {
            title: {
                type: String,
                required: true
            },
            salePrice: {
                type: Number,
                required: true
            },
            img: {
                type: String,
                required: true
            },
            id: {
                type: Number,
                required: true
            }
        }
    },
    template: `
        <div class="cell-3 m-b-30 cell-4-m cell-6-sm cell-12-xs">
            <div class="product-item">
                <a class="product-image square rel-img m-b-20 no-transparent " href="#" data-url="#" :data-prod-title="good.title" data-open-product="">
                    <img class="transition" :src="good.img">
                </a>
                <div class="product-item__title text-center">
                    <a class="fw-400" href="#">{{ good.title }}</a>
                    <div><span class="product-price fw-700">\${{ good.salePrice }}</span></div>
                </div>
                <div class="cell-12 cell-12-m">
                    <button type="submit" :data-item-add="good.id" data-count="1" class="bttn-reg in-product js-basket c_button w-100" custom-popup-link="dynamic_basket" @click="$emit('AddToCart', good)">ADD TO CART</button>
                </div>
            </div>
        </div>
    `
}

let shopCartItem = {
    props: {
        item: {
            title: {
                type: String,
                required: true
            },
            cartPrice: {
                type: Number,
                required: true
            },
            img: {
                type: String,
                required: true
            },
            id: {
                type: Number,
                required: true
            }
        }
    },
    template: `
        <div class="cart-item relative b-top p-t-15 p-b-15 is-one" :data-item-id="item.id">
            <div class="row is-grid flex-middle">
                <div class="cart-image cell-2 cell-4-s">
                    <img :src="item.img">
                </div>
                <div class="cart-text cell-10 cell-8-s">
                    <div class="cart-title text-uppercase m-b-5">{{ item.title }}</div>

                    <div class="cart-price m-b-5">
                        <label class="cart-label fw-300">Price:</label>
                        <span class="c_special_2_color fw-400" data-change-price="">\${{ item.salePrice.toFixed(2) }}</span>
                    </div>
                    <div class="cart-quan m-b-5">
                    <label class="cart-label fw-300 inline-middle">Quantity:</label>
                    <div data-quantity="" class="quantity is-basket inline-middle">
                      <div class="quantity-controls">
                        <button data-quantity-change="-1" class="quantity-control bttn-count">-</button>
                        <input class="quantity-input" type="text" :data-item-id="item.id" :value="item.count">
                        <button data-quantity-change="1" class="quantity - control bttn-count">+</button>
                      </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

let shopCartList = {
    components: {
        'shop-cart-item': shopCartItem
    },
    props: {
        cartItems: Array
    },
    methods: {
        /*      render() {
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
                */
    },
    template: `
        <div class="cart-popup side-popup transition pallette_1 opened" custom-popup-modal="dynamic_basket">
            <div class="cart-title h2-like text-center p-b-20">Shopping Cart</div>
            <div class="cart-items dynamic_basket js-dynamic_basket">
                <a class="button-close dynamic_basket-close" href="#" custom-popup-close="dynamic_basket">
                    <!--?xml version="1.0" encoding="iso-8859-1"?-->
                    <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 224.512 224.512" style="enable-background:new 0 0 224.512 224.512;" xml:space="preserve">
                        <g>
                            <polygon fill="currentColor" points="224.507,6.997 217.521,0 112.256,105.258 6.998,0 0.005,6.997 105.263,112.254 
				0.005,217.512 6.998,224.512 112.256,119.24 217.521,224.512 224.507,217.512 119.249,112.254 	"></polygon>
                        </g>
                    </svg>
                </a>

                <div class="dynamic_basket-list">
                    <shop-cart-item v-for="item in cartItems" :item="item" :key="item.id"></shop-cart-item>
                </div>

                <div class="b-top b-bottom p-t-15 p-b-15">
                    <div class="dynamic_basket-total row is-grid flex-middle flex-between">
                        <div class="cell-6 h4-like text-uppercase">Subtotal</div>
                        <div class="basket-total-price cell-6 h4-like fw-700 text-right c_special_2_color" data-cart-total-price=""></div>
                    </div>
                </div>

                <div class="basket-footer row is-grid flex-middle p-t-15 p-b-15">
                </div>
            </div>
        </div>
    `,
    mounted() {}
}

let ShopGoodsList = {
    props: {
        filteredGoods: {
            good: {
                title: {
                    type: String,
                    required: true
                },
                salePrice: {
                    type: Number,
                    required: true
                },
                img: {
                    type: String,
                    required: true
                },
                id: {
                    type: Number,
                    required: true
                }
            }
        },
        cartItems: {
            item: {
                title: {
                    type: String,
                    required: true
                },
                cartPrice: {
                    type: Number,
                    required: true
                },
                img: {
                    type: String,
                    required: true
                },
                id: {
                    type: Number,
                    required: true
                }
            }
        }
    },
    components: {
        'shop-goods-item': shopGoodsItem,
        'shop-cart-list': shopCartList
    },
    data() {
        return {}
    },
    template: `
        <div class="pallette_1 goods-list row is-grid flex-center">
            <shop-goods-item v-for="good in filteredGoods" :good="good" :key="good.id" @AddToCart="onAddToCart"></shop-goods-item>
        </div>
    `,
    methods: {
        onAddToCart(item) {
            this.cartItems.push(item);
        }

        /* addToCart() {
                let goods = this.filteredGoods,
                    goodAdded = false;
                dynamicBasket.render();
                document.querySelectorAll('[data-item-add]').forEach(item => {
                    item.addEventListener('click', (e) => {
                        let itemID = +e.target.getAttribute('data-item-add');
                        goods.forEach(good => {
                            if (good.id === itemID) {
                                // Проверяем, присутствует ли товар в корзине
                                for (let i = 0; cartList.items.length > i; i++) {
                                    if (good.id === cartList.items[i].id) {
                                        // Если да, то присваем переменной goodAdded значение true
                                        goodAdded = true;
                                    } else {
                                        goodAdded = false;
                                    }
                                }
                                cartList.items.forEach(cartItem => {
                                    console.log(goodAdded, good.id, cartItem.id);
                                    if (good.id === cartItem.id) {
                                        // Если да, то присваем переменной goodAdded значение true
                                        goodAdded = true;
                                    } else {
                                        goodAdded = false;
                                    }
                                })
                                // Пушим товар в массив, если он ещё не был добавлен 
                                if (!goodAdded) {
                                    cartList.items.push(good);
                                    cartList.render();
                                    // Если уже добавлен, то прибавляем количество и рендерим корзину, чтобы оно обновилось
                                } else {
                                    good.count++;
                                    cartList.render();
                                }
                            }
                        });
                    });
                });
            },
            */
    },
    mounted() {},
}

let ShopMain = {
    template: `
        <main class="container">
            <div class="row is-grid flex-middle flex-between">
                <div class="cell-12 cell-12-sm transition text-center">
                    <shop-goods-list :filtered-goods="filteredGoods" :cart-items="cartItems"></shop-goods-list>
                </div>
            </div>
            <shop-cart-list :cart-items="cartItems"></shop-cart-list>
        </main>
    `,
    data() {
        return {
            goods: [],
            filteredGoods: [],
            cartItems: [],
            API_URL: 'http://127.0.0.1:64354/'
        }
    },
    methods: {
        makeGETRequest() {
            let xhr = new XMLHttpRequest();
            return new Promise((resolve, reject) => {
                xhr.open('GET', `${this.API_URL}products/data.json`, 'true');
                xhr.send(null);

                xhr.onload = function () {
                    if (xhr.status === 200) {
                        let response = JSON.parse(xhr.responseText);
                        resolve(response);
                    } else {
                        reject(`Не удалось получить объект с товарами: функция makeGETRequest вернула статус ${xhr.status}`);
                    }
                }
            });
        },
    },
    mounted() {
        this.makeGETRequest().then((response) => {
            response.goods.forEach(good => {
                // Меняем пустые значения из JSON (null) на дефолтные. Возможно, во Vue есть более подходящее для этого решение, но я не нашёл, и решил, что будет гораздо удобнее, если значения будут задаваться в самом начале. Это избавит от необходимости задавать их вручную в дальнейшем.
                for (let key in good) {
                    if (good[key] === null) {
                        if (!good.title) {
                            good.title = 'Unknown Product';
                        } else if (!good.img) {
                            good.img = 'https://via.placeholder.com/300x457'
                        } else if (!good.salePrice) {
                            good.salePrice = 100500;
                        }
                    }
                }

                // Пушим товары в массивы goods и filteredGoods
                this.goods.push(good);
                this.filteredGoods.push(good);
            });
        }).catch((message) => {
            // На случай, если сервер не обработает наш запрос
            console.error(message);
        });
    },
    components: {
        'shop-goods-list': ShopGoodsList,
        'shop-goods-item': shopGoodsItem,
        'shop-cart-list': shopCartList,
        'shop-cart-item': shopCartItem
    }
}

const shop = new Vue({
    el: '#shop',
    data: {},
    methods: {},
    mounted() {},
    components: {
        'shop-main': ShopMain
    }
});

/*
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
                            for (let i = 0; cartList.items.length > i; i++) {
                                if (good.id === cartList.items[i].id) {
                                    // Если да, то присваем переменной goodAdded значение true
                                    goodAdded = true;
                                } else {
                                    goodAdded = false;
                                }
                            }
                            cartList.items.forEach(cartItem => {
                                console.log(goodAdded, good.id, cartItem.id);
                                if (good.id === cartItem.id) {
                                    // Если да, то присваем переменной goodAdded значение true
                                    goodAdded = true;
                                } else {
                                    goodAdded = false;
                                }
                            })
                            // Пушим товар в массив, если он ещё не был добавлен 
                            if (!goodAdded) {
                                cartList.items.push(good);
                                cartList.render();
                                // Если уже добавлен, то прибавляем количество и рендерим корзину, чтобы оно обновилось
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
                                <label class="cart-label fw-300">Price:</label>
                                <span class="c_special_2_color fw-400" data-change-price="">$${(cartPrice).toFixed(2)}</span>
                            </div>
                            <div class="cart-quan m-b-5">
                            <label class="cart-label fw-300 inline-middle">Quantity:</label>
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

    // Здесь перечислены все слушатели событий связанные с управлением поиском
    class SearchPopup {
        costructor() {
            this.popup = popup;
            this.buttonClose = buttonClose;
            this.links = links;
            this.searchInput = searchInput;
            this.searchLink = searchLink;
        }

        render() {
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

    class Feedback {
        constructor() {
            this.form = document.getElementById('feedback_form');
            this.name = document.getElementById('feedback_name');
            this.phone = document.getElementById('feedback_phone');
            this.email = document.getElementById('feedback_from');
            this.submit = document.getElementById('feedback_commit');
        }

        validation() {
            // Заводим переменные
            const regExpName = /^([А-Яа-яA-Za-z]+)?\s?([А-Яа-яA-Za-z]+)$/i,
                regExpPhone = /^(\+7|8)\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/i,
                regExpEmail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+)\.([a-z\.]{2,6})$/i,
                messages = {
                    errorEmail: 'Error! Incorrect E-mail!',
                    errorName: 'Error! Incorrect Name!',
                    errorPhone: 'Error! Incorrect Phone Number!'
                }

            // Пишем функцию в которую будем отправлять содержимое полей на проверку
            function checkInputValue(input, regExp, errorMessage) {
                let status,
                    error = document.createElement('span');
                error.classList.add('input-error');
                error.textContent = errorMessage;

                input.addEventListener('change', (e) => {
                    // Проверяем совпадение с регулярным выражением. Если введённый в поле текст не совпадает с регулярным выражением, то присваем перменной status 0. Если совпадает, то помещаем в переменную status количество символов, которые совпали с регулярным выражением
                    if (e.target.value.match(regExp) === null) {
                        status = 0;
                    } else {
                        status = e.target.value.match(regExp).input.length;
                    }

                    // Если количество символов, которое совпало с регуляркой не равно количеству символов введённых в input, то выделяем input красным цветом, и выводим ошибку
                    if (e.target.value.length !== status) {
                        e.target.classList.add('b-error');
                        e.target.parentElement.append(error);
                    } else {
                        e.target.classList.remove('b-error');
                        e.target.parentElement.removeChild(error);
                    }
                });
            }

            // Запускаем проверку полей
            checkInputValue(this.name, regExpName, messages.errorName);
            checkInputValue(this.phone, regExpPhone, messages.errorPhone);
            checkInputValue(this.email, regExpEmail, messages.errorEmail);

            // Так как форму пока некуда отправлять, сбрасываем сабмит
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
            })
        }
    }

    const API_URL = 'http://anu3ev.com/',
        goodsList = new GoodsList(),
        dynamicBasket = new DynamicBasket(),
        searchPopup = new SearchPopup(),
        feedback = new Feedback();
    goodsList.fetchGoods();
    searchPopup.render();
    feedback.validation();
}())

*/
