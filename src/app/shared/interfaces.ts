import { TimeLineType } from "./enums"

export interface Badge {
    text: string
    colorClass: string
}

export interface TimeLineEvent {
    organization: string
    title: string
    location: string
    time: string
    type: TimeLineType
    badges?: Badge[]
    isCurrent?: boolean
}

export interface Project {
    name: string
    description: string
    tags: Badge[]
    thumbnail?: string
    imgPath: string
    buttons: Button[]
}

export interface Button {
    text: string,
    class: string,
    icon?: string,
    url?: string
}

export interface Hobby {
    name: string
    icon: string
}