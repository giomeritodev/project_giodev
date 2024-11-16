import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from "../../page/product";
import { Home } from "../../page/home";
import { Layout } from "../shared/layout";  
import { Login } from "../../page/login";
import { Order } from "../../page/order";
import { ProductNew } from "../../page/product/new_product";
import { ListProduct } from "../../page/product/list_product";
import { Partner } from "../../page/partner";
import { Unit } from "../../page/unit";
import { NewUnit } from "../../page/unit/new_unit";
import { Category } from "../../page/category";
import { NewCategory } from "../../page/category/new_category";
import { NewPartner } from "../../page/partner/new_partner";
import { ListPartner } from "../../page/partner/list_partner";

export function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="/produtos" element={<Product />}/>
                    <Route path="/produtos/novo" element={<ProductNew />}/>
                    <Route path="/produtos/:id" element={<ListProduct />} />
                    <Route path="/parceiros" element={<Partner />} />
                    <Route path="/parceiros/novo" element={<NewPartner />} />
                    <Route path="/parceiros/:id" element={<ListPartner />} />
                    <Route path="/pedidos" element={<Order />}/>
                    <Route path="/unidades" element={<Unit />}/>
                    <Route path="/unidades/novo" element={<NewUnit />}/>
                    <Route path="/categorias" element={<Category />}/>
                    <Route path="/categorias/novo" element={<NewCategory />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}