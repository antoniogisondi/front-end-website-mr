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
    <div class="container-custom-service">
        <div class="custom-content">
            <div class="row">
                <div class="col-12">
                    <h1 class="custom-heading">I Nostri Servizi</h1>
                    <p class="custom-description">Scopri tutti i servizi di qualità che offriamo per realizzare i tuoi
                        progetti edili.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12" v-for="service in services" :key="service.id">
                    <div class="custom-service mb-4">
                        <h2 class="custom-service-title">{{ service.titolo }}</h2>
                        <p class="custom-service-description">{{ service.descrizione }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>