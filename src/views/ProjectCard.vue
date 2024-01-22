<template>
    <div class="card">
        <router-link :to="{name:'singleproject', params:{ slug:project.slug }}" class="btn-primary btn">{{project.name}}</router-link>
    </div>
</template>

<script>
import {store} from '../data/store.js'
    export default {
        name: 'ProjectCard',
        props:['project'],
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>