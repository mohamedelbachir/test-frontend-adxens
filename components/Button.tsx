import clsx from "clsx";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
};
export default function ButtonPrimary({ children, className }: Props) {
  return (
    <button
      className={clsx(
        "group cursor-pointer flex h-10 items-center justify-center rounded-md border border-blue-600 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#93c5fd] hover:from-slate-600 hover:via-slate-600 hover:to-slate-600 active:[box-shadow:none] hover:border-slate-600",
        className,
      )}
    >
      <span className="block group-active:[transform:translate3d(0,1px,0)]">
        {children}
      </span>
    </button>
  );
}
