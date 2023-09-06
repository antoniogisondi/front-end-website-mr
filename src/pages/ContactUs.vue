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
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-12 mt-4">
                    <h1>Contattaci - Matera Riccardo Artigiano Edile</h1>
                </div>
                <div class="col-12">
                    <form @submit.prevent="sendMail()" class="row">
                        <div class="col-12 col-md-6 my-3">
                            <label class="control-label" for="name">Nome e Cognome</label>
                            <input type="text" name="name" id="name" v-model="name" placeholder="Nome e Cognome"
                                class="form-control" :class="errors.name ? 'is-invalid' : ''">
                            <p v-for="(error, index) in errors.name" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12 col-md-6 my-3">
                            <label class="control-label" for="email">Email</label>
                            <input type="text" name="email" id="email" v-model="email" placeholder="email@example.com"
                                class="form-control" :class="errors.email ? 'is-invalid' : ''">
                            <p v-for="(error, index) in errors.email" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12 col-md-6 my-3">
                            <label class="control-label" for="name">Messaggio</label>
                            <textarea name="message" id="message" v-model="message" placeholder="Messagio"
                                class="form-control" :class="errors.content ? 'is-invalid' : ''"></textarea>
                            <p v-for="(error, index) in errors.description" :key="index" class="text-danger">
                                {{ error }}
                            </p>
                        </div>
                        <div class="col-12  my-3">
                            <div v-if="loading" class="disabled">
                                <button class="btn btn-sm btn-success" type="submit">Invia</button>
                            </div>
                            <button v-else class="btn btn-sm btn-success" type="submit">Invia</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>