<template>
    <div>
        <h1>sass</h1>
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
            getAllPost(){
                axios.get(`${this.store.apiBaseUrl}projects`).then((res)=>{
                    console.log(res.data);
                    this.store.projects = res.data
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>