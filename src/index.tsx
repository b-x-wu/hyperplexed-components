import React from 'react'
import { createRoot } from 'react-dom/client'
import { FancyGradientHoverLinks } from '../components/fancyGradientHoverLinks'

const App = () => {
    return (
        <div className='bg-slate-800 h-screen w-screen text-4xl text-white'>
            <FancyGradientHoverLinks
                linkInfos={[
                    {
                        text: "link one",
                        href: "/"
                    },
                    {
                        text: "link two",
                        href: "/"
                    },
                    {
                        text: "link three",
                        href: "/"
                    }
                ]}
            />
        </div>
    )    
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
