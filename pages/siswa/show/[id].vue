<template>
  <h2 class="text-center mt-5 mb-3">Show Student</h2>
  <div class="card">
      <div class="card-header">
          <router-link 
              class="btn btn-outline-info float-right"
              to="/siswa">View All Students
          </router-link>
      </div>
      <div class="card-body">
          <b class="text-muted">Nama:</b>
          <p>{{project.nama}}</p>
          <b class="text-muted">Kelas:</b>
          <p>{{project.kelas}}</p>
          <b class="text-muted">Alamat:</b>
          <p>{{project.alamat}}</p>
      </div>
  </div>
</template>
  
<script>
 
import Swal from 'sweetalert2'
import { getProject } from '~/services/siswaService';
  
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
      
  },
};
</script>