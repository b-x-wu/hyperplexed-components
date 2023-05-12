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
        <div className='h-max bg-slate-600'>
            <div className='flex flex-col gap-y-10 max-w-[80%] mx-auto'>
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
