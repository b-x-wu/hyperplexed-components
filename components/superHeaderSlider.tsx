// https://www.youtube.com/watch?v=zGKNMm4L-r4
// Slider header whose position tracks the user's cursor

import React, { useState } from 'react'

interface SuperHeaderSliderProps {
    leftChildren?: React.ReactNode | string // the content to go on the side on top (and gets slid over)
    rightChildren?: React.ReactNode | string // the content to go on the side on bottom
    fullWidth?: string | number // the full width of the component, either as a CSS width or a number of pixels
    fullHeight?: string | number // the full height of the component, either as a CSS width or a number of pixels
    leftBackgroundColor?: string // the background color of the side on top in #RRGGBB format
    rightBackgroundColor?: string // the background color of the side on bottom in #RRGGBB format
}

interface SliderSideProps {
    fullWidth: string
    children: React.ReactNode | string
    zIndex: number
    backgroundColor: string
    width?: number
}

const SliderSide = ({ children, zIndex, backgroundColor, width, fullWidth }: SliderSideProps) => {
    return (
        <div className={`h-full w-[${width == null ? '100%' : `${width}px`}] grid place-items-center overflow-hidden absolute z-[${zIndex}] bg-[${backgroundColor}]`}>
            <div className={`w-[calc(${fullWidth}*0.8)] mx-[calc(${fullWidth}*0.1)]`}>{children}</div>
        </div>
    )
}

export const SuperHeaderSlider = ({
    leftBackgroundColor = '#264653',
    rightBackgroundColor = '#2a9d8f',
    fullWidth = '100vw',
    fullHeight = '100vh',
    leftChildren,
    rightChildren
}: SuperHeaderSliderProps) => {
    const [leftSideWidth, setLeftSideWidth] = useState<number>(0)
    const fullWidthString = typeof fullWidth === 'string' ? fullWidth : `${fullWidth}px`
    const fullHeightString = typeof fullHeight === 'string' ? fullHeight : `${fullHeight}px`

    const handleHover: React.MouseEventHandler = (event) => {
        event.preventDefault()
        setLeftSideWidth(event.nativeEvent.offsetX)
    }

    return (
        <div className={`w-[${fullWidth}] h-[${fullHeightString}] bg-blue-200 relative`} onMouseMove={handleHover}>
            <SliderSide children={leftChildren} backgroundColor={leftBackgroundColor} zIndex={2} width={leftSideWidth} fullWidth={fullWidthString} />
            <SliderSide children={rightChildren} backgroundColor={rightBackgroundColor} zIndex={0} fullWidth={fullWidthString} />
        </div>
    )
}
