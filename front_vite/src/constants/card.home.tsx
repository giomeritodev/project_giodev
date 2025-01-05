import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";

export const CARD_HOME = [
    {
        title: "Total vendas",
        description: "Total de vendas no mês",
        body: "R$ 40.000,00",
        icon: <DollarSign className="ml-auto w-4 h-4" />,
    },
    {
        title: "Novos clientes",
        description: "Total de clientes no mês",
        body: "234",
        icon: <Users className="ml-auto w-4 h-4" />,
    },
    {
        title: "Pedidos hoje",
        description: "Total de pedidos do dia",
        body: "65",
        icon: <Percent className="ml-auto w-4 h-4" />,
    },
    {
        title: "Pedidos mês",
        description: "Total de pedidos do mês",
        body: "2300",
        icon: <BadgeDollarSign className="ml-auto w-4 h-4" />,
    },
]