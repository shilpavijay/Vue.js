<template>	
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="s in servers"
                    @click="select(s)">
                Server #{{ s.id }}
                Status: {{ s.status }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Unknown'}
                ]
            }
        },

        methods: {
            select(s) {
                // alert(s.id)
                eventBus.$emit('server', s);
            }
        }
    }
</script>

<style scoped>
	div {
		/*border: 1px solid;*/
	}
</style>