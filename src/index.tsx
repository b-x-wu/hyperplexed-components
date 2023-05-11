import React from 'react'
import { createRoot } from 'react-dom/client'
import { SuperHeaderSlider } from '../components/superHeaderSlider'

const App = () => {
    const leftChildren = (
        <div className='ml-96 text-4xl'>
            This is the <span className='font-bold italic'>left</span> side.
        </div>
    )

    const rightChildren = (
        <div className='ml-96 text-4xl'>
            This is the <span className='font-bold italic'>right</span> side.
        </div>
    )

    return (
        <>
            <SuperHeaderSlider
                leftChildren={leftChildren}
                rightChildren={rightChildren}
                fullHeight='300px'
            />
        </>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
