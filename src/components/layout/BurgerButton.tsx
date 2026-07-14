"use client";

type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  variant?: "light" | "dark";
};

export function BurgerButton({
  isOpen,
  onClick,
  variant = "light",
}: BurgerButtonProps) {
  const lineColor = variant === "light" ? "bg-on-brand" : "bg-foreground";

  return (
    <button
      type="button"
      aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      aria-expanded={isOpen}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className={`c-header-burger absolute top-[6px] right-[15px] z-[999] h-10 w-10 text-center md:top-[25px] md:right-[35px] ${
        isOpen ? "pointer-events-none opacity-0" : "opacity-100"
      } transition-opacity duration-300`}
    >
      <span
        className={`c-header-burger-line relative mx-auto block h-px w-full ${lineColor} transition-colors duration-300 before:absolute before:inset-x-0 before:-top-[5px] before:h-px before:content-[''] after:absolute after:inset-x-0 after:-bottom-[5px] after:h-px after:content-[''] ${
          variant === "light"
            ? "before:bg-on-brand after:bg-on-brand"
            : "before:bg-foreground after:bg-foreground"
        }`}
      />
    </button>
  );
}
