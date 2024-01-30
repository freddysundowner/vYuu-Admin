import {
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiUser,
  FiCompass,
  FiList,
  FiSlack,
} from "react-icons/fi";

const sidebar = [
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
    path: "/channels",
    icon: FiList,
    name: "Channels",
  },
  {
    path: "/rooms",
    icon: FiList,
    name: "TokShows",
  },
  {
    path: "/users",
    icon: FiUsers,
    name: "Users",
  },
  {
    path: "/orders",
    icon: FiCompass,
    name: "Orders",
  },
  {
    path: "/admins",
    icon: FiUser,
    name: "Admins",
  },
  {
    icon: FiSlack,
    name: "Setting",
    routes: [
      // submenu
      {
        path: "/settings",
        name: "Settings",
      },
    ],
  },
];

export default sidebar;
