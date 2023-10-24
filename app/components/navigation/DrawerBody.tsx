"use client";

import Heading from "../Heading";
import NavigationButton from "./NavigationButton";

export default function DrawerBody({
  closeDrawer,
}: {
  closeDrawer: () => void;
}) {
  const navItemsData: {
    key: string;
    name: string;
    href: string;
  }[] = [
    { key: "nav-item-0", name: "Introduction", href:"/joins" },
    { key: "nav-item-1", name: "Inner Join", href:"/joins/inner-join" },
    { key: "nav-item-2", name: "Left Join", href:"/joins/inner-join" },
    { key: "nav-item-3", name: "Right Join", href:"/joins/inner-join" },
    { key: "nav-item-4", name: "Full Join", href:"/joins/inner-join" },
    { key: "nav-item-5", name: "Cross Join", href:"/joins/inner-join" },
    { key: "nav-item-6", name: "Semi Join", href:"/joins/inner-join" },
    { key: "nav-item-7", name: "Anti Join", href:"/joins/inner-join" },
    { key: "nav-item-8", name: "Natural Join", href:"/joins/inner-join" },
    { key: "nav-item-9", name: "Self Join", href:"/joins/inner-join" },
  ];

  const navItems = navItemsData.map((item) => {
    return (
      <NavigationButton
        key={item.key}
        name={item.name}
        href={item.href}
        closeDrawer={closeDrawer}
      />
    );
  });

  return (
    <div
      className="w-[250px] h-full bg-gray-300 dark:bg-gradient-to-br dark:from-slate-900 dark:to-sky-900 
      flex flex-col justify-start items-center overflow-y-auto py-16 px-2 space-y-10 scrollbar-hidden
    "
    >
      <div
        onClick={() => {
          closeDrawer();
        }}
      >
        <Heading />
      </div>
      {/* Nav Items /> */}
      <div className="flex flex-col space-y-4 w-full"> {navItems}</div>
    </div>
  );
}
