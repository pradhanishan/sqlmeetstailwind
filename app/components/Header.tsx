import Heading from "./Heading";
import NavigationDrawer from "./navigation/Navigation";
import ToggleThemeButton from "./ToggleThemeButton";

export default function Header() {
  return (
    // Header container
    <div
      className="
      bg-gray-300
       dark:bg-gradient-to-br dark:from-slate-800 dark:to-sky-700
      px-4 py-3 fixed top-0 w-full z-10 overflow-hidden
      flex justify-between items-center
      "
    >
      {/* NavigationDrawer */}
      <NavigationDrawer />
      {/* heading container */}
      <Heading />
      {/* toggle theme button */}
      <ToggleThemeButton />
    </div>
  );
}
