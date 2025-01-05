import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../../app/dashboard/layout";
import { HomePage } from "../../pages/home";
import { Products } from "../../pages/products";
import { NewProduct } from "../../pages/products/newProduct";
import { DetailsProduct } from "@/pages/products/detailsProduct";
import { Categories } from "@/pages/categories";
import { Unities } from "@/pages/unities";


export function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/produtos" element={<Products />} />
                    <Route path="/produtos/novo" element={<NewProduct />} />
                    <Route path="/produtos/detalhes/:id" element={<DetailsProduct />} />
                    <Route path="/categorias" element={<Categories />} />
                    <Route path="/unidades" element={<Unities />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}