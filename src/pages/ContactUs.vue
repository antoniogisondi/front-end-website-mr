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
    <div class="container card w-25 mt-5">
        <div class="row mt-3 mb-5">
            <div class="col">
                <h1 class="text-center">Contattaci</h1>
            </div>
        </div>
        <form @submit.prevent="sendMail()" class="row d-flex justify-content-center">
            <div class="col-10 d-flex flex-column p-2">
                <label for="name" class="custom-label">Nome e Cognome *</label>
                <input type="text" name="name" id="name" v-model="name" class="custom-input" placeholder="Nome e Cognome"
                    :class="errors.name ? 'is-invalid' : ''" required>
                <div v-for="(error, index) in errors.name" :key="index" class="text-danger">
                    <p class="custom-error">
                        {{ error }}
                    </p>
                </div>
            </div>

            <div class="col-10 d-flex flex-column p-2">
                <label for="email" class="custom-label">Email *</label>
                <input type="text" name="email" id="email" v-model="email" class="custom-input"
                    placeholder="email@example.com" :class="errors.email ? 'is-invalid' : ''" required>
                <div v-for="(error, index) in errors.email" :key="index" class="text-danger">
                    <p class="custom-error">
                        {{ error }}
                    </p>
                </div>
            </div>

            <div class="col-10 d-flex flex-column p-3">
                <label for="message" class="custom-label">Messaggio *</label>
                <textarea name="message" id="message" v-model="message" class="custom-textarea" placeholder="Messaggio"
                    :class="errors.content ? 'is-invalid' : ''"></textarea>
                <div v-for="(error, index) in errors.description" :key="index" class="text-danger">
                    <p class="custom-error">
                        {{ error }}
                    </p>
                </div>
            </div>

            <div class="col-12">
                <button v-if="loading" class="bn632-hover bn22">Invio in
                    corso...</button>
                <button v-else class="bn632-hover bn22">Invio</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;

.custom-input {
    padding: 10px;
    border-radius: 10px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}

.custom-textarea {
    padding: 10px;
    border-radius: 10px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}


// CONTACT US BUTTONS EFFECTS
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

.bn632-hover.bn22 {
    background-image: linear-gradient(to right,
            #0ba360,
            #3cba92,
            #30dd8a,
            #2bb673);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
}

// END
</style>