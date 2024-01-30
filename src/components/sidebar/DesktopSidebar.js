import React, { useContext, useEffect } from "react";
import SidebarContent from "./SidebarContent";
import UserSidebarContent from "./UserSidebarContent";
import { AdminContext } from "../../context/AdminContext";

const DesktopSidebar = () => {
  const { state, dispatch } = useContext(AdminContext);
  const { adminInfo } = state;

  return (
    <aside className="z-30 flex-shrink-0 hidden shadow-sm w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
      {adminInfo.role == "admin"
        ?
        <SidebarContent />
        :adminInfo.role=="shopowner"? <UserSidebarContent />:<></>}
    </aside>
  );
};

export default DesktopSidebar;
