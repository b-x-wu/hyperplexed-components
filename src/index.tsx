import React from 'react'
import { createRoot } from 'react-dom/client'
import { FancyGradientHoverLinks } from '../components/fancyGradientHoverLinks'
import { ComponentDisplay } from '../components/componentDisplay'

const App = () => {
    const codeString = `import React from 'react'\nconst componentDisplay = () => {\n\treturn <></>\n}`
    
    return (
        <ComponentDisplay width={500} height={300} codeText={codeString} customStyle={{ borderWidth: 4 }}>
            <div className='bg-[#101020] text-white font-bold text-3xl h-full flex flex-col justify-center'>
                <FancyGradientHoverLinks
                    linkInfos={[
                        {
                            text: "link one",
                            href: "/"
                        },
                        {
                            text: "link too",
                            href: "/"
                        },
                        {
                            text: "link tree",
                            href: "/"
                        }
                    ]}
                    borderColor='#ff0000'
                />
            </div>
        </ComponentDisplay>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
