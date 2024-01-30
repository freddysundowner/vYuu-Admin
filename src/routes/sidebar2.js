import {
  FiGrid,
  FiShoppingBag,
  FiCompass,
  FiList,
  FiSlack,
} from "react-icons/fi";

/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */

const Sidebar2 = [
  {
    path: "/dashboard", // the url
    icon: FiGrid, // icon
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/products",
    icon: FiShoppingBag,
    name: "Products",
  },

  {
    path: "/rooms",
    icon: FiList,
    name: "TokShows",
  },

  {
    path: "/orders",
    icon: FiCompass,
    name: "Orders",
  },
  {
    icon: FiSlack,
    name: "Setting",
    routes: [
      // submenu

      {
        path: "/woocommerce",
        name: "Woocommerce",
      },
      {
        path: "/shopify",
        name: "Shopify",
      },
      {
        path: "/shippingmethods",
        name: "Shipping Methods",
      },
    ],
  },
];

export default Sidebar2;
