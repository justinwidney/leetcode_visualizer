import { DisplayModeSelector } from "./DisplayModeSelector";
import { SizeSelector } from "./SizeSelector";
import { Title } from "../Title";
import { KValueSelector } from "./KValueSelector";

export const Settings = () => {
  return (
    <div className="flex flex-col gap-8">
      <Title title="Settings" />
      <SizeSelector />
      <DisplayModeSelector />
      <KValueSelector />
    </div>
  );
};
