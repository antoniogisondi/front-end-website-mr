<script>
export default {
    data() {
        return {

        }
    },
}
</script>
<template>
    <div class="container-custom-contacts">
        <div class="custom-content">
            <div class="custom-row">
                <div class="custom-col">
                    <h1 class="custom-heading">Contattaci</h1>
                </div>
            </div>
            <div class="row d-flex flex-row justify-content-end">
                <div class="col card-size-contacts">
                    <img src="../assets/contacts.jpg" class="card-img-top">
                </div>
                <div class="col col-right">
                    <router-link class="btn btn-success" :to="{ name: 'contact_us' }">Contattaci</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>