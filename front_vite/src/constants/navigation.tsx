import { 
  BookOpen, 
  FolderDown, 
  Frame, 
  GalleryVerticalEnd, 
  HomeIcon, 
  Map, 
  PieChart, 
  Settings2, 
  ShoppingBag,
  Users 
} from "lucide-react";

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
        {
          title: "Parceiro por tipo",
          url: "/parceiros/tipo",
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
        {
          title: "Formas de pagamento",
          url: "/formasDePagamento",
        },
        {
          title: "Tipo de parceiro",
          url: "/tipoDeParceiro",
        },
        {
          title: "Cidades",
          url: "/cidades",
        },
        {
          title: "Estados",
          url: "/estados",
        },   
        {
          title: "Status pagamento",
          url: "/statusDePagamento",
        },
        {
          title: "Status",
          url: "/status",
        },            
      ],
    },
    {
      title: "Entrada",
      url: "#",
      icon: FolderDown,
      items: [
        {
          title: "Todos",
          url: "/entradas",
        },
        {
          title: "Nova entrada",
          url: "/entradas/novo",
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