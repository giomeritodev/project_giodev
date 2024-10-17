import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "../../lib/constants/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";



export function SideBar(){   
    const {pathname} = useLocation();

    return (
        <div className="flex flex-col w-60 p-3 bg-zinc-800">
            <div className="flex items-center gap-2 px-1 py-2">
                <FcBullish className="size-5" />
                <span className="text-lg">Visão Sistema</span>
            </div>
            
            <div className="flex-1 py-8 flex flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <div key={item.key}>
                        <Link className={classNames(pathname === item.path ? "bg-zinc-700 text-zinc-50" : "text-zinc-500" ,"flex items-center gap-2 px-3 py-2 hover:bg-zinc-700 hover:no-underline active:bg-zinc-700 rounded-sm text-base")} to={item.path}>
                            {item.icon} {item.label}
                        </Link>                        
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-0.5 pt-2 border-t bg-zinc-800">
                {
                    DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                        <Link 
                            key={item.key} 
                            className={
                                classNames(pathname === item.path ? 
                                "bg-zinc-700 text-zinc-50" : 
                                "" ,"flex items-center gap-2 px-3 py-2 hover:bg-zinc-700 hover:no-underline active:bg-zinc-700 rounded-sm text-base")} 
                            to={item.path}
                        >
                            {item.icon} {item.label}
                        </Link>                        
                    ))
                }
                    <Link className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-700 hover:no-underline active:bg-zinc-700 rounded-sm text-base" to="/logout">
                        <HiOutlineLogout className="text-red-500"/>   
                        <span className="text-red-500">Logout</span>
                    </Link> 
            </div>
        </div>
    )
}