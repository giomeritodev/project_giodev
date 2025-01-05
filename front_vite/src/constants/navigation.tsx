import { url } from "inspector";
import { AudioWaveform, BookOpen, Bot, Command, Frame, GalleryVerticalEnd, Home, HomeIcon, Icon, List, LogOut, Map, Newspaper, Package, PieChart, Plus, Settings2, ShoppingBag, SquareTerminal, Users } from "lucide-react";
import { title } from "process";


export const SIDE_BAR_NAVIGATION = [
    {
        link: "#",
        label: "Início",
        icon: <Home className="w-5 h-5" />
    },
    {
        link: "#",
        label: "Pedidos",
        icon: <ShoppingBag className="w-5 h-5" />
    },
    {
        link: "#",
        label: "Produtos",
        icon: <Package className="w-5 h-5" />
    },
    {
        link: "#",
        label: "Clientes",
        icon: <Users className="w-5 h-5" />
    },
]

export const SIDE_BAR_NAVIGATION_BOTTOM = [
    {
        link: "#",
        label: "Sair",
        icon: <LogOut className="h-5 w-5 text-red-700 hover:h-6 hover:w-6" />
    }
]


export const data1 = {
    versions: ["1.0.0 - Dev", "1.0.1"],
    navMain: [
      {
        title: "Início",
        url: "/home",
        items: [],
      },
      {
        title: "Produtos",
        url: "/produtos",
        items: [
          {
            icon: <List />,
            title: "Todos",
            url: "/produtos/lista",
          },
          {
            icon: <Plus />,
            title: "Novo",
            url: "/produtos/novo",
          },
        ],
      },
      {
        title: "Parceiros",
        url: "#",
        items: [
          {
            icon: <List />,
            title: "Todos",
            url: "#",
          },
          {
            icon: <Plus />,
            title: "Novo",
            url: "#",
            isActive: true,
          },
        ],
      },
      {
        title: "Cadastros",
        url: "#",
        items: [
          {
            icon: <Plus />,
            title: "Unidade de medida",
            url: "#",
          },
          {
            icon: <Plus />,
            title: "Categoria",
            url: "#",
          },
          {
            icon: <Plus />,
            title: "Tipo de parceiros",
            url: "#",
          },
          {
            icon: <Plus />,
            title: "next.config.js Options",
            url: "#",
          },
          {
            icon: <Newspaper />,
            title: "CLI",
            url: "#",
          },
          {
            icon: <Newspaper />,
            title: "Edge Runtime",
            url: "#",
          },
        ],
      },
      {
        title: "Vendas",
        url: "#",
        items: [
          {
            icon: <List />,
            title: "Todos",
            url: "#",
          },
          {
            icon: <Plus />,
            title: "Novo",
            url: "#",
          },        
        ],
      },
      {
        title: "Compras",
        url: "#",
        items: [
          {
            icon: <List />,
            title: "Todos",
            url: "#",
          },
          {
            icon: <Plus />,
            title: "Novo",
            url: "#",
          },
        ],
      },
    ],
  }

  // This is sample data.
export const data = {
  user: {
    name: "Giomerito Alves",
    email: "giomerito.dev@gmail.com",
    avatar: "https://github.com/giomeritodev.png",
  },
  teams: [
    {
      name: "Visão Sistema",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },    
  ],
  navMain: [
    {
      title: "Início",
      url: "/",
      icon: HomeIcon,
      items: [
        {
          title: "Voltar para tela inicial",
          url: "/",
        }
      ]
    },
    {      
      title: "Produtos",
      url: "#",
      icon: ShoppingBag,
      isActive: true,
      items: [
        {
          title: "Todos",
          url: "/produtos",
        },
        {
          title: "Novo produto",
          url: "/produtos/novo",
        },
        {
          title: "Produtos para compra",
          url: "/produtos/compra",
        },
        {
          title: "Produtos sem estoque",
          url: "/produtos/zerados",
        },
        {
          title: "Produtos com estoque",
          url: "/produtos/positivos",
        },
      ],
    },    
    {
      title: "Parceiros",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Todos",
          url: "/parceiros",
        },
        {
          title: "Novo parceiro",
          url: "/parceiros/novo",
        },        
      ],
    },
    {
      title: "Cadastros",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Categorias",
          url: "/categorias",
        },
        {
          title: "Unidade de medida",
          url: "/unidades",
        },        
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}