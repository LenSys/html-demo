<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
        <span v-for="tag in post.tags" :key="tag">
            #{{ tag }}
        </span>
    </div>
</template>

<script>
import getPost from '../composables/getPost.js';

export default {
    props: ['id'],
    setup(props) {
        const { post, error, loadPost} = getPost(props.id);
        loadPost();

        return {
            post, 
            error
        }
    }
}
</script>

<style>
.post {
    max-width: 1200px;
    margin: 10px auto 30px;
}

.post p {
    color: #444;
    line-height: 1.4;
    margin-top: 10px;
}

.post span {
    color: hsla(160, 100%, 37%, 1);
}

.pre {
    white-space: pre-wrap;
}
</style>