import { covid19API } from "@/app/api/covid19/covid19API"
import { ICovid } from "@/app/interfaces/ICovid"
import { AxiosError } from "axios"
import { useQuery } from "react-query"


export const useCovid19 =()=>{
    return useQuery<ICovid[], AxiosError>('covid19', covid19API.getCovid19)
}