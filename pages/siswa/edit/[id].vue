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
                    <label htmlFor="nama">Nama</label>
                    <input 
                        v-model="project.nama"
                        type="text"
                        class="form-control"
                        id="nama"
                        name="nama"/>
                </div>
                <div class="form-group">
                    <label htmlFor="kelas">Kelas</label>
                    <input 
                        v-model="project.kelas"
                        type="text"
                        class="form-control"
                        id="kelas"
                        name="kelas"/>
                </div>
                <div class="form-group">
                    <label htmlFor="alamat">Alamat</label>
                    <textarea 
                        v-model="project.alamat"
                        class="form-control"
                        id="alamat"
                        rows="3"
                        name="alamat"></textarea>
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
  import { getProject, updateProject } from '~/services/siswaService';
   
  export default {
   
    data() {
      return {
        project: {
          nama: '',
          kelas: '',
          alamat: '',
        },
        isSaving:false,
      };
    },
    created() {
      const id = this.$route.params.id;
      getProject(id)
      .then(response => {
          let projectInfo = response.data
          this.project.nama = projectInfo.nama
          this.project.kelas = projectInfo.kelas
          this.project.alamat = projectInfo.alamat
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
              this.project.nama = ""
              this.project.kelas = ""
              this.project.alamat = ""
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