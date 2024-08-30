import { HiOutlineAnnotation, HiOutlineCog, HiOutlineCube, HiOutlineQuestionMarkCircle, HiOutlineShoppingCart, HiOutlineUsers, HiOutlineViewGrid } from "react-icons/hi";


export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'product',
        label: 'Produtos',
        path: '/produtos',
        icon: <HiOutlineCube />
    },
    {
        key: 'orders',
        label: 'Pedido',
        path: '/pedidos',
        icon: <HiOutlineShoppingCart />
    },
    {
        key: 'partners',
        label: 'Parceiros',
        path: '/partner',
        icon: <HiOutlineUsers />
    },    
    {
        key: 'messages',
        label: 'Messages',
        path: '/messages',
        icon: <HiOutlineAnnotation />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]