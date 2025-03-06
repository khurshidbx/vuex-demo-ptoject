<template>
    <section>
        <base-card>
            <h2>{{ fullName }}</h2>
            <h3>${{ rate }}/hour</h3>
        </base-card>
    </section>
    <section>
        <base-card>
            <!-- <header> -->
                <h2>
                    Interested? Reach out now!
                </h2>
                <div>
                    <base-button link :to="contactLink">Contact</base-button>
                </div>
            <!-- </header> -->
            <router-view></router-view>
        </base-card>
    </section>
    <section>
        <base-card>
            <base-badge v-for="area in areas" :key="area" :title="area" :type="area"></base-badge>
            <p>{{ description }}</p>
        </base-card>

    </section>
</template>
<script>
export default {
    props: ['coachId'],
    data() {
        return {
            selectedCoach: null
        }
    },

    computed: {
        fullName() {
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        rate() {
            return this.selectedCoach.hourlyRate
        },
        areas() {
            return this.selectedCoach.areas
        },
        description() {
            return this.selectedCoach.description
        },
        contactLink() {
            return this.$route.path + "/" + this.coachId + "/contact"
        }
    },

    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => {
            return coach.id === this.coachId


        })
        console.log(this.$store.getters['coaches/coaches'])
        console.log(this.selectedCoach);

    }
}
</script>