<script>
import axios from 'axios';
export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            works: [],
            message: ''
        }
    },
    created() {
        this.getWorks()
    },
    methods: {
        getWorks() {
            axios.get(`${this.baseUrl}/api/works`).then((response) => {
                if (this.works) {
                    this.works = response.data.results
                }
                else {
                    this.message = 'Nessun lavoro trovato'
                }
            })
        }
    },
}
</script>
<template>
    <div class="container-custom-project">
        <div class="custom-content">
            <div class="custom-row">
                <div class="custom-col">
                    <h1 class="custom-heading">I Nostri Progetti</h1>
                    <p class="custom-description">Scopri alcuni dei progetti che abbiamo realizzato con passione e
                        professionalità.</p>
                </div>
            </div>
            <div class="custom-row">
                <div class="custom-col">
                    <div class="custom-project" v-for="work in works" :key="work.id">
                        <h2 class="custom-project-title">{{ work.titolo }}</h2>
                        <p class="custom-project-description">{{ work.descrizione }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>