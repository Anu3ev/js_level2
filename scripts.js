let shopHeaderMobileMenu = {
    template: `
         <div class="cell-4 cell-3-sm">
            <a href="#" class="js-open-main-menu" custom-popup-link="mobile-menu">
                <div class="burger">
                    <div></div>
                </div>
            </a>
        </div>
    `
}

let shopHeaderLogotype = {
    template: `
        <div class="cell-4 cell-6-sm text-center">
            <a class="inline-middle" href="/" title="Super Expensive Shop">
                <img class="show" src="images/logo.png" alt="Super Expensive Shop" title="Super Expensive Shop">
            </a>
        </div>
    `
}

let shopHeaderButtonsRight = {
    methods: {
        searchOpen() {
            eventBus.$emit('search-open');
        }
    },
    template: `
        <div class="cell-4 cell-3-sm">
            <div class="header-menu-right row flex-middle flex-end">
                <div>
                    <a class="search_widget-submit hover-opacity" href="#" @click="searchOpen()">
                        <span class="inline-middle">
                            <!--?xml version="1.0" encoding="iso-8859-1"?-->
                            <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 53.627 53.627" style="enable-background:new 0 0 53.627 53.627; width: 1.6em; display: block;" xml:space="preserve">
                                <path d="M53.627,49.385L37.795,33.553C40.423,30.046,42,25.709,42,21C42,9.42,32.58,0,21,0S0,9.42,0,21s9.42,21,21,21
c4.709,0,9.046-1.577,12.553-4.205l15.832,15.832L53.627,49.385z M2,21C2,10.523,10.523,2,21,2s19,8.523,19,19s-8.523,19-19,19
S2,31.477,2,21z M35.567,36.093c0.178-0.172,0.353-0.347,0.525-0.525c0.146-0.151,0.304-0.29,0.445-0.445l14.262,14.262
l-1.415,1.415L35.123,36.537C35.278,36.396,35.416,36.238,35.567,36.093z"></path>
                            </svg>
                        </span>
                    </a>
                </div>

                <div class="hide-sm m-l-15">
                    <a class="login-link" href="#">
                        <span class="inline-middle">
                            <!--?xml version="1.0" encoding="iso-8859-1"?-->
                            <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55 55" style="enable-background:new 0 0 55 55; width: 1.8em; display: block;" xml:space="preserve">
                                <path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752
c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348
c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98
c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033
c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55
c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287
c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104
c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1
c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764
l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5
c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957
c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545
c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8
s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545
c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313
c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735
c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167
c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,0.208-1.262,0.393-1.904,0.552
c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01
c-0.621,0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53
c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233
c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04
c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816
c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279
c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,0.064-0.036,0.096-0.054l7.907-4.313
c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221
c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131
c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466
c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545
c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949
l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083
C42.677,47.979,42.567,48.054,42.459,48.132z"></path>
                            </svg>
                        </span>
                    </a>
                </div>

                <div class="m-l-15">
                    <a class="js-basket hover-opacity" href="#" @click.prevent="cartOpen()">
                        <span class="inline-middle">
                            <!--?xml version="1.0" encoding="iso-8859-1"?-->
                            <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60; width: 1.6em; display: block;" xml:space="preserve">
                                <path d="M11.68,13l-0.833-5h-2.99C7.411,6.28,5.859,5,4,5C1.794,5,0,6.794,0,9s1.794,4,4,4c1.859,0,3.411-1.28,3.858-3h1.294l0.5,3
H9.614l5.171,26.016c-2.465,0.188-4.518,2.086-4.76,4.474c-0.142,1.405,0.32,2.812,1.268,3.858C12.242,48.397,13.594,49,15,49h2
c0,3.309,2.691,6,6,6s6-2.691,6-6h11c0,3.309,2.691,6,6,6s6-2.691,6-6h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4.35
c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4h-11.7c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4H15
c-0.842,0-1.652-0.362-2.224-0.993c-0.577-0.639-0.848-1.461-0.761-2.316c0.152-1.509,1.546-2.69,3.173-2.69h0.791
c0.014,0,0.025,0,0.039,0h38.994C57.763,41,60,38.763,60,36.013V13H11.68z M4,11c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2
S5.103,11,4,11z M46,45c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S43.794,45,46,45z M23,45c2.206,0,4,1.794,4,4s-1.794,4-4,4
s-4-1.794-4-4S20.794,45,23,45z M58,36.013C58,37.66,56.66,39,55.013,39H16.821l-4.77-24H58V36.013z"></path>
                            </svg>
                        </span>
                        <!-- <span class="inline-middle hide-m" data-cartman-positions-count></span> -->
                    </a>
                </div>
            </div>
        </div>
    `
}

let shopHeaderMenu = {
    template: `
        <div class="cell-12 hide-sm">
            <div class="header-menu text-center p-t-40 m-t-40 b-top">
                <ul class="no-list-style no-pad no-marg">
                    <li class="inline-middle relative m-l-15 m-r-15">
                        <a class="bttn-underline show-inline " href="#">MEN'S</a>
                        &nbsp;
                        <span class="subcol-dropdown inline-middle transition">
                            <!--?xml version='1.0' encoding='utf-8'?-->
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                                <g>
                                    <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" fill="currentColor"></path>
                                </g>
                            </svg>
                        </span>
                        <div class="subcol absolute text-left p-t-10">
                            <ul class="no-list-style p-t-10 p-l-10 p-r-10 p-b-10 no-marg b-top b-left b-right b-bottom">
                                <li><a class="bttn-underline " href="#">Shirts</a></li>
                                <li><a class="bttn-underline " href="#">Joggers</a></li>
                            </ul>
                        </div>
                    </li>

                    <li class="inline-middle relative m-l-15 m-r-15">
                        <a class="bttn-underline show-inline " href="#">WOMEN</a>
                        &nbsp;
                        <span class="subcol-dropdown inline-middle transition">
                            <!--?xml version='1.0' encoding='utf-8'?-->
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                                <g>
                                    <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" fill="currentColor"></path>
                                </g>
                            </svg>
                        </span>
                        <div class="subcol absolute text-left p-t-10">
                            <ul class="no-list-style p-t-10 p-l-10 p-r-10 p-b-10 no-marg b-top b-left b-right b-bottom">
                                <li><a class="bttn-underline " href="#">Shirts</a></li>
                                <li><a class="bttn-underline " href="#">Leggins</a></li>
                            </ul>
                        </div>
                    </li>

                    <li class="inline-middle relative m-l-15 m-r-15">
                        <a class="bttn-underline show-inline " href="#">FOOTWEAR</a>
                        &nbsp;
                        <span class="subcol-dropdown inline-middle transition">
                            <!--?xml version='1.0' encoding='utf-8'?-->
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                                <g>
                                    <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" fill="currentColor"></path>
                                </g>
                            </svg>
                        </span>
                        <div class="subcol absolute text-left p-t-10">
                            <ul class="no-list-style p-t-10 p-l-10 p-r-10 p-b-10 no-marg b-top b-left b-right b-bottom">
                                <li><a class="bttn-underline " href="#">Men</a></li>
                                <li><a class="bttn-underline show-inline " href="#">Women</a></li>
                            </ul>
                        </div>
                    </li>

                    <li class="inline-middle relative m-l-15 m-r-15">
                        <a class="bttn-underline show-inline " href="#">ACCESSORIES</a>
                        &nbsp;
                        <span class="subcol-dropdown inline-middle transition">

                            <!--?xml version='1.0' encoding='utf-8'?-->
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                                <g>
                                    <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" fill="currentColor"></path>
                                </g>
                            </svg>
                        </span>
                        <div class="subcol absolute text-left p-t-10">
                            <ul class="no-list-style p-t-10 p-l-10 p-r-10 p-b-10 no-marg b-top b-left b-right b-bottom">
                                <li><a class="bttn-underline " href="#">Hats</a></li>
                                <li><a class="bttn-underline " href="#">Bags</a></li>
                                <li><a class="bttn-underline " href="#">Belts</a></li>
                                <li><a class="bttn-underline " href="#">Jewerly</a></li>
                                <li><a class="bttn-underline " href="#">Sunglasses</a></li>
                                <li><a class="bttn-underline " href="#">Wallets</a></li>
                                <li><a class="bttn-underline " href="#">Socks</a></li>
                                <li><a class="bttn-underline " href="#">Face Mask</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `
}

let shopHeader = {
    components: {
        'shop-header-mobile-menu': shopHeaderMobileMenu,
        'shop-header-logotype': shopHeaderLogotype,
        'shop-header-buttons-right': shopHeaderButtonsRight,
        'shop-header-menu': shopHeaderMenu
    },
    template: `
        <header class="transition p-t-40 p-b-40 p-t-15-sm p-b-15-sm">
            <div class="container">
                <div class="row is-grid flex-middle flex-between">
                    <shop-header-mobile-menu></shop-header-mobile-menu>    
                    <shop-header-logotype></shop-header-logotype>
                    <shop-header-buttons-right></shop-header-buttons-right>
                    <shop-header-menu></shop-header-menu>
                </div>
            </div>
        </header>
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
            salePrice: {
                type: Number
            },
            img: {
                type: String,
                required: true
            },
            id: {
                type: Number,
                required: true
            }
        },
    },
    methods: {
        countPlus(cartItem) {
            this.item.count++;
            eventBus.$emit('total-price-calculate', cartItem);
        },
        countMinus(cartItem) {
            if (this.item.count === 1) {
                eventBus.$emit('remove-item', cartItem);
            } else {
                this.item.count--;
            }
            eventBus.$emit('total-price-calculate', cartItem);
        },
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
                        <span class="c_special_2_color fw-400">\${{ item.cartPrice.toFixed(2) }}</span>
                    </div>
                    <div class="cart-quan m-b-5">
                    <label class="cart-label fw-300 inline-middle">Quantity:</label>
                    <div data-quantity="" class="quantity is-basket inline-middle">
                      <div class="quantity-controls">
                        <button class="quantity-control bttn-count" @click.prevent="countMinus(item)">-</button>
                        <input class="quantity-input" type="text" :data-item-id="item.id" :value="item.count" min="1">
                        <button class="quantity-control bttn-count" @click.prevent="countPlus(item)">+</button>
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
    data() {
        return {
            isVisibleCart: false,
            totalPrice: 0,
            itemCartPrice: 0
        }
    },
    mounted() {
        // Обработчик клика по кнопке открытия корзины в шапке сайта
        eventBus.$on('cart-open', () => {
            this.isVisibleCart = true;
        });

        // Устанавливаем обработчик для кнопки добавления товара в корзину. При срабатывании добавляем корзине класс isVisibleCart
        eventBus.$on('add-to-cart', () => {
            this.isVisibleCart = true;
        });

        // Обработчик для рассчёта итоговой стоимости всех товаров в корзине
        eventBus.$on('total-price-calculate', (cartItem) => {
            // Стоимость каждого товара с привязкой к количеству
            cartItem.cartPrice = cartItem.salePrice * cartItem.count;

            // Стоимость всех товаров в корзине
            this.totalPrice = 0;
            this.cartItems.forEach(item => {
                this.totalPrice += item.salePrice * item.count;
            });
        });

        // Обработчик для удаления товара из корзины при уменьшении его количества < 1
        eventBus.$on('remove-item', (cartItem) => {
            this.cartItems.forEach((item, i) => {
                if (cartItem.id === item.id) {
                    this.cartItems.splice(i, 1);
                }
            });
        });
    },
    methods: {
        cartClose() {
            this.isVisibleCart = false;
        }
    },
    template: `
        <div class="cart-popup side-popup transition pallette_1" :class="{ opened: isVisibleCart }">
            <div class="cart-title h2-like text-center p-b-20">Shopping Cart</div>
            <div class="cart-items dynamic_basket js-dynamic_basket">
                <a class="button-close dynamic_basket-close" href="#" @click.prevent="cartClose()">
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
                    <p class="flex-center" v-if="cartItems.length === 0">You have no items in your shopping cart.</p>
                </div>

                <div class="b-top b-bottom p-t-15 p-b-15" v-if="cartItems.length !== 0">
                    <div class="dynamic_basket-total row is-grid flex-middle flex-between">
                        <div class="cell-6 h4-like text-uppercase">Subtotal</div>
                        <div class="basket-total-price cell-6 h4-like fw-700 text-right c_special_2_color">\${{ totalPrice.toFixed(2) }}</div>
                    </div>
                </div>

                <div class="basket-footer row is-grid flex-middle p-t-15 p-b-15">
                </div>
            </div>
        </div>
    `,
}

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
    methods: {
        // При клике на кнопку добавления товара в корзину вызываем событие через шину событий
        addToCart(good) {
            eventBus.$emit('add-to-cart', good);
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
                    <button type="submit" :data-item-add="good.id" data-count="1" class="bttn-reg in-product js-basket c_button w-100" custom-popup-link="dynamic_basket" @click="addToCart(good)">ADD TO CART</button>
                </div>
            </div>
        </div>
    `
}

let shopGoodsList = {
    components: {
        'shop-goods-item': shopGoodsItem
    },
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
    mounted() {
        // Обработчик для кнопки добавления товара в корзину. При срабатывании пушим товар в корзину, если его в ней ещё нет.
        eventBus.$on('add-to-cart', (cartItem) => {
            if (!this.cartItems.some(item => cartItem.id === item.id)) {
                this.cartItems.push(cartItem);
            } else {
                cartItem.count++;
            }

            // Запускаем перерасчёт стоимости товаров в корзине
            eventBus.$emit('total-price-calculate', cartItem);
        });
    },
    template: `
        <div class="pallette_1 goods-list row is-grid flex-center" v-if="filteredGoods.length !== 0">
            <shop-goods-item v-for="good in filteredGoods" :good="good" :key="good.id"></shop-goods-item>
        </div>
        <h3 v-else>Something went wrong :(</h3>
    `,
}

let shopGoodsSearch = {
    data() {
        return {
            isOpened: false,
            searchLine: ''
        }
    },
    mounted() {
        // Обработчик клика по кнопке открытия поиска в шапке сайта
        eventBus.$on('search-open', () => {
            this.isOpened = true;
        });
    },
    methods: {
        searchClose() {
            this.isOpened = false;
        },

        searchInput(e) {
            this.searchLine = e.target.value;
        },

        // Передаём значение поля на шину событий, чтобы получить его в компоненте с товарами (shopGoodsList)
        searchSubmit() {
            eventBus.$emit('filter-goods', this.searchLine);
            this.searchClose()
        }
    },
    template: `
        <div class="search-popup top-0 left-0 right-0 bottom-0" :class="{ opened: isOpened }">
            <a class="button-close" href="#" @click.prevent="searchClose()">
                <!--?xml version="1.0" encoding="iso-8859-1"?-->
                <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 224.512 224.512" style="enable-background:new 0 0 224.512 224.512;" xml:space="preserve">
                    <g>
                        <polygon fill="currentColor" points="224.507,6.997 217.521,0 112.256,105.258 6.998,0 0.005,6.997 105.263,112.254 
				0.005,217.512 6.998,224.512 112.256,119.24 217.521,224.512 224.507,217.512 119.249,112.254 	"></polygon>
                    </g>
                </svg>
            </a>

            <div class="search-inner absolute content-middle">
                <form class="search_widget">
                    <div class="inpt-group text-center">
                        <input type="text" autocomplete="off" class="inpt inpt-underline inline-middle" name="q" value="" placeholder="Search" inprocess="false" @input="searchInput($event)">
                        <button type="submit" class="bttn-link inline-middle transition" @click.prevent="searchSubmit()">
                            <!--?xml version="1.0" encoding="iso-8859-1"?-->
                            <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 53.627 53.627" style="enable-background:new 0 0 53.627 53.627; width: 1.6em; display: block;" xml:space="preserve">
                                <path d="M53.627,49.385L37.795,33.553C40.423,30.046,42,25.709,42,21C42,9.42,32.58,0,21,0S0,9.42,0,21s9.42,21,21,21
		c4.709,0,9.046-1.577,12.553-4.205l15.832,15.832L53.627,49.385z M2,21C2,10.523,10.523,2,21,2s19,8.523,19,19s-8.523,19-19,19
		S2,31.477,2,21z M35.567,36.093c0.178-0.172,0.353-0.347,0.525-0.525c0.146-0.151,0.304-0.29,0.445-0.445l14.262,14.262
		l-1.415,1.415L35.123,36.537C35.278,36.396,35.416,36.238,35.567,36.093z"></path>
                            </svg>
                        </button>
                    </div>
                    <input type="hidden" name="lang" value="ru">

                </form>
            </div>
        </div>
    `
}

let shopMain = {
    components: {
        'shop-goods-list': shopGoodsList,
        'shop-goods-item': shopGoodsItem,
        'shop-cart-list': shopCartList,
        'shop-cart-item': shopCartItem,
        'shop-goods-search': shopGoodsSearch,
    },
    data() {
        return {
            goods: [],
            filteredGoods: [],
            cartItems: [],
            API_URL: 'http://127.0.0.1:51670/'
        }
    },
    mounted() {
        this.makeGETRequest().then((response) => {
            response.goods.forEach(good => {
                // Меняем пустые значения из JSON (null) на дефолтные.
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

        // Событие фильтрации товаров через поиск
        eventBus.$on('filter-goods', (value) => {
            const regexp = new RegExp(value, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.title));
        });
    },
    methods: {
        makeGETRequest() {
            let xhr = new XMLHttpRequest();
            return new Promise((resolve, reject) => {
                xhr.open('GET', `${this.API_URL}products/data.json`, 'true');
                xhr.send(null);

                xhr.onload = function () {
                    if (xhr.status !== 200) {
                        reject(`Не удалось получить объект с товарами: функция makeGETRequest вернула статус ${xhr.status}`);
                    } else {
                        resolve(JSON.parse(xhr.responseText));
                    }
                }
            });
        },
    },
    template: `
        <main class="container">
            <div class="row is-grid flex-middle flex-between">
                <div class="cell-12 cell-12-sm transition text-center">
                    <shop-goods-list :filtered-goods="filteredGoods" :cart-items="cartItems"></shop-goods-list v-if="filteredGoods.length !== 0">
                </div>
            </div>
            <shop-cart-list :cart-items="cartItems"></shop-cart-list>
            <shop-goods-search></shop-goods-search>
        </main>
    `,
}

const eventBus = new Vue({});

const shop = new Vue({
    components: {
        'shop-main': shopMain,
        'shop-header': shopHeader
    },
    el: '#shop',
    data: {},
    methods: {},
    mounted() {},
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
