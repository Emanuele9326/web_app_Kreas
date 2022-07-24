import { defineStore } from 'pinia'


import axios from 'axios'


export const storeProduct = defineStore({
        id: 'listproduct',
        state: () => ({
            products: [],

            cartItems: [],

            detailproduct: [],

        }),

        getters: {

            // totale carrello senza sconto
            cartTotalAmount: (state) => {

                return state.cartItems.reduce((total, product) => {

                    let totalPriceint = total + (product.price * product.quantity);

                    return totalPriceint
                }, 0).toFixed(2);


            },

            //quantità prodotti presenti nel carrello
            quantityProducts: (state) => {

                return state.cartItems.reduce((quantityProductsCart, product) => {
                    return (quantityProductsCart + product.quantity);
                }, 0)
            },

            // prezzo scontato se articoli > 3
            totalPriceDiscount: (state) => {
                let discountValue = ((state.cartTotalAmount * 10) / 100);
                let discountedPrice = (state.cartTotalAmount - discountValue).toFixed(2);

                return discountedPrice;
            },

        },


        actions: {


            async getProducts() {

                await axios
                    .get("https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json")
                    .then((response) => {
                        let listproducts = response.data


                        listproducts.forEach((element, index) => {
                            element['identifier'] = index
                        });
                        this.products = listproducts;



                    }).catch((error) => {
                        console.log(error)
                    })
            },

            productDetails(Id) {
                this.products.forEach(element => {
                    if (element.identifier == Id) {

                        this.detailproduct = element;

                    }
                })
            },

            addToCart(identifier) {

                let cartProduct = this.cartItems.find((product) => product.identifier == identifier);

                if (cartProduct) {
                    cartProduct.quantity++
                } else {

                    const add_product = {
                        'identifier': this.detailproduct.identifier,
                        'name': this.detailproduct.name,
                        'img': this.detailproduct.image,
                        'price': this.detailproduct.price,
                        'quantity': 1,
                    }
                    this.cartItems.push(add_product);
                }

                if (this.quantityProducts < 4) {
                    this.cartTotalAmount

                } else {
                    this.totalPriceDiscount;

                }




            }






        },


        persist: true






    },

)