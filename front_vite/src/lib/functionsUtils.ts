import { FormEvent, useState } from "react"


export function HookFunctionsUtils(){
    const [buttonStatus, setButtonStatus] = useState<boolean>(true)

    function statusButton(event: FormEvent){
        event.preventDefault();
        setButtonStatus(false);
    }
    function statusButtonCancel(event: FormEvent){
        event.preventDefault();
        setButtonStatus(true);
    }

    return {
        buttonStatus,
        statusButton,
        statusButtonCancel,
    }
}