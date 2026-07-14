export function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="header-scroll -rotate-90 whitespace-nowrap">
        <span className="scroll-text text-xs font-bold tracking-[1.44px] text-on-brand uppercase">
          scroll
        </span>
      </div>
      <div className="scroll-icon h-[35px] w-px animate-scroll-bar bg-on-brand" />
    </div>
  );
}
