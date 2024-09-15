import Account from "../pages/account";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import Homepage from "../pages/homepage";
import Item from "../pages/item";
import Login from "../pages/login";
import Products from "../pages/products";
import Speakers from "../pages/speakers";

const routes = [
  {
    id: 100,
    parent: null,
    path: "",
    exact: true,
    component: Homepage,
  },
  {
    id: 101,
    parent: null,
    path: "lighting",
    exact: true,
    component: Products,
  },
  {
    id: 102,
    parent: null,
    path: "speaker",
    exact: true,
    component: Products,
  },
  {
    id: 103,
    parent: null,
    path: "doorbell",
    exact: true,
    component: Products,
  },
  {
    id: 104,
    parent: null,
    path: "thermostat",
    exact: true,
    component: Products,
  },
  {
    id: 105,
    parent: null,
    path: "doorlock",
    exact: true,
    component: Products,
  },
  {
    id: 106,
    parent: null,
    path: "/lighting/item",
    exact: true,
    component: Item,
  },
  {
    id: 107,
    parent: null,
    path: "/speaker/item",
    exact: true,
    component: Item,
  },
  {
    id: 108,
    parent: null,
    path: "/doorbell/item",
    exact: true,
    component: Item,
  },
  {
    id: 109,
    parent: null,
    path: "/thermostat/item",
    exact: true,
    component: Item,
  },
  {
    id: 110,
    parent: null,
    path: "/doorlock/item",
    exact: true,
    component: Item,
  },
  {
    id: 111,
    parent: null,
    path: "cart",
    exact: true,
    component: Cart,
  },
  {
    id: 112,
    parent: null,
    path: "checkout",
    exact: true,
    component: Checkout,
  },
  {
    id: 113,
    parent: null,
    path: "account",
    exact: true,
    component: Account,
  },
];

export default routes;
