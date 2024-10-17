import { ReactElement } from "react";
import { Button } from "./button/button";

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    icon: ReactElement;
    message: string;    
}

export function ModalConfim({isOpen, onClose, onConfirm, icon, message}: ConfirmModalProps){

    if(isOpen){
        return(
            <div className="fixed inset-0 bg-white bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                <div className="w-92 h-72 bg-white rounded-xl flex flex-col items-center justify-between px-4 py-1">
                    <div className="flex flex-col items-center gap-2 w-3/4 p-4">
                        {icon}
                        <p className="font-medium text-black text-xl text-center">{message}</p>
                    </div>
                    <div className="flex justify-evenly w-full mb-2">
                        <Button onClick={onConfirm}>
                            Sim
                        </Button>
                        <Button variant="secondary" onClick={onClose}>
                            Não
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return null;
}