import React from 'react'
import { createRoot } from 'react-dom/client'
import { FancyGradientHoverLinks } from '../components/fancyGradientHoverLinks'
import { ComponentDisplay } from '../components/componentDisplay'

const App = () => {
    const fancyGradientHoverLinksCodeString = 
`<div className='bg-[#101020] text-white font-bold text-2xl h-full flex flex-col justify-center font-brunoacesc'>
  <FancyGradientHoverLinks
    linkInfos={[
      {
        text: "Video",
        href: "https://www.youtube.com/watch?v=oJYFRZ4cj2Q"
      },
      {
        text: "Channel",
        href: "https://www.youtube.com/@Hyperplexed"
      },
      {
        text: "CodePen",
        href: "https://codepen.io/Hyperplexed/pen/wvmvqmx"
      }
    ]}
  />
</div>`

    return (
        <div className='h-max bg-slate-400'>
            <div className='flex flex-col gap-y-10 max-w-[80%] mx-auto'>
                <ComponentDisplay
                    width={500}
                    height={300}
                    codeText={fancyGradientHoverLinksCodeString}
                    containerStyle={{ borderWidth: 4 }}
                    title={'Fancy Gradient Hover Links'}
                    titleStyle={{fontSize: '1.5rem', lineHeight: '2rem', color: 'white', fontWeight: 'bold'}}
                    titleHref='https://www.youtube.com/watch?v=oJYFRZ4cj2Q'
                >
                    <div className='bg-[#101020] text-white font-bold text-2xl h-full flex flex-col justify-center font-brunoacesc'>
                        <FancyGradientHoverLinks
                            linkInfos={[
                                {
                                    text: "Video",
                                    href: "https://www.youtube.com/watch?v=oJYFRZ4cj2Q"
                                },
                                {
                                    text: "Channel",
                                    href: "https://www.youtube.com/@Hyperplexed"
                                },
                                {
                                    text: "CodePen",
                                    href: "https://codepen.io/Hyperplexed/pen/wvmvqmx"
                                }
                            ]}
                        />
                    </div>
                </ComponentDisplay>
            </div>
        </div>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
