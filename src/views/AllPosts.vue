<template>
  <div class="card">
    <table class="table" v-for="item in posts">
      <thead>
        <tr>
          <td>
            <h3>
              <router-link :to="'/detailpost/'+item.id">{{item.title}}</router-link>
            </h3>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{item.body}}</td>
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
      "https://jsonplaceholder.typicode.com/posts"
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