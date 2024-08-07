import { BuyerProfileChart } from "../../components/dashboard/buyerProfileChart";
import { DashboardStartGrid } from "../../components/dashboard/dashboardStartGrid";
import { TransationChart } from "../../components/dashboard/transationChart";
import { RecentOrders } from "../order/recentOrders";
import { PopularProducts } from "../product/popularProducts";


export function Home(){
    return (
        <div className="flex flex-col gap-4">
            <DashboardStartGrid />
            <div className="flex gap-2">               
                <TransationChart />                
                <BuyerProfileChart />              
            </div>
            <div className="flex flex-row gap-2">                
                <RecentOrders />
                <PopularProducts />                
            </div>
        </div>      
               
    )
}