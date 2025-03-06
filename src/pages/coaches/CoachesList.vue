<template>
    <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button v-if="!isCoach" link to="/register">Regester as Coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName"
                    :lastName="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"></coach-item>
            </ul>
            <h3 v-else>No Coaches Found</h3>
        </base-card>
    </section>
</template>
<script>
import CoachItem from "../../components/coaches/CoachItem.vue"
import CoachFilter from "../../components/coaches/CoachFilter.vue"
export default {
    components: {
        CoachItem,
        CoachFilter
    },

    data() {
        return {
            activeFilters: []
        }
    },

    computed: {
        filteredCoaches() {
            const coaches = this.$store.getters["coaches/coaches"]

            if (this.activeFilters.length === 0) {
                return coaches
            }
            return coaches.filter((coach) => {
                return coach.areas.filter((area) => this.activeFilters.includes(area)).length > 0;
            })
        },

        hasCoaches() {
            return this.$store.getters["coaches/hasCoaches"]
        },

        isCoach() {
            return this.$store.getters["coaches/isCoach"]
        }
    },

    methods: {
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters
        }
    }
}
</script>
<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>