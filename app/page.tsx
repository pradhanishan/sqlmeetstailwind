import Table from "./components/Table";
import ToggleThemeButton from "./components/ToggleThemeButton";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow justify-center items-center page-bg-primary">
      <Table/>
      <ToggleThemeButton />
    </div>
  );
}
