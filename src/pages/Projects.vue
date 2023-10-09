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
    <div class="container container-custom-project text-center">
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
                    <img v-else src="../assets/placeholder-image.jpg" alt="logo" class="img-fluid card-img-top">

                    <!-- Testo della card -->
                    <div class="card-body text-center">
                        <h3>{{ type.nome_tipologia }}</h3>
                    </div>

                    <!-- Testo sovrapposto -->
                    <div class="text">
                        <router-link :to="{ name: 'works', params: { slug: type.slug } }">
                            <button class="bn632-hover bn26">SCOPRI DI PIU'</button>
                        </router-link>
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

// BUTTON EFFECTS
.bn632-hover {
    width: 160px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.bn632-hover:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.bn632-hover:focus {
    outline: none;
}

.bn632-hover.bn26 {
    background-image: linear-gradient(to right,
            #25aae1,
            #4481eb,
            #04befe,
            #3f86ed);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
}
</style>