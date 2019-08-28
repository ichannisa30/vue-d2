<template>
  <div class="form-group">
      <label>{{label}}</label>
      <input :type="type" class="form-control" :value="value" @change="$emit('update')">
  </div>
</template>

<script>
export default {
    props: ['label','type','value']
}
</script>

<style>

</style>