import NavigationUser from "@/view/user/components/Navigation";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <React.Fragment>
      <NavigationUser />
      {children}
    </React.Fragment>
  );
};

export default Layout;
