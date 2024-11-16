import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../../../lib/api";
import { toast } from "react-toastify";
import { TypePartner } from "../interface/TypePartner";
import { CityType } from "../interface/CityType";
import { PartnerType } from "../interface/Partner";
import { AddressType } from "../interface/Address";


export function UsePartner(){
    const navigate = useNavigate();

    const [partnerId, setPartnerId] = useState<number>();
    const [name, setName] = useState("");
    const [cpfOrCnpj, setCpfOrCnpj] = useState("");
    const [typePartnerId, setTypePartnerId] = useState<number>();
    const [fone, setFone] = useState("");
    const [addressId, setAddressId] = useState<number>();
    const [public_place, setPublicPlace] = useState("");
    const [complement, setComplement] = useState("");
    const [number_address, setNumberAddress] = useState<number>();
    const [cep, setCep] = useState("");
    const [sector, setSector] = useState("");
    const [cityId, setCityId] = useState<number>();
    const [description, setDescription] = useState("");
    const [partner, setPartner] = useState<PartnerType>();

    const [address, setAddress] = useState<AddressType[]>([])

    const [typePartners, setTypePartners] = useState<TypePartner[]>([])
    const [cities, setCities] = useState<CityType[]>([])

    async function deletePartner(id: number){
        try {
            await api.delete(`/partner/${id}`).then(response => {
                toast.success("Parceiro deletado com sucesso!")            
                return response;
            })            
        } catch (error) {
            toast.error("Erro ao deletar item, verificar relação com outras tabelas.")
        }
    }

    async function createPartner(e: FormEvent){
        e.preventDefault();
        try {
            api.post("/partner", {name, cpfOrCnpj, typePartnerId, fone}).then(response => {
                setPartnerId(response.data.id);
                toast.success("Dados cadastrados com sucesso.")
            });
            
            api.post("/address", {public_place, complement, number_address, cep, sector, cityId, partnerId});
            //navigate("/parceiros") 
                       
            console.log(partnerId, addressId, address)

            
        } catch (error) {
            toast.error("Ops, houve um erro no cadastro!")
        }
    }

    async function findAllTypePartner(){
        try {
            await api.get("type-partner").then(response => {
                setTypePartners(response.data)
            })
        } catch (error) {
            toast.error("Ops, houve um erro ao buscar os tipos de parceiros.")
        }
    }

    async function findAllCities() {
        try {
            await api.get("city").then(response => {
                setCities(response.data);
            })
        } catch (error) {
            toast.error("Ops, houve um erro ao carredar as cidades.")
        }    
    }

    async function findByPartner(id: number){
        try {
            await api.get(`/partner/${id}`).then(response => {
                setPartner(response.data);
                setAddress(response.data.addresses)
            })
        } catch (error) {
            toast.error("Houve um erro, parceiro não encontrato.")
        }
    }

    useEffect(() => {
        findAllTypePartner()
        findAllCities()
    }, [])


    return {
        name,
        setName,
        cpfOrCnpj,
        setCpfOrCnpj,
        typePartnerId,
        setTypePartnerId,
        fone, 
        setFone,
        deletePartner,
        createPartner,
        public_place,
        setPublicPlace,
        complement,
        setComplement,
        number_address,
        setNumberAddress,
        cep,
        setCep,
        sector,
        setSector,
        cityId,
        setCityId,
        description,
        setDescription,
        typePartners,
        cities,
        partner,
        findByPartner,
        address,
    }
}