export const getProjects = () =>{
    return useNuxtApp().$axiosApiClient.get('/api/posts')
}   
  
export const getProject = (id) =>{
    return useNuxtApp().$axiosApiClient.get(`/api/posts/${id}`)
}   
  
export const createProject = (project) =>{
    return useNuxtApp().$axiosApiClient.post('/api/posts', project)
}   
  
export const updateProject = (id, project) =>{
    return useNuxtApp().$axiosApiClient.put(`/api/posts/${id}`, project)
}
  
export const deleteProject = (id) =>{
    return useNuxtApp().$axiosApiClient.delete(`/api/posts/${id}`)
}