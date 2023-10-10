<script>
import axios from 'axios';
import { store } from '../data/store';
export default {
    data() {
        return {
            store,
            services: [],
            message: ''
        }
    },
    created() {
        this.getServices()
    },
    methods: {
        getServices() {
            axios.get(`${this.store.baseUrl}/api/services`).then((response) => {
                if (this.services) {
                    this.services = response.data.results
                }
                else {
                    this.message = 'Nessun servizio trovato'
                }
            })
        }
    },
}
</script>

<template>
    <div class="container container-custom-service text-center">
        <div class="row mx-0">
            <div class="col-12 my-5">
                <h1 class="title-service">I Nostri Servizi</h1>
                <p class="description-service">Scopri tutti i servizi di qualità che offriamo per realizzare i tuoi
                    progetti edili.</p>
            </div>
        </div>
        <div class="row mx-0">
            <div class="col-12" v-for="service in services" :key="service.id">
                <div class="custom-service mb-4">
                    <h2 class="title-service">{{ service.titolo }}</h2>
                    <p class="description-service">{{ service.descrizione }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>