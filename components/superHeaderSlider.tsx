import React, { useState } from 'react'

interface SuperHeaderSliderProps {
    leftChildren?: React.ReactNode | string
    rightChildren?: React.ReactNode | string
    fullWidth?: string
    fullHeight?: string
    leftBackgroundColor?: string
    rightBackgroundColor?: string
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

    const handleHover: React.MouseEventHandler = (event) => {
        event.preventDefault()
        setLeftSideWidth(event.nativeEvent.offsetX)
    }

    return (
        <div className={`w-[${fullWidth}] h-[${fullHeight}] bg-blue-200 relative`} onMouseMove={handleHover}>
            <SliderSide children={leftChildren} backgroundColor={leftBackgroundColor} zIndex={2} width={leftSideWidth} fullWidth={fullWidth} />
            <SliderSide children={rightChildren} backgroundColor={rightBackgroundColor} zIndex={0} fullWidth={fullWidth} />
        </div>
    )
}
