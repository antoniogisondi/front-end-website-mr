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
        }
    },
}
</script>
<template>
    <div>
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