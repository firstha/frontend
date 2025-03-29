<template>
  <h2 class="text-center mt-5 mb-3">Show Project</h2>
  <div class="card">
      <div class="card-header">
          <router-link 
              class="btn btn-outline-info float-right"
              to="/">View All Projects
          </router-link>
      </div>
      <div class="card-body">
          <b class="text-muted">Title:</b>
          <p>{{project.title}}</p>
          <b class="text-muted">Body:</b>
          <p>{{project.body}}</p>
      </div>
  </div>
</template>
  
<script>
 
import Swal from 'sweetalert2'
import { getProject } from '~/services/projectService';
  
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
      
  },
};
</script>