<template>
    <base-card>
        <h2>
            Find your coach
        </h2>
        <span class="filter-option">
            <input id="frontend" type="checkbox" value="frontend" checked v-model="filters">
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-option">
            <input id="backend" type="checkbox" value="backend" checked v-model="filters">
            <label for="backend">Backend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="career" value="career" checked v-model="filters">
            <label for="career">Career</label>
        </span>
    </base-card>
</template>


<script>
export default {
    data() {
        return {
            filters: []
        }
    },
    watch: {
        filters() {
            this.setFilters()
        }
    },
    methods: {
        setFilters() {
            this.$emit('change-filter', this.filters)
        }
    }
}
</script>