import React from 'react'
import { createRoot } from 'react-dom/client'
import { MagicalText } from '../components/magicalText'

const App = () => {
    return (
        <>
            This is just text
            <MagicalText>
                (This is the magical text!)
            </MagicalText>
            going around the magical text!
        </>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
