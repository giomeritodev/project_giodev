import { useEffect } from "react";
import { UsePartner } from "../hooks/usePartner"

interface AddressNewProps {
    open: boolean,
    partnerId: number,
}

export function AddressModal({partnerId, open}: AddressNewProps){
    const {
        findByPartner,
    } = UsePartner();

    useEffect(() => {
        findByPartner(partnerId);
    }, [])


    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal={open}>
            <form>
                <div>Aberto</div>
            </form>
        </div>
    )
}