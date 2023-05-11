import React, { useState } from "react";

interface LinkInfo {
    text: string
    href: string
}

interface FancyGradientHoverLinksProps {
    linkInfos: LinkInfo[] // the text and hrefs for the links
    gradientFrom?: string // the starting color of the gradient
    gradientTo?: string // the ending color of the gradient
    borderColor?: string // the color of the border
    gradientPanDuration?: number // the duration of the hover gradient pan, in ms
    minViaDistance?: string // distance from the left side of the link which the gradient no longer changes stop distance
}

interface FancyGradientHoverLinkProps {
    linkInfo: LinkInfo
    gradientFrom: string
    gradientTo: string
    isBottomLink: boolean
    minViaDistance: string
    gradientPanDuration: number
    borderColor: string
}

const FancyGradientHoverLink = ({ linkInfo, gradientFrom, gradientTo, isBottomLink, minViaDistance, gradientPanDuration, borderColor }: FancyGradientHoverLinkProps) => {
    const [mouseXPosition, setMouseXPosition] = useState<number>(0)

    const handleMouseMove: React.MouseEventHandler = (event) => {
        event.preventDefault()
        setMouseXPosition(event.nativeEvent.offsetX)
    }
    
    return (
        <a onMouseMove={handleMouseMove} className={`block border-t-[1px] border-[${borderColor}] ${isBottomLink ? 'border-b-[1px]' : ''} relative p-5 before:absolute before:left-0 before:top-0 before:w-0 before:hover:w-full before:transition-all before:duration-[${gradientPanDuration}ms] before:h-full before:bg-gradient-to-r before:from-transparent before:via-[${gradientFrom}_max(${minViaDistance},${mouseXPosition}px)] before:to-[${gradientTo}]`} href={linkInfo.href} target={"_blank"}>{linkInfo.text}</a>
    )
}

export const FancyGradientHoverLinks = ({
    linkInfos,
    gradientFrom = '#3d5afe',
    gradientTo = '#2196f3',
    gradientPanDuration = 600,
    minViaDistance = '80%',
    borderColor = "#ffffff"
}: FancyGradientHoverLinksProps) => {
    const links = linkInfos.map((linkInfo, idx) => <FancyGradientHoverLink 
        key={idx}
        linkInfo={linkInfo}
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
        isBottomLink={idx === linkInfos.length - 1}
        minViaDistance={minViaDistance}
        gradientPanDuration={gradientPanDuration}
        borderColor={borderColor}
    />)

    return (
        <div className="flex flex-col justify-content-center">
            {links}
        </div>
    )

}


