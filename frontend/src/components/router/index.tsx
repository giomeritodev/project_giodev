import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from "../../page/product";
import { Home } from "../../page/home";
import { Layout } from "../shared/layout";  
import { Login } from "../../page/login";
import { Order } from "../../page/order";
import { ProductNew } from "../../page/product/new_product";

export function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="/produtos" element={<Product />}/>
                    <Route path="/produtos/novo" element={<ProductNew />}/>
                    <Route path="/pedidos" element={<Order />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}