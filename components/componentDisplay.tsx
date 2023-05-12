import React from "react";
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'

SyntaxHighlighter.registerLanguage('tsx', tsx)

interface ComponentDisplayProps {
    width: string | number
    height: string | number
    children: React.ReactNode
    codeText?: string
    customStyle?: React.CSSProperties
}

export const ComponentDisplay = ({
    width,
    height,
    children,
    customStyle,
    codeText,
}: ComponentDisplayProps) => {
    const widthString = typeof width === 'string' ? width : `${width}px`
    const heightString = typeof height === 'string' ? height : `${height}px`
    
    return (
        <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-5">
            <div style={{ width: widthString, height: heightString, margin: 0, ...customStyle }}>
                {children}
            </div>
            {
                codeText == null ? <></> :
                <SyntaxHighlighter language="tsx" style={materialDark} customStyle={{ width: widthString, height: heightString, margin: 0, ...customStyle }}>
                    {codeText}
                </SyntaxHighlighter>
            }
        </div>
    )
}
