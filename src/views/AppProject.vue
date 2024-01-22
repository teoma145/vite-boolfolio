<template>
    <div>
        <li v-for="project in store.projects" :key="project.id" >{{ project.name }}</li>
    </div>
</template>

<script>
    import {store} from '../data/store.js';
    import axios from 'axios';

    export default {
        name:'AppProject',
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