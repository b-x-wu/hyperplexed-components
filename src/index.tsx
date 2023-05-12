import React from 'react'
import { createRoot } from 'react-dom/client'
import { FancyGradientHoverLinks } from '../components/fancyGradientHoverLinks'
import { ComponentDisplay } from '../components/componentDisplay'
import { MagicalText } from '../components/magicalText'
import { SuperHeaderSlider } from '../components/superHeaderSlider'

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
    const magicalTextCodeString =
`<div className='bg-[#101010] text-white h-full flex flex-col justify-center p-5 text-2xl font-medium text-center'>
  <div>
    Maybe the real React components
    were the friends
    we made <MagicalText>along the way</MagicalText>.
  </div>
</div>`
    const superHeaderSliderCodeString =
`<div className='bg-[#101010] text-white h-full flex flex-col justify-center text-4xl'>
  <SuperHeaderSlider
    leftChildren={
      <h2 className='w-full pl-2'>
        Good luck,&nbsp;
        <span className='font-mogra'>high five!</span>
        &nbsp;
        <span role='img' aria-label='high five'>✋</span>
      </h2>
    }
    rightChildren={
      <h2 className='w-full pl-2'>
        Good luck,&nbsp;
        <span className='font-mogra'>have fun!</span>
      </h2>
    }
    fullWidth='592px'
  />
</div>`

    return (
        <div className='h-max bg-slate-600 p-10'>
            <div className='flex flex-col gap-y-8 max-w-[60%] mx-auto items-center'>
                <div className='flex flex-col gap-y-5 p-5 pb-0 w-[600px]'>
                    <h1 className='w-full text-center text-4xl text-white font-bold'><span className='bg-gradient-to-t from-[#28cdbb] to-[#2576de] bg-clip-text text-transparent'>Hyperplexed</span> Components</h1>
                    <p className='text-white leading-loose'>
                        <a href="https://www.youtube.com/@Hyperplexed" target={'_blank'} className='font-bold hover:underline'>Hyperplexed</a>
                        &nbsp;makes incredible YouTube videos detailing the thought process behind replicating <span className='font-bold'>top-tier front-end visual effects</span> from around the web.
                        In order to potentially make these visual effects fit better into future projects (and as some personal practice in front-end design),
                        this project aims to convert these visual effects into <span className='font-bold'>reusable and customizable React components</span> that leverage <a href='https://www.typescriptlang.org/' target={'_blank'} className='font-bold hover:underline'>TypeScript</a>
                        &nbsp;and <a href='https://tailwindcss.com/' target={'_blank'} className='font-bold hover:underline'>Tailwind CSS</a>.
                    </p>
                </div>
                <ComponentDisplay
                    width={600}
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
                <ComponentDisplay
                    width={600}
                    height={300}
                    containerStyle={{ borderWidth: 4 }}
                    titleStyle={{fontSize: '1.5rem', lineHeight: '2rem', color: 'white', fontWeight: 'bold'}}
                    codeText={magicalTextCodeString}
                    title='Magical Text Effect'
                    titleHref='https://www.youtube.com/watch?v=yu0Cm4BqQv0'
                >
                    <div className='bg-[#101010] text-white h-full flex flex-col justify-center p-5 text-2xl font-medium text-center'>
                        <div>
                            Maybe the real React components
                            were the friends
                            we made <MagicalText>along the way</MagicalText>.
                        </div>
                    </div>
                </ComponentDisplay>
                <ComponentDisplay
                    width={600}
                    height={300}
                    containerStyle={{ borderWidth: 4 }}
                    titleStyle={{fontSize: '1.5rem', lineHeight: '2rem', color: 'white', fontWeight: 'bold'}}
                    codeText={superHeaderSliderCodeString}
                    title='Super Header Slider'
                    titleHref='https://www.youtube.com/watch?v=zGKNMm4L-r4'
                >
                    <div className='bg-[#101010] text-white h-full flex flex-col justify-center text-4xl'>
                        <SuperHeaderSlider
                            leftChildren={
                                <h2 className='w-full pl-2'>
                                    Good luck,&nbsp;
                                    <span className='font-mogra'>high five!</span>
                                    &nbsp;
                                    <span role='img' aria-label='high five'>✋</span>
                                </h2>
                            }
                            rightChildren={
                                <h2 className='w-full pl-2'>
                                    Good luck,&nbsp;
                                    <span className='font-mogra'>have fun!</span>
                                </h2>
                            }
                            fullWidth='592px'
                        />
                    </div>
                </ComponentDisplay>
            </div>
        </div>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
