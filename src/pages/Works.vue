<script>
import axios from 'axios';
import { store } from '../data/store';
export default {
    props: ['slug'],
    data() {
        return {
            store,
            works: [],
            message: '',
        }
    },
    created() {
        this.getWorks(this.slug)
    },
    methods: {
        getWorks(slug) {
            axios.get(`${this.store.baseUrl}/api/works/${slug}`).then((response) => {
                if (response.data.success) {
                    this.works = response.data.results;
                }
                else {
                    this.$router.push({ name: 'thank-you' });
                }
            })
        },
    },
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-5" v-for="   work    in    works   " :key="work.id">
                <div class="card">
                    <h2 class="custom-project-title">{{ work.titolo }}</h2>
                    <p class="custom-project-description">{{ work.descrizione }}</p>
                    <span>€{{ work.costo }}</span>
                    <span>{{ work.data_inizio }}</span>
                    <span>{{ work.data_fine }}</span>
                    <span>{{ work.cliente }}</span>
                    <span>{{ work.indirizzo_lavoro }}</span>
                    <span>{{ work.responsabile_lavoro }}</span>
                    <span>{{ work.materiali }}</span>
                    <div v-for="item in work.images" :key="item.id">
                        <img :src="`${this.store.baseUrl}/storage/${item.image}`" alt="work-image" class="img-fluid w-25">
                        <img :src="`${this.store.baseUrl}/storage/${item.image_2}`" alt="work-image" class="img-fluid w-25">
                        <img :src="`${this.store.baseUrl}/storage/${item.image_3}`" alt="work-image" class="img-fluid w-25">
                        <img :src="`${this.store.baseUrl}/storage/${item.image_4}`" alt="work-image" class="img-fluid w-25">
                        <img :src="`${this.store.baseUrl}/storage/${item.image_5}`" alt="work-image" class="img-fluid w-25">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>