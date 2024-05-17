import jsonPlaceholderAPI from "@/app/api/rti/jsonPlaceholderAPI"
import { AxiosError } from "axios"
import { useMutation, useQuery } from "react-query"

export const usePost = ()=>{
    return useQuery<IUser[], Error>('posts', jsonPlaceholderAPI.getPost)
}

export const useComentariosById = (postId: number | null)=>{
    return useQuery<IComentarios[], Error>(['comentarios', postId], ()=> jsonPlaceholderAPI.getComentariosById(postId))
}

export const usePostById = (postId: number)=>{
    return useQuery<IUser, Error>(['post', postId], ()=> jsonPlaceholderAPI.getPostById(postId))
}

export const useActualizarPostById = () => {
    return useMutation<IUser, Error, { postId: number, postData: Partial<IUser> }>((params) =>
      jsonPlaceholderAPI.actualizarPostById(params.postId, params.postData)
    );
};

export const useEliminarPostById = ()=>{
    return useMutation<IUser,Error, {postId: number}>((params)=>jsonPlaceholderAPI.eliminarPostById(params.postId))
}