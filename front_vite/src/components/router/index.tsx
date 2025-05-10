import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../../app/dashboard/layout";
import { HomePage } from "../../pages/home";
import { Products } from "../../pages/products";
import { NewProduct } from "../../pages/products/newProduct";
import { DetailsProduct } from "@/pages/products/detailsProduct";
import { Categories } from "@/pages/categories";
import { Unities } from "@/pages/unities";
import { FormOfPayment } from "@/pages/formOfPayment";
import { TypePartner } from "@/pages/typePartner";
import { Partners } from "@/pages/partner";
import { PartnerType } from "@/pages/partner/partner-type";
import { NewPartner } from "@/pages/partner/newPartner";
import { DetailsPartner } from "@/pages/partner/detailsPartner";
import { Cities } from "@/pages/cities";
import { States } from "@/pages/states";
import { Entry } from "@/pages/entry";
import { DetailsEntries } from "@/pages/entry/detailsEntries";
import { StatusPayment } from "@/pages/statusPayment";
import { Status } from "@/pages/status";


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
                    <Route path="/formasDePagamento" element={<FormOfPayment />} />
                    <Route path="/tipoDeParceiro" element={<TypePartner />} />
                    <Route path="/parceiros" element={<Partners />} />
                    <Route path="/parceiros/tipo" element={<PartnerType />} />
                    <Route path="/parceiros/novo" element={<NewPartner />} />
                    <Route path="/parceiros/detalhes/:id" element={<DetailsPartner />} />
                    <Route path="/cidades" element={<Cities />} />
                    <Route path="/estados" element={<States />} />
                    <Route path="/statusDePagamento" element={<StatusPayment />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/entradas" element={<Entry />} />
                    <Route path="/entradas/detalhes/:id" element={<DetailsEntries />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}