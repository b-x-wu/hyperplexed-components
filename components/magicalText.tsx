import React, { useEffect, useRef, useState } from 'react'

const starPath = <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />

interface MagicalTextProps {
    children?: React.ReactNode // the text with the background
    gradientFrom?: string // the starting color of the linear gradient
    gradientTo?: string // the ending color of the linear gradient
    starCount?: number // the number of stars to use
    backgroundPanDuration?: number // duration of the gradient background pan in ms. for values <= 0, the gradient does not pan
    starScaleDuration?: number // duration of the star scaling in ms. for values <= 0, the star does not change size
    starRotateDuration?: number // duration the star rotation in ms. for values <= 0, the star does not rotate
    starAppearanceInterval?: number // the number of milliseconds between concurent renders of a star
    starColor?: string // the color of the star. by default the same as gradientFrom
}

interface StarPosition {
    top: number
    left: number
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
// returns random integer no less than min and strictly less than max
const getRandomArbitrary = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
}

interface StarProps {
    isAnimatedInitial: boolean
    timingOffset: number
    rotateDuration: number
    scaleDuration: number
    color: string
    appearanceInterval: number
}

const Star = (props: StarProps) => {
    const [isAnimated, setIsAnimated] = useState<boolean>(props.isAnimatedInitial)
    const [position, setPosition] = useState<StarPosition>({ top: getRandomArbitrary(-40, 80), left: getRandomArbitrary(-10, 100) })

    const animate = () => {
        const newPosition: StarPosition = { top: getRandomArbitrary(-40, 80), left: getRandomArbitrary(-10, 100) }
        setPosition(newPosition)
        setIsAnimated(false)
    }

    const isInitialRender = useRef(true)

    useEffect(() => {
        setTimeout(() => {
            animate()

            setInterval(() => {
                animate()
            }, props.appearanceInterval)
        }, props.timingOffset)
    }, [])

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false
            return
        }

        document.getElementById('root')!.offsetHeight
        setIsAnimated(true)
    }, [position])

    return (
        <span className={`block absolute top-[${position.top}%] left-[${position.left}%] h-6 w-6 fill-[${props.color}] opacity-70 ${isAnimated ? `animate-[magicalText-scale_${props.scaleDuration}ms_ease_forwards]` : 'hidden'}`}> 
            <svg viewBox="0 0 512 512" className={`animate-[magicalText-rotate_${props.rotateDuration}ms_linear_infinite]`}>
                <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
            </svg>
        </span>
    )
}

export const MagicalText = ({
    children,
    gradientFrom = '#7b1fa2',
    gradientTo = '#f48fb1',
    starCount = 3,
    backgroundPanDuration = 3000,
    starScaleDuration = 700,
    starRotateDuration = 1000,
    starAppearanceInterval = 1000,
    starColor,
}: MagicalTextProps) => {
    const gradientClassName = `from-[${gradientFrom}] via-[${gradientTo}] to-[${gradientFrom}]`

    const starSvgSpans = [...Array(starCount).keys()].map((_, idx) => {
        return (
            <Star
                key={idx}
                isAnimatedInitial={idx === 0}
                timingOffset={idx * (starAppearanceInterval / starCount)}
                rotateDuration={starRotateDuration}
                scaleDuration={starScaleDuration}
                color={starColor == null ? gradientFrom : starColor}
                appearanceInterval={starAppearanceInterval}
            />
        )
    })
    
    // add this to tailwind.config.theme.extend
    // keyframes: {
    //     'magicalText-background-pan': {
    //         '0%': { 'background-position': '0% center' },
    //         '100%': { 'background-position': '-200% center' },
    //     },
    //     'magicalText-scale': {
    //         '0%,100%': { 'transform': 'scale(0)' },
    //         '50%': { 'transform': 'scale(1)' }
    //     },
    //     'magicalText-rotate': {
    //         '0%': { 'transform': 'rotate(0deg)' },
    //         '100%': { 'transform': 'rotate(180deg)' }
    //     }
    // }

    return (
        <>
            <span className='inline-block relative'>
                {starSvgSpans}
                <span
                    className={`bg-gradient-to-r ${gradientClassName} bg-clip-text text-transparent text-inherit bg-[length:200%] animate-[magicalText-background-pan_${backgroundPanDuration}ms_linear_infinite]`}
                >
                    {children}
                </span>
            </span>
        </>
    )
}
