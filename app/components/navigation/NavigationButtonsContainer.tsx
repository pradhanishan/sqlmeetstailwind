import BackButton from "./BackButton";
import NextButton from "./NextButton";

export default function NavigationButtonsContainer({
  backLink,
  nextLink,
}: {
  backLink: string;
  nextLink: string;
}) {
  return (
    <div className="flex flex-row space-x-4">
      <BackButton href={backLink} />
      <NextButton href={nextLink} />
    </div>
  );
}
