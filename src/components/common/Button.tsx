import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export const Button = ({ label, ...props }: ButtonProps) => {
    return (
        <button {...props} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            {label}
        </button>
    );
};