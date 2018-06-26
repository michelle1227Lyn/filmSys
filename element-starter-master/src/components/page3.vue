<template>
    <div>
        <div style="border-radius:5px;">
            <PublishForm></PublishForm>
        </div>

        <br/>

        <div style="border:1px solid;margin-top:5px;background-color:#FFFFFF;border-radius:5px">
            <PublishTable :searchflag="search"></PublishTable>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import PublishForm from './PublishForm.vue'
    import PublishTable from './PublishTable.vue'
    export default {
        data () {
            return {

            }
        },

        components: {
            PublishForm: PublishForm,
            PublishTable: PublishTable
        },

        computed: {
            search(){
                return this.$store.state.publish.publishQueryFlag;
            }
        }
    }
</script>

<style>

</style>
