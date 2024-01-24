<template>
    <main class="container">
      <h1>Projects</h1>
  
      <label for="projectType">Select Project Type:</label>
      <select v-model="selectedType" @change="filterProjects">
        <option value="">All Types</option>
        <option v-for="type in projectTypes" :key="type.slug" :value="type.id">{{ type.name }}</option>
      </select>
  
      <div class="row">
        <div class="col-4" v-for="project in filteredProjects" :key="project.id">
          <ProjectCard :project="project" />
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import { store } from '../data/store.js';
  import axios from 'axios';
  import ProjectCard from './ProjectCard.vue';
  
  export default {
    name: 'AppProject',
    components: {
      ProjectCard,
    },
    data() {
      return {
        store,
        selectedType: '',
        projectTypes: [],
        projects: [],
        allProjects: [],
      };
    },
    computed: {
      filteredProjects() {
        return this.projects.filter(project => {
          return !this.selectedType || project.type_id == this.selectedType;
        });
      },
    },
    methods: {
      async fetchData() {
        try {
          const [typesResponse, projectsResponse] = await Promise.all([
            axios.get(`${this.store.apiBaseUrl}types`),
            axios.get(`${this.store.apiBaseUrl}projects`),
          ]);
  
          this.projectTypes = typesResponse.data;
          this.projects = projectsResponse.data.results;
          
          this.allProjects = projectsResponse.data.results;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
  
      filterProjects() {
        
        this.projects = this.allProjects.filter(project => {
          return !this.selectedType || project.type_id == this.selectedType;
        });
      },
    },
    created() {
      this.fetchData();
    },
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>