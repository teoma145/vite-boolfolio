<template>
    <main class="container">
        <h1>Projects</h1>
        <div class="row">
           <div class="col-4" v-for="project in store.projects" :key="project.id">
               <ProjectCard :project="project"/>
           </div> 
        </div>
    </main>
    
</template>

<script>
    import {store} from '../data/store.js';
    import axios from 'axios';
    import ProjectCard from './ProjectCard.vue';

    export default {
        name:'AppProject',
        components:{
            ProjectCard
        },
        data(){
            return{
                store
            }
        },
        methods:{
            getAllProjects(){
                axios.get(`${this.store.apiBaseUrl}projects`).then((res)=>{
                    console.log(res.data);
                    this.store.projects = res.data.results;
                })
            }
        },
        created(){
            this.getAllProjects()
        }
    }
</script>

<style lang="scss" scoped>

</style>