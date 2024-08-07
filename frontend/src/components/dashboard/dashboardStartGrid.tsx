import {IoBagHandle } from "react-icons/io5";
import { DivDashboard } from "./divDashboard";


export function DashboardStartGrid(){

    return (
        <div className="flex gap-4 w-full">
           <DivDashboard>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                    <IoBagHandle className="text-2xl"/>
                </div>
                <div className="pl-4">
                    <span className="text-sm font-light">Total de vendas</span>
                    <div className="flex item-center">
                        <strong className="text-xl text-gray-300 font-semibold">R$ 5454,60</strong>
                        <span className="text-sm text-green-500 pl-2">-234</span>
                    </div>
                </div>
           </DivDashboard>
           <DivDashboard>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
                    <IoBagHandle className="text-2xl"/>
                </div>
                <div className="pl-4">
                    <span className="text-sm font-light">Total de despesas</span>
                    <div className="flex item-center">
                        <strong className="text-xl text-gray-300 font-semibold">R$ 5454,60</strong>
                        <span className="text-sm text-green-500 pl-2">-234</span>
                    </div>
                </div> 
           </DivDashboard>
           <DivDashboard>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-500">
                    <IoBagHandle className="text-2xl"/>
                </div>
                <div className="pl-4">
                    <span className="text-sm font-light">Total de vendas</span>
                    <div className="flex item-center">
                        <strong className="text-xl text-gray-300 font-semibold">R$ 5454,60</strong>
                        <span className="text-sm text-green-500 pl-2">-234</span>
                    </div>
                </div> 
           </DivDashboard>
           <DivDashboard>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-pink-500">
                    <IoBagHandle className="text-2xl"/>
                </div>
                <div className="pl-4">
                    <span className="text-sm font-light">Total de vendas</span>
                    <div className="flex item-center">
                        <strong className="text-xl text-gray-300 font-semibold">R$ 5454,60</strong>
                        <span className="text-sm text-green-500 pl-2">-234</span>
                    </div>
                </div> 
           </DivDashboard>
        </div>
    )
}