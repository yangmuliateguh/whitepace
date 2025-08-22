import React from "react"

export default function Button({
    children,
    variant = 'secondary',
    type = 'button',
    size = 'medium',
    className = '',
    padding = '',
    fullWidth = false,
    disabled = false,
    onClick,
    rightIcon,
}) {
    const baseStyles = 'flex items-center rounded-[5px]'

    const variantStyles = {
        highlight : 'bg-highlight text-secondary',
        accent : 'bg-accent text-primary',
        primary : 'bg-primary text-black border-2 border-highlight'
    };

    const paddingStyles = {
        tight : 'py-[8px] px-[20px]',
        normal : 'py-[20px] px-[40px]'
    };

    const sizeStyles ={
        small : 'text-[14px]',
        medium : 'text-p2',
        large : 'text-[18px]'
    }

    const widthStyle = fullWidth ? 'w-full' : 'w-auto';

    return (
        <button
            type={type}
            className={`
                ${baseStyles}
                ${variantStyles[variant]}
                ${sizeStyles[size]}
                ${padding ? paddingStyles[padding] : ''}
                ${widthStyle}
                ${className}
            `}
            onClick={onClick}
            disabled={disabled}
        >
        {children}
        {rightIcon && <span className="ml-[10px]">{rightIcon}</span>}
        </button>
    );
}

// <button className="bg-highlight text-secondary py-[16px] px-[40px] rounded-[10px] text-[18px]">Login</button>
// <button className="bg-accent flex items-center py-[16px] px-[24px] rounded-[10px] text-[18px] text-primary">
//     <p className="mr-[10px]">Try Whitepace Free</p> <FaArrowRight />
// </button>
{/* <button className="bg-accent flex items-center py-[16px] px-[24px] mt-[40px] rounded-[10px] text-[18px] text-primary">
<p className="mr-[10px]">Try Whitepace Free</p> <FaArrowRight />
</button> */}