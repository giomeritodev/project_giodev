import { FormEvent, useState } from "react"


export function HookFunctionsUtils(){
    const [buttonStatus, setButtonStatus] = useState<boolean>(true)
    const [activeInputsStatus, setActiveInputsStatus] = useState<boolean>(true)
        
    function statusActiveInputs(){
        setActiveInputsStatus(false);
    }
    function statusCancelActive(){
        setActiveInputsStatus(true);
    }

    function statusButton(event: FormEvent){
        event.preventDefault();
        setButtonStatus(false);
    }
    function statusButtonCancel(event: FormEvent){
        event.preventDefault();
        setButtonStatus(true);
    }
    
    return {
        activeInputsStatus,
        setActiveInputsStatus,
        statusActiveInputs,
        statusCancelActive,
        buttonStatus,
        statusButton,
        statusButtonCancel,
        setButtonStatus,
    }
}