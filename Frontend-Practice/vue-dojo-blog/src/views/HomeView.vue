<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      Loading posts...
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts.js';

export default {
  name: "HomeView",
  components: {
    PostList
  },
  setup() {
    const { posts, error, loadPosts} = getPosts();
    loadPosts();

    return {
      posts,
      error
    }
  }
}
</script>