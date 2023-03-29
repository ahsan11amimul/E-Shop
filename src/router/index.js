import {createRouter,createWebHistory} from 'vue-router';
import ProductList from "@/modules/Product/ProductList";

const routes=[
    {
        path:'/',
        component:ProductList
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;