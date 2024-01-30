import { lazy } from "react";
import AppSettings from "../pages/AppSettings";
import Channels from "../pages/channels";
import ShopDetails from "../pages/ShopDetails";
import ShopifySettings from "../pages/shopify";

// use lazy for better code splitting
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Products = lazy(() => import("../pages/Products"));
const Shops = lazy(() => import("../pages/Shops"));
const ProfileDetails = lazy(() => import("../pages/Profile"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Admin = lazy(() => import("../pages/Admin"));
const Users = lazy(() => import("../pages/Users"));
const CustomerOrder = lazy(() => import("../pages/CustomerOrder"));
const Orders = lazy(() => import("../pages/Orders"));
const OrderInvoice = lazy(() => import("../pages/OrderInvoice"));
// const Setting = lazy(() => import("../pages/Setting"));
const Page404 = lazy(() => import("../pages/404"));
const Woocommerce = lazy(() => import("../pages/Woocomerce"));
const ComingSoon = lazy(() => import("../pages/ComingSoon")); 
const EditProfile = lazy(() => import("../pages/EditProfile"));
const Rooms = lazy(() => import("../pages/Rooms"));
const ShippingMethods = lazy(() => import("../pages/ShippingMethods"));
const Interests = lazy(() => import("../pages/interests"));
;
/*
//  * ⚠ These are internal routes!
//  * They will be rendered inside the app, using the default `containers/Layout`.
//  * If you want to add a route to, let's say, a landing page, you should add
//  * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
//  * are routed.
//  *
//  * If you're looking for the links rendered in the SidebarContent, go to
//  * `routes/sidebar.js`
 */

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/shops",
    component: Shops,
  },
  {
    path: "/product/:id",
    component: ProductDetails,
  },
  {
    path: "/interest/:id/:title",
    component: Interests,
  },
  {
    path: "/shop/:id",
    component: ShopDetails,
  },
  {
    path: "/profile/:id",
    component: ProfileDetails,
  },
  {
    path: "/channels",
    component: Channels,
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/customer-order/:id",
    component: CustomerOrder,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/rooms",
    component: Rooms,
  },
  {
    path: "/order/:id",
    component: OrderInvoice,
  },
  { path: "/setting", component: EditProfile },

  {
    path: "/admins",
    component: Admin,
  },
  {
    path: "/woocommerce",
    component: Woocommerce,
  },
  {
    path: "/coming-soon",
    component: ComingSoon,
  },
  {
    path: "/shopify",
    component: ShopifySettings,
  },
  {
    path: "/settings",
    component: AppSettings,
  },
  {
    path: "/edit-profile",
    component: EditProfile,
  },
  {
    path: "/shippingmethods",
    component: ShippingMethods,
  },
];

export default routes;
