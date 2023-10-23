"use client";

import { useState } from "react";
import DrawerOpenButton from "./DrawerOpenButton";
import Drawer from "./Drawer";

export default function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <div>
      {/* Drawer Opener */}
      <DrawerOpenButton openDrawer={openDrawer} />
      {/* Drawer closer */}

      {/* Drawer */}
      {isDrawerOpen === true ? <Drawer closeDrawer={closeDrawer} /> : null}
    </div>
  );
}
