<template>
    <base-card>
        <h1>Regester as a coach</h1>
        <coach-form @save-data="saveData"></coach-form>
    </base-card>
</template>
<script>
import CoachForm from "../../components/coaches/CoachForm.vue"
export default {
    components: {
        CoachForm
    },

    methods: {
        saveData(formData) {
            this.$store.dispatch('coaches/registerCoach', formData)
            this.$router.replace('/coaches')
        }
    }
}
</script>