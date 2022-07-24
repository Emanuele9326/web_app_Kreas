import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductPage from '../views/ProductPage.vue'
import CartProduct from '../views/CartProduct.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'ProductList',
            component: ProductList
        },
        {
            path: '/productPage/:id',
            name: 'ProductPage',
            component: ProductPage
        },
        {
            path: '/cartProduct',
            name: 'CartProduct',
            component: CartProduct
        },

    ]
})

export default router