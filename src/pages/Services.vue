<script>
import axios from 'axios';
export default {
    data() {
        return {
            services: [],
            baseUrl: 'http://127.0.0.1:8000',
            message: ''
        }
    },
    created() {
        this.getServices()
    },
    methods: {
        getServices() {
            axios.get(`${this.baseUrl}/api/services`).then((response) => {
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
            <div class="custom-row">
                <div class="custom-col">
                    <h1 class="custom-heading">I Nostri Servizi</h1>
                    <p class="custom-description">Scopri tutti i servizi di qualità che offriamo per realizzare i tuoi
                        progetti edili.</p>
                </div>
            </div>
            <div class="custom-row">
                <div class="custom-col">
                    <div class="custom-service" v-for="service in services" :key="service.id">
                        <h2 class="custom-service-title">{{ service.titolo }}</h2>
                        <p class="custom-service-description">{{ service.descrizione }}</p>
                    </div>
                    <div class="custom-service">
                        <h2 class="custom-service-title">Ristrutturazioni e Restauri</h2>
                        <p class="custom-service-description">Ristrutturiamo ed effettuiamo restauri conservativi di edifici
                            antichi, garantendo il recupero e la valorizzazione degli spazi.</p>
                    </div>
                    <div class="custom-service">
                        <h2 class="custom-service-title">Impianti Elettrici e Idraulici</h2>
                        <p class="custom-service-description">Realizziamo impianti elettrici e idraulici efficienti e
                            sicuri, conformi alle normative vigenti.</p>
                    </div>
                    <div class="custom-service">
                        <h2 class="custom-service-title">Progettazione e Consulenza</h2>
                        <p class="custom-service-description">Offriamo servizi di progettazione architettonica e consulenza
                            tecnica per assicurarti risultati di alto livello.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>