import { animeAPI } from "@/app/api/rti/photosAPI"
import { IPhotos } from "@/app/interfaces/IPhotos"
import { AxiosError } from "axios"
import { useQuery } from "react-query"


export const useAnime = ()=>{
    return useQuery<any, AxiosError>('anime', animeAPI.getAnime)
}

export const useAnimeOp = (idanime: number)=>{
    return useQuery<any, AxiosError>(["animeop", idanime],()=> animeAPI.getAnimeOp(idanime))
}

export const useYoutube = (query: string)=>{
    return useQuery<string, AxiosError>(["youtube", query], ()=> animeAPI.getYoutube(query))
}