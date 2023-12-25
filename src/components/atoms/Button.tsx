import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
const button = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "transition-all",
    "leading-none",
    "duration-[500ms]",
    "w-fit",
    "gap-4",
    "place-items-center",
    "transition-all",
    "rounded-[4px]",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-secondary",
          "text-white",
          "border-transparent",
          "hover:scale-[1.02]",
          "disabled:opacity-25",
        ],
        outline: [
          "bg-transparent",
          "text-secondary",
          "border",
          "border-primary",
          "hover:bg-secondary",
          "hover:text-white",
          "hover:border-none",
          "disabled:opacity-25",
        ],
        ghost: [
          "bg-transparent",
          "text-secondary",
          "hover:bg-[rgba(0,0,0,0.8)]",
          "disabled:opacity-25",
        ],
      },
      size: {
        small: ["text-[0.875rem]", "py-1", "px-2"],
        medium: ["text-[1rem]", "py-3", "px-4", "font-[500]"],
        large: ["text-[1.125rem]", "py-3", "px-5", "font-[900]"],
      },
      btnType: {
        btn: "",
        icon: ["px-0", "py-0", "rounded-full"],
      },
    },
    compoundVariants: [
      { btnType: "icon", size: "small", class: "w-10 h-10" },
      { btnType: "icon", size: "medium", class: "w-11 h-11" },
      { btnType: "icon", size: "large", class: "w-[52px] h-[52px]" },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
      btnType: "btn",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  isLink?: boolean;
  href?: string;
  children: React.ReactNode;
}

//Why does twMerge remove the leading-none styling??
export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  btnType,
  size,
  isLink,
  href,
  children,
  ...props
}) => {
  return isLink ? (
    <Link
      href={href ? href : "/about"}
      className={twMerge(button({ intent, size, btnType, className }))}
    > {children} </Link>
  ) : (
    <button
      className={twMerge(button({ intent, size, btnType, className }))}
      {...props}
    />
  );
};
