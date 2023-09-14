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
        }
    },
}
</script>
<template>
    <div class="container-custom-project">
        <div class="custom-content-card">
            <div class="custom-row-card">
                <div class="col-12">
                    <h1 class="custom-heading">I Nostri Progetti</h1>
                </div>
                <div class="custom-col-card d-flex flex-row justify-content-center">
                    <div class="card card-size mx-4" v-for="(type, index) in types" :key="index">
                        <img src="../assets/logo-costruzioni.jpg" alt="logo">
                        <div class="card-body d-flex justify-content-center">
                            <router-link class="btn btn-sm btn-outline-info"
                                :to="{ name: 'works', params: { slug: type.slug } }">
                                SCOPRI DI PIU'
                            </router-link>
                        </div>
                        <div class="text">
                            <h3>{{ type.nome_tipologia }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>