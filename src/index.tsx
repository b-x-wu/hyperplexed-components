import React from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
    return (
        <div className='text-4xl text-blue-900'>
            This is a React App! Modify src/index.tsx to get started.
        </div>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
