import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import classNames from "classnames";
import { useNavigate } from "react-router-dom";


export function Header(){
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center h-16 px-4 w-full bg-zinc-700">
            <div className="flex items-center h-10 px-4 gap-2 bg-zinc-900 rounded-3xl">
                <div>
                    <HiOutlineSearch />
                </div>
                <div>
                    <input className="p-1 bg-transparent active:outline-none text-sm focus:outline-none" type="text" placeholder="Pesquisar"/>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div>
                    <Popover className="relative">
                        {({ open }) => (
                            /* Use the `open` state to conditionally change the direction of the chevron icon. */
                            <>
                                <PopoverButton
                                    className={classNames(open && "bg-gray-900", "p-1.5 rounded-sm inline-flex items-center text-gray-50 hover:text-opacity-50 focus:outline-none")}
                                >                                
                                    <HiOutlineChatAlt fontSize={24} />
                                </PopoverButton>       
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <PopoverPanel className="absolute z-10 right-0 mt-2.5 w-80 bg-zinc-100 text-zinc-950">
                                        <div className="rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                            <strong className="font-medium">Messages</strong>
                                            <div className="mt-2 py-1 text-sm">
                                                Painel de mensagens 
                                            </div>                                       
                                        </div>
                                    </PopoverPanel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                   
                </div>
                <div>
                    <Popover className="relative">
                        {({ open }) => (
                            /* Use the `open` state to conditionally change the direction of the chevron icon. */
                            <>
                                <PopoverButton
                                    className={classNames(open && "bg-gray-900", "p-1.5 rounded-sm inline-flex items-center text-gray-50 hover:text-opacity-50 focus:outline-none")}
                                >                                
                                    <HiOutlineBell fontSize={24} />
                                </PopoverButton>       
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <PopoverPanel className="absolute z-10 right-0 mt-2.5 w-80 bg-zinc-100 text-zinc-950">
                                        <div className="rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                            <strong className="font-medium">Notificações</strong>
                                            <div className="mt-2 py-1 text-sm">
                                                Painel de notificações 
                                            </div>                                       
                                        </div>
                                    </PopoverPanel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                   
                </div>
                <div>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <MenuButton className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                                <span className="sr-only"></span>
                                <div className="h-10 w-10 rounded-full bg-cover bg-zinc-700 bg-no-repeat bg-center" style={{ backgroundImage: 'url("https://avatars.githubusercontent.com/u/38664875?v=4")' }}>
                                    <span className="sr-only">Giomerito Alves</span>
                                </div>
                            </MenuButton>
                        </div>
                        <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <MenuItems className="absolute origin-top-right z-10 right-0 mt-2 w-40 rounded-sm shadow-md p-1 ring-black ring-1 ring-opacity-5 focus:outline-none bg-zinc-100 text-zinc-950">
                                <div className="px-1 py-1 ">                                    
                                    <MenuItem>
                                        {({ active }) => (
                                            <div
                                                className={classNames(active && "bg-zinc-700", "focus:bg-zinc-200 cursor-pointer rounded-sm px-4 py-2 block")}
                                                onClick={() => navigate("/profile")}
                                            >
                                                Perfil
                                            </div>                                            
                                        )}
                                    </MenuItem>
                                    <MenuItem>
                                        {({ active }) => (
                                            <div
                                                className={classNames(active && "bg-zinc-700", "focus:bg-zinc-200 cursor-pointer rounded-sm px-4 py-2 block")}
                                                onClick={() => navigate("/settings")}
                                            >
                                                Configurações
                                            </div>                                            
                                        )}
                                    </MenuItem>
                                    <MenuItem>
                                        {({ active }) => (
                                            <div
                                                className={classNames(active && "bg-zinc-700", "focus:bg-zinc-200 cursor-pointer rounded-sm px-4 py-2 block")}
                                                onClick={() => navigate("/logout")}
                                            >
                                                Desconectar
                                            </div>                                            
                                        )}
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    )
}