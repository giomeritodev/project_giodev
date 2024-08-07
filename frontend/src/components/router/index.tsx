import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from "../../page/product";
import { Home } from "../../page/home";
import { Layout } from "../shared/layout";  
import { Login } from "../../page/login";

export function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="/products" element={<Product/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}