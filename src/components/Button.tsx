import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  href?: string;
  small?: boolean;
  large?: boolean;
  scroll?: boolean;
  outline?: boolean;
  replace?: boolean;
}

const Button: React.FC<Props> = ({
  href,
  small,
  large,
  className,
  scroll = true,
  replace,
  outline,
  ...props
}) => {
  return href ? (
    <Link
      scroll={scroll}
      replace
      className={twMerge(
        `${
          outline
            ? "bg-[transparent] text-secondary border border-primary"
            : "bg-secondary text-[#fff]"
        } rounded-[8px] transition-all duration-500 w-fit flex items-center place-items-center gap-4 py-3 px-5 ${
          large ? "md:text-xl" : small ? "" : "text-lg"
        } font-body font-[900] cursor-pointer`,
        !props.disabled && "hover:scale-[1.02] active:scale-[0.95]",
        className
      )}
      href={href}
    >
      {props.children}
    </Link>
  ) : (
    <button
      {...props}
      className={twMerge(
        `${
          outline
            ? "bg-[transparent] text-secondary border border-primary"
            : "bg-secondary text-[#fff]"
        } rounded-[8px] transition-all leading-none duration-500  w-fit
      flex items-center place-items-center gap-4 py-3 px-5 ${
        large ? "md:text-xl" : small ? "text-sm py-1 px-2" : "text-lg"
      } font-body font-[900] cursor-pointer`,
        !props.disabled && "hover:scale-[1.02] active:scale-[0.95]",
        className
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
