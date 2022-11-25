<template>
    <div class="post">
        <RouterLink :to="{ name: 'details', params: { id: post.id } }">
            <h3>{{ post.title }}</h3>
        </RouterLink>
        <p>{{ snippet }}</p>
        <span v-for="tag in post.tags" :key="tag">
            #{{ tag }}
        </span>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { RouterLink } from 'vue-router';

export default {
    props: ["post"],
    setup(props) {
        const snippet = computed(() => {
            if (props.post.body.length > 100) {
                return props.post.body.substring(0, 100) + "...";
            }
            else {
                return props.post.body;
            }
        });
        return {
            snippet
        };
    },
    components: { RouterLink }
}
</script>

<style>

</style>