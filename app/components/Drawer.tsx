"use-client";

import DrawerCloseButton from "./DrawerCloseButton";

export default function Drawer({ closeDrawer }: { closeDrawer: () => void }) {
  return (
    <div className="h-screen fixed left-0 top-0 flex w-screen">
      {/* drawer */}
      <div
        className="
        w-[250px] h-full
        bg-gray-400
       
        dark:bg-gradient-to-br dark:from-slate-900 dark:to-sky-900"
      >
        <DrawerCloseButton closeDrawer={closeDrawer} />
      </div>
      {/* backdron */}
      <div
        className="flex-grow backdrop-blur-sm border-l border-slate-500 dark:border-sky-800 "
        onClick={closeDrawer}
      ></div>
    </div>
  );
}
