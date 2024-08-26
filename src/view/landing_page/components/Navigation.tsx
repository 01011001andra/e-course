"use client";

import { useScroll } from "framer-motion";
import React, { useState } from "react";
import FixedNav from "./FixedNav";
import StaticNav from "./StaticNav";

const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { scrollY } = useScroll();
  scrollY.onChange((y) => setScrollPosition(y));
  return (
    <div>
      <FixedNav />
      <StaticNav />
    </div>
  );
};

export default Navigation;
