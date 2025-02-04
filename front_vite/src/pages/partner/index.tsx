import { UsePartner } from "./hooks/usePartner";
import { ListPartners } from "./listPartners";


export function Partners(){

    const { partners } = UsePartner();

    return (
        <div>
            <h1>Pagina lista de todos os parceiros</h1>

            <div>
                <ListPartners partners={partners} />
            </div>
        </div>
    )
}