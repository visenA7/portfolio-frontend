import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children?: ReactNode;
    label?: string;
    icon?: ReactNode;
}

export const Button = ({
    variant = "primary",
    size = "md",
    children,
    label,
    icon,
    className = "",
    ...props
}: ButtonProps) => {
    const base = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-98 disabled:opacity-50 disabled:pointer-events-none";

    const sizes = {
        sm: "text-xs px-3.5 py-2 gap-1.5",
        md: "text-sm px-5 py-2.5 gap-2",
        lg: "text-base px-6 py-3 gap-2.5",
    };

    const variants = {
        primary: "bg-sky-600 hover:bg-sky-500 text-white shadow-md shadow-sky-600/20 hover:shadow-sky-500/30",
        secondary: "bg-card border border-border-custom text-text-heading hover:bg-card-hover hover:border-sky-500/40 shadow-xs",
        outline: "border border-border-custom text-text-heading hover:border-sky-500 hover:text-sky-500 bg-transparent",
        ghost: "text-text-muted hover:text-text-heading hover:bg-card-hover",
    };

    return (
        <button
            {...props}
            className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {children || label}
        </button>
    );
};
