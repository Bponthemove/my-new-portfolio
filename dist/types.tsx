import React from "react"

export type ProviderProps = {
    menu: boolean
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
    desktop: boolean
    bottomRef: React.RefObject<HTMLParagraphElement>
    headerRef: React.RefObject<HTMLDivElement>
    scroll: number
    setScroll: React.Dispatch<React.SetStateAction<number>>
    scrolling: number
    colorGradient: number
}

export type IStickmanContextTypes = {
    loadStickman: boolean
    setLoadStickman: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IListItemProps{
    mediaItem: string
    index: number
    spanOpen: boolean
}

export type IInterestProps = {
    gifRef: React.LegacyRef<HTMLDivElement>
    interest: {
        title: string
        gif: string
        gif_static: string
        text: string
        bg: string
        id: number
    }
}

export interface ICodeProps {
    code: 
    {
        img: string
        text: string
        link: string
        id: number
    }
    setClickedId: React.Dispatch<React.SetStateAction<number | null>>
}

export interface IPastProps {
    past: {
        img: string
        textOne: string
        textTwo: string
        id: number
    }
}

export interface ICertificate {
    certificate: {
        url: string,
        title: string,
        company: string,
        certId: string
    }
}

export interface ArrowProps {
    active: string
}
  
export interface IconProps {
className?: string;
}

export type State = {
first: string
second: string
third: string
}

export type Action = {
type: string
}