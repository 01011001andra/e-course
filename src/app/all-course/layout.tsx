import Footer from "@/view/landing_page/components/Footer";
import Navigation from "@/view/landing_page/components/Navigation";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
