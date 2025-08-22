import { FaRegCircleCheck } from "react-icons/fa6"
import React from "react"
import Button from "./button"

export default function card({
    title,
    price,
    priceColor,
    description,
    features=[],
    buttonText="Get Started",
    buttonVariant,
    textSize,
    variant,
    padding,
    className="",
}){
    const baseStyle = "w-[472px] space-y-[15px] rounded-[10px] border-2"

    const paddingStyles = {
        short : "px-[22px] py-[20px]",
        tall : "px-[22px] py-[40px]"
    }

    const variantStyles = {
        primary : "bg-primary text-black border-highlight",
        secondary : "bg-secondary text-primary"
    }

    const textSizeStyles = {
        sm : 'text-p3',
        md : 'text=p2'
    }

    const priceColorStyles = {
        highlight : "text-headerh4 font-bold text-highlight",
        black : "text-headerh4 font-bold text-black"
    }

    return(
        <div className={`
            ${baseStyle}
            ${variantStyles[variant]}
            ${padding ? paddingStyles[padding] : ''}
            ${className}
        `}>
            {/* header */}
            <div className="space-y-[15px] ">
                <h5 className="text-p1 font-semibold ">{title}</h5>
                <h1 className={priceColorStyles[priceColor]}>${price}</h1>
                <p className="text-p2 ">{description}</p>
            </div>

            {/* features */}
            <ul className="space-y-[18px]">
            {features.map((feature, index) =>(
                <li key={index} className="flex items-center space-x-[10px]">
                    <FaRegCircleCheck className="w-[18px] " />
                    <p className={textSizeStyles[textSize]}>{feature}</p>
                </li>
            ))}
            </ul>
            {/* button */}
            <Button padding="tight" variant={buttonVariant} >{buttonText}</Button>
        </div>
    )
}