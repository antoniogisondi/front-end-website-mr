<script>
import axios from 'axios';
export default {
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            works: [],
            message: '',
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
    <div>
        <h1>Ristrutturazioni</h1>
        <div class="custom-row">
            <div class="custom-col">
                <div class="custom-project" v-for="   work    in    works   " :key="work.id">
                    <h2 class="custom-project-title">{{ work.titolo }}</h2>
                    <p class="custom-project-description">{{ work.descrizione }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>