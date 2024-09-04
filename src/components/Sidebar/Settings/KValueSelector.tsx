import { cn } from "@/utils/cn";
import { useStore } from "@/store";
import { Input } from "@/components/ui/button";


export const KValueSelector = () => {
  const {
    isPlaying,
    setKValue,
  } = useStore();



  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-medium text-foreground text-lg">K Input</h3>
      <div className="grid grid-cols-2 gap-2">
          <Input
            variant="input"
            className={cn(
              "px-4 py-2 capitalize text-white bg-accent h-auto border-2 border-accent",
  
            )}
            onChange={(e) => setKValue(parseInt(e.target.value))}
            disabled={isPlaying}
          >
          </Input>
      </div>
    </div>
  );
};
