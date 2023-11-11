import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Administration",
    icon: "clipboard",
    link: "/pages/dashboard",
    home: true,
    children: [
      {
        title: "Plan Comptable",
        icon: "map-outline",
        link: "/pages/compte/compte",
      },
    
      {
        title: "Gestion des Journaux",
        icon: "file-text-outline",
        link:"/pages/journall/journall" ,  
      },
      {
        title: "Gestion des Banques",
        icon: "book-outline",
        link:"/pages/banque/banque" ,  
      },
      {
        title: "Gestion des Fournisseurs",
        icon: "people-outline",
        link:"/pages/fournisseur/fournisseur" ,  
      },
    ],
  },
  {
    title: "Gestion des Opérations",
    icon: "file-add-outline",
    children: [
      {
        title: "Déclaration Des Factures",
        icon: "edit-2-outline",
        link: "/pages/facture/list-facture-compta",
      },
    ],
  },
  // {
  //   title: "journall",
  //   icon: "file-text-outline",
  //   link:"/pages/journall/journall" ,  
  // }
  // ,
  // {
  //   title: "Compte Bancaire",
  //   icon: "map-outline",
  //   children: [
  //     {
  //       title: "Google Maps",
  //       link: "/pages/maps/gmaps",
  //     },
  //     {
  //       title: "Leaflet Maps",
  //       link: "/pages/maps/leaflet",
  //     },
  //     {
  //       title: "Bubble Maps",
  //       link: "/pages/maps/bubble",
  //     },
  //     {
  //       title: "Search Maps",
  //       link: "/pages/maps/searchmap",
  //     },
  //   ],
  // },
  // {
  //   title: "Charts",
  //   icon: "pie-chart-outline",
  //   children: [
  //     {
  //       title: "Echarts",
  //       link: "/pages/charts/echarts",
  //     },
  //     {
  //       title: "Charts.js",
  //       link: "/pages/charts/chartjs",
  //     },
  //     {
  //       title: "D3",
  //       link: "/pages/charts/d3",
  //     },
  //   ],
  // },

  // {
  //   title: "Miscellaneous",
  //   icon: "shuffle-2-outline",
  //   children: [
  //     {
  //       title: "404",
  //       link: "/pages/miscellaneous/404",
  //     },
  //   ],
  // },
  // {
  //   title: "Auth",
  //   icon: "lock-outline",
  //   children: [
  //     {
  //       title: "Login",
  //       link: "/auth/login",
  //     },
  //     {
  //       title: "Register",
  //       link: "/auth/register",
  //     },
  //     {
  //       title: "Request Password",
  //       link: "/auth/request-password",
  //     },
  //     {
  //       title: "Reset Password",
  //       link: "/auth/reset-password",
  //     },
  //   ],
  // },
];
