<template>
    <h2 class="text-center mt-5 mb-3">Edit Project</h2>
    <div class="card">
        <div class="card-header">
            <router-link 
                class="btn btn-outline-info float-right"
                to="/">View All Projects
            </router-link>
        </div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        v-model="project.title"
                        type="text"
                        class="form-control"
                        id="title"
                        name="title"/>
                </div>
                <div class="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea 
                        v-model="project.body"
                        class="form-control"
                        id="body"
                        rows="3"
                        name="body"></textarea>
                </div>
                <button 
                    @click="handleSave()"
                    :disabled="isSaving"
                    type="button"
                    class="btn btn-outline-primary mt-3">
                    Save Project
                </button>
            </form>
        </div>
    </div>
  </template>
    
  <script>
   
  import Swal from 'sweetalert2'
  import { getProject, updateProject } from '~/services/projectService';
   
  export default {
   
    data() {
      return {
        project: {
          title: '',
          body: '',
        },
        isSaving:false,
      };
    },
    created() {
      const id = this.$route.params.id;
      getProject(id)
      .then(response => {
          let projectInfo = response.data
          this.project.title = projectInfo.title
          this.project.body = projectInfo.body
          return response
      })
      .catch(error => {
          Swal.fire({
              icon: 'error',
              title: 'An Error Occured!',
              showConfirmButton: false,
              timer: 1500
          })
          return error
      })
    },
    methods: {
      handleSave() {
          this.isSaving = true
          const id = this.$route.params.id;
   
          updateProject(id, this.project)
            .then(response => {
              Swal.fire({
                  icon: 'success',
                  title: 'Project updated successfully!',
                  showConfirmButton: false,
                  timer: 1500
              })
              this.isSaving = false
              this.project.title = ""
              this.project.body = ""
              return response
            })
            .catch(error => {
              this.isSaving = false
              Swal.fire({
                  icon: 'error',
                  title: 'An Error Occured!',
                  showConfirmButton: false,
                  timer: 1500
              })
              return error
            });
      },
    },
  };
  </script>