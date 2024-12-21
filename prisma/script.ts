'use server'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

type poiDataType = {
    positionX: number
    positionY: number
    imageSrc: string
    header: string
    text: string
}

export const getPois = async () => {
    return prisma.pOI.findMany()
}

export const updateSinglePoi = async (id: number, data: poiDataType | undefined) => {
    if (!data) {
        return {error: 'No data provided'}
    }

    return prisma.pOI.update({
        where: {id},
        data,
    })
}

export const getDynamicData = async () => {
    return prisma.dynamicText.findMany()
}

export const updateDynamicData = async (id: number | undefined, data: {content: string | undefined}) => {
    if(!id) {
        return {error: 'No id provided'}
    }

    if (!data.content) {
        return {error: 'No content provided'}
    }

    return prisma.dynamicText.update({
        where: {id},
        data,
    })
}