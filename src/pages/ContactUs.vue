<script>
import axios from 'axios';
import { store } from '../data/store';
export default {
    data() {
        return {
            name: "ContactUs",
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {},
            loading: false,

        }
    },
    methods: {
        sendMail() {
            this.loading = true

            const data = {
                name: this.name,
                email: this.email,
                description: this.message
            }

            //PULISCO L'ARRAY DEGLI ERRORI
            this.errors = {};

            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                this.success = response.data.success;
                if (!this.success) {
                    this.errors = response.data.errors;
                }
                else {
                    //PULISCO I DATI IN INPUT
                    this.name = '';
                    this.email = '';
                    this.message = '';

                    this.$router.push({ name: 'thank_you' })
                }
                this.loading = false
            });
        },
    },
}
</script>
<template>
    <div class="container container-custom-contact-us">
        <div class="row">
            <div class="col">
                <h1 class="heading">Contattaci</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form @submit.prevent="sendMail()" class="row">
                    <div class="col-12">
                        <label for="name" class="custom-label">Nome e Cognome</label>
                        <input type="text" name="name" id="name" v-model="name" class="custom-input"
                            placeholder="Nome e Cognome" :class="errors.name ? 'is-invalid' : ''">
                        <div v-for="(error, index) in errors.name" :key="index" class="text-danger">
                            <p class="custom-error">
                                {{ error }}
                            </p>
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="email" class="custom-label">Email</label>
                        <input type="text" name="email" id="email" v-model="email" class="custom-input"
                            placeholder="email@example.com" :class="errors.email ? 'is-invalid' : ''">
                        <div v-for="(error, index) in errors.email" :key="index" class="text-danger">
                            <p class="custom-error">
                                {{ error }}
                            </p>
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="message" class="custom-label">Messaggio</label>
                        <textarea name="message" id="message" v-model="message" class="custom-textarea"
                            placeholder="Messaggio" :class="errors.content ? 'is-invalid' : ''"></textarea>
                        <div v-for="(error, index) in errors.description" :key="index" class="text-danger">
                            <p class="custom-error">
                                {{ error }}
                            </p>
                        </div>
                    </div>

                    <div class="col-12">
                        <button v-if="loading" type="submit" class="custom-button" :disabled="loading">Invio in
                            corso...</button>
                        <button v-else class="custom-button">Invio</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.container-custom-contact-us {
    background-color: rgba(20, 20, 18, 255);
}
</style>