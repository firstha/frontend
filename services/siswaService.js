export const getProjects = () =>{
    return useNuxtApp().$axiosApiClient.get('/api/siswas')
}   
  
export const getProject = (id) =>{
    return useNuxtApp().$axiosApiClient.get(`/api/siswas/${id}`)
}   
  
export const createProject = (project) =>{
    return useNuxtApp().$axiosApiClient.post('/api/siswas', project)
}   
  
export const updateProject = (id, project) =>{
    return useNuxtApp().$axiosApiClient.put(`/api/siswas/${id}`, project)
}
  
export const deleteProject = (id) =>{
    return useNuxtApp().$axiosApiClient.delete(`/api/siswas/${id}`)
}