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
                <div class="card card-size mx-3 my-3 bn54" v-for="(type, index) in types" :key="index">
                    <!-- Immagine -->
                    <img v-if="type.cover_image" :src="`${this.store.baseUrl}/storage/${type.cover_image}`" :alt="type.slug"
                        class="img-fluid card-img-top">
                    <img v-else src="../assets/placeholder-image.jpg" alt="logo" class="img-fluid card-img-top">

                    <!-- Testo della card -->
                    <div class="card-body text-center bn54span">
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

// ANIMATION FOR PROJECTS CARD
.bn54 {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.bn54:hover {
    animation: bn54rotate 0.7s ease-in-out both;
}

.bn54:hover .bn54span {
    animation: bn54storm 0.7s ease-in-out both;
    animation-delay: 0.06s;
}

@keyframes bn54rotate {
    0% {
        transform: rotate(0deg) translate3d(0, 0, 0);
    }

    25% {
        transform: rotate(3deg) translate3d(0, 0, 0);
    }

    50% {
        transform: rotate(-3deg) translate3d(0, 0, 0);
    }

    75% {
        transform: rotate(1deg) translate3d(0, 0, 0);
    }

    100% {
        transform: rotate(0deg) translate3d(0, 0, 0);
    }
}

@keyframes bn54storm {
    0% {
        transform: translate3d(0, 0, 0) translateZ(0);
    }

    25% {
        transform: translate3d(4px, 0, 0) translateZ(0);
    }

    50% {
        transform: translate3d(-3px, 0, 0) translateZ(0);
    }

    75% {
        transform: translate3d(2px, 0, 0) translateZ(0);
    }

    100% {
        transform: translate3d(0, 0, 0) translateZ(0);
    }
}

// END
</style>