import React from 'react';

import buttonStyle from './button.module.scss'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    customClass?: string;
}

/**
 * Simple, accessible button component.
 * Props:
 *  - label: text shown inside the button (required)
 *  - onClick: click handler (optional)
 *  - customClass: additional CSS classes (optional)
 * Any other native button props (disabled, type, aria-*, etc.) are forwarded.
 */
export const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    customClass,
    className,
    type = 'button',
    ...rest
}) => {
    const combinedClass = [className, customClass].filter(Boolean).join(' ');

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${buttonStyle['nx-button']} ${combinedClass || undefined}`}
            {...rest}
        >
            {label}
        </button>
    );
};

export default Button;