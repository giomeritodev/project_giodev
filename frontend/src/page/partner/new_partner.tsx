import { HiOutlineReply, HiOutlineSave } from "react-icons/hi";
import { Button } from "../../components/ui/button/button";
import { InputVisao } from "../../components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { LabelVisao } from "../../components/ui/label";
import { SelectVisao } from "../../components/ui/select";
import { UsePartner } from "./hooks/usePartner";


export function NewPartner(){

    const navigate = useNavigate();

    const {
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
    } = UsePartner();

    return (
        <div>
            <form onSubmit={(e) => createPartner(e)}>
                <div className="flex items-center justify-between border border-white/10 p-3 rounded-lg">
                    <div>
                        <span className="text-3xl">Parceiro</span>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        
                        <Button type="submit" variant="primary">
                            Salvar
                            <HiOutlineSave />
                        </Button>
                    
                        <Link to={"/parceiros"}>
                            <Button variant="secondary">
                                Voltar
                                <HiOutlineReply />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="border border-white/10 mt-5 p-5 gap-4 rounded-lg">
                    <div className="flex justify-between gap-2">
                        <div className="w-1/2">
                            <LabelVisao>Nome</LabelVisao>
                            <InputVisao 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="w-1/2">
                            <LabelVisao>CPF ou CNPJ</LabelVisao>
                            <InputVisao 
                                value={cpfOrCnpj}
                                onChange={(e) => setCpfOrCnpj(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between gap-2">
                        <div className="w-1/2">
                            <LabelVisao>Tipo</LabelVisao>
                            <SelectVisao
                                value={typePartnerId}
                                onChange={(e) => setTypePartnerId(Number(e.target.value))}
                            >
                                <option>Selecione uma opção</option>
                                {
                                    typePartners.map(type => (
                                        <option value={type.id}>{type.name}</option>
                                    ))
                                }            
                            </SelectVisao>
                        </div>
                        <div className="w-1/2">
                            <LabelVisao>Telefone</LabelVisao>
                            <InputVisao 
                                value={fone}
                                onChange={(e) => setFone(e.target.value)}
                            />
                        </div>
                    </div>

                   
                    <span className="mt-10 text-2xl">Endereço</span>

                    <div className="flex justify-between gap-2">
                        <div className="w-1/2">
                            <LabelVisao>Logradouro</LabelVisao>
                            <InputVisao 
                                value={public_place}
                                onChange={(e) => setPublicPlace(e.target.value)}
                            />
                        </div> 
                        <div className="w-1/2">
                            <LabelVisao>Bairro</LabelVisao>
                            <InputVisao 
                                value={sector}
                                onChange={(e) => setSector(e.target.value)}
                            />
                        </div>                                          
                    </div>   
 
                    <div className="flex justify-between gap-2">
                        <div className="w-1/3">
                            <LabelVisao>Complemento</LabelVisao>
                            <InputVisao 
                                value={complement}
                                onChange={(e) => setComplement(e.target.value)}
                            />
                        </div>
                        <div className="w-1/3">
                            <LabelVisao>Numero</LabelVisao>
                            <InputVisao 
                                value={number_address}
                                onChange={(e) => setNumberAddress(Number(e.target.value))}
                            />
                        </div>
                        <div className="w-1/3">
                            <LabelVisao>Cep</LabelVisao>
                            <InputVisao 
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                            />
                        </div>
                        
                    </div>
                    <div className="flex justify-between gap-2">
                        <div className="w-1/2">
                            <LabelVisao>Cidade</LabelVisao>
                            <SelectVisao
                                value={cityId}
                                onChange={(e) => setCityId(Number(e.target.value))}
                            >
                                <option>Selecione uma opção!</option>
                                {
                                    cities.map(cid => (
                                        <option value={cid.id}>{cid.name} - {cid.state.uf}</option>
                                    ))
                                }
                            </SelectVisao>
                        </div>
                        <div className="w-1/2">
                            <LabelVisao>Descrição do endereço</LabelVisao>
                            <InputVisao 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>                            
                    </div>                    

                </div>
            </form>
        </div>
    )
}