import {Outlet} from "react-router-dom"
import { SideBar } from "./siderBar"
import { Header } from "./header"

export function Layout(){
    return (
        <div className="flex flex-row bg-zinc-800 h-screen overflow-hidden">            
            <SideBar />
            <div className="w-screen">
                <Header/>
                <div className="p-4">
                    {<Outlet />}
                </div>
            </div>
        </div>
    )
}