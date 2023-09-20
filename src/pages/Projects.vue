<script>
import axios from 'axios';
import { store } from '../data/store';
export default {
    data() {
        return {
            store,
            types: [],
        }
    },
    created() {
        this.getWorksByType()
    },
    methods: {
        getWorksByType() {
            axios.get(`${this.store.baseUrl}/api/types`).then((response) => {
                this.types = response.data.results;
            })
                .catch(error => {
                    console.error('Errore nella richiesta API:', error);
                });
        },
    }
}
</script>
<template>
    <div class="container container-custom-project">
        <div class="row mx-0">
            <div class="col-12">
                <h1 class="custom-heading">I Nostri Progetti</h1>
            </div>
        </div>
        <div class="row mx-0">
            <div class="col-12 d-flex flex-row justify-content-center align-items-center flex-wrap">
                <div class="card card-size mx-3 my-3" v-for="(type, index) in types" :key="index">
                    <!-- Immagine -->
                    <img v-if="type.cover_image" :src="`${this.store.baseUrl}/storage/${type.cover_image}`" :alt="type.slug"
                        class="img-fluid card-img-top">
                    <img v-else src="../assets/logo-mr.png" alt="logo" class="img-fluid card-img-top">

                    <!-- Testo della card -->
                    <div class="card-body text-center">
                        <router-link class="btn btn-sm btn-outline-info"
                            :to="{ name: 'works', params: { slug: type.slug } }">SCOPRI DI PIU'</router-link>
                    </div>

                    <!-- Testo sovrapposto -->
                    <div class="text">
                        <h3>{{ type.nome_tipologia }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.container-custom-project {
    background-color: rgba(235, 235, 235, 255);
    max-width: 100vw;

    .card-size {
        width: 20rem;
    }
}
</style>