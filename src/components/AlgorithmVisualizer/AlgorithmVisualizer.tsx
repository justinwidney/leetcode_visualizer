import { useStore } from "@/store";
import { Reorder } from "framer-motion";
import { Item } from "./Item";
import { cn } from "@/utils/cn";
import { useRef, useState } from "react";

export const AlgorithmVisualizer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemMaxHeight, setItemMaxHeight] = useState(0);

  const {
    items,
    setItems,
    activeItems,
    doneItems,
    tempItems,
    arrayId,
    displayMode,
    displayType

  } = useStore();

  const containerHeight = containerRef.current?.getBoundingClientRect().height;


  if (containerHeight && containerHeight !== itemMaxHeight) {
    //setItemMaxHeight(371);
  }


  return (
    <div className="border border-accent/50 lg:border-none lg:bg-accent rounded flex flex-col items-center justify-center overflow-hidden h-full p-1 md:p-2 lg:p-3 xl:p-8">
      <Reorder.Group
        ref={containerRef}
        axis="x"
        values={items}
        onReorder={setItems}
        className={cn(
          "w-full lg:max-w-4xl flex items-end justify-center md:gap-2 gap-1 lg:gap-3 h-full",
          {
            "items-center": displayMode === "numbers",
          }
        )}
      >
        {items.map((item) => (
          <Item
            key={`${arrayId}-${item.id}`}
            itemMaxHeight={370}
            item={item.value}
            isActive={activeItems.some(activeItem => activeItem.id === item.id)} 
            isDone={doneItems.some(doneItem => doneItem.id === item.id)}         
            isTemp={tempItems.some(tempItem => tempItem.id === item.id)}   
          />
        ))}
      </Reorder.Group>
      {displayType === 'active' && <Reorder.Group
        ref={containerRef}
        axis="x"
        values={items}
        onReorder={setItems}
        className={cn(
          "w-full lg:max-w-4xl flex items-end justify-center md:gap-2 gap-1 lg:gap-3 h-full",
          {
            "items-center": displayMode === "numbers",
          }
        )}
      >
        {items.map((item) => (
          <Item
            key={`${arrayId}-${item.id}`}
            itemMaxHeight={370}
            item={item.value}
            isActive={activeItems.some(activeItem => activeItem.id === item.id)} 
            isDone={doneItems.some(doneItem => doneItem.id === item.id)}         
            isTemp={tempItems.some(tempItem => tempItem.id === item.id)}   
          />
        ))}
      </Reorder.Group> }

    </div>
  );
};
