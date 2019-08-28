<template>
  <div class="card">
    <table class="table">
      <thead>
        <tr>
          <td>
            <h3>{{posts.title}}</h3>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{posts.body}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async mounted() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/"+this.$route.params.idPost
    );
    this.posts = response.data;
  },
  data() {
    return {
      posts: []
    };
  }
};
</script>

<style>
</style>