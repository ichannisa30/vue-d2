<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Products</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
          <router-link to='/' class="nav-link">Beranda</router-link>
      </li>
      <li class="nav-item">
          <router-link to='/productadd' class="nav-link">Tambah Produk</router-link>
      </li>
      <li class="nav-item">
          <router-link to='/posts' class="nav-link">All Posts</router-link>
      </li>
      <li class="nav-item">
          <router-link to='/kurs' class="nav-link">Nilai Kurs</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>