"use-client";

import DrawerBody from "./DrawerBody";

export default function Drawer({ closeDrawer }: { closeDrawer: () => void }) {
  return (
    <div className="h-screen fixed left-0 top-0 flex w-screen">
      {/* drawer */}
      <DrawerBody closeDrawer={closeDrawer}/>
      {/* backdrop */}
      <div
        className="flex-grow backdrop-blur-sm border-l border-slate-500 dark:border-sky-800 "
        onClick={closeDrawer}
      ></div>
    </div>
  );
}
