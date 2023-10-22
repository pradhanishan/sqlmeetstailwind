"use-client";

import DrawerCloseButton from "./DrawerCloseButton";

export default function Drawer({ closeDrawer }: { closeDrawer: () => void }) {
  return (
    <div
      className="h-screen fixed left-0 top-0 
        w-[250px]
        bg-gradient-to-br from-gray-400 to-slate-300
        dark:bg-gradient-to-br dark:from-slate-900 dark:to-sky-900"
    >
      <DrawerCloseButton closeDrawer={closeDrawer} />
    </div>
  );
}
