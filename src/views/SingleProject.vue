<template>
    <div>
        <h1 v-if="project">{{ project.name }}</h1>
        <div v-else>
            Loading project data...
        </div>
        <h2 v-if="project">{{ project.description }}</h2>
        <div v-if="project && project.technologies">
            <h2>Technologies:</h2>
           
            <ul>
                <li v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {store} from '../data/store.js';
    export default {
        name:'SingleProject',
        data(){
            return{
                project: null,
                store
            }
        },
        methods:{
            GetProjectData(){
                axios.get(`${this.store.apiBaseUrl}projects/${this.$route.params.slug}`).then((res)=>{
                    console.log(res.data);
                    this.project = res.data.results;
                })
            }
        },
        mounted(){
            this.GetProjectData();
        }
    }
    
</script>

<style lang="scss" scoped>

</style>