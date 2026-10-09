import { useState } from "react";
import { cn, Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";

export const Switcher = () => {
  const [isDark, setIsDark] = useState(false);

  const btnClass = (active: boolean) =>
    cn(
      "size-7 rounded-md transition-colors",
      active
        ? "bg-white text-foreground shadow-sm"
        : "bg-transparent text-foreground/40",
    );

  return (
    <div className="flex items-center gap-1 rounded-lg bg-foreground/10 px-1">
      <Button
        isIconOnly
        aria-label="Светлая тема"
        onPress={() => setIsDark(false)}
        className={btnClass(!isDark)}
      >
        <Sun className="size-4" />
      </Button>

      <Button
        isIconOnly
        aria-label="Тёмная тема"
        onPress={() => setIsDark(true)}
        className={btnClass(isDark)}
      >
        <Moon className="size-4" />
      </Button>
    </div>
  );
};
