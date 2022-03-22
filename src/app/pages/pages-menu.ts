import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Exercice",
    icon: "clipboard",
    link: "/pages/dashboard",
    home: true,
  },
  {
    title: "Partenaire",
    icon: "people-outline",
    children: [
      {
        title: "Form Layouts",
        link: "/pages/forms/layouts",
      },
    ],
  },
  {
    title: "journall",
    icon: "file-text-outline",
    link:"/pages/journall/journall" ,  
  }
  ,
  {
    title: "Compte Bancaire",
    icon: "map-outline",
    children: [
      {
        title: "Google Maps",
        link: "/pages/maps/gmaps",
      },
      {
        title: "Leaflet Maps",
        link: "/pages/maps/leaflet",
      },
      {
        title: "Bubble Maps",
        link: "/pages/maps/bubble",
      },
      {
        title: "Search Maps",
        link: "/pages/maps/searchmap",
      },
    ],
  },
  {
    title: "Charts",
    icon: "pie-chart-outline",
    children: [
      {
        title: "Echarts",
        link: "/pages/charts/echarts",
      },
      {
        title: "Charts.js",
        link: "/pages/charts/chartjs",
      },
      {
        title: "D3",
        link: "/pages/charts/d3",
      },
    ],
  },

  {
    title: "Miscellaneous",
    icon: "shuffle-2-outline",
    children: [
      {
        title: "404",
        link: "/pages/miscellaneous/404",
      },
    ],
  },
  {
    title: "Auth",
    icon: "lock-outline",
    children: [
      {
        title: "Login",
        link: "/auth/login",
      },
      {
        title: "Register",
        link: "/auth/register",
      },
      {
        title: "Request Password",
        link: "/auth/request-password",
      },
      {
        title: "Reset Password",
        link: "/auth/reset-password",
      },
    ],
  },
];
