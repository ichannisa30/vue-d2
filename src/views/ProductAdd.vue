<template>
  <div class="card">
    <div class="card-header">
        <div class="card-body">
            <form @submit.prevent="add">
                <Inputan label="Produk" :value="name"/>
                <Inputan label="Harga" :value="price"/>
                <Tombol label="Simpan Sajaaaa" />
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import Inputan from '@/components/Inputan'
import Tombol from '@/components/Tombol'

export default {
    components:{
        Inputan,
        Tombol
    },

    data(){
        return {
            name:'',
            price:0
        }
    },

    methods: {
        add(){
            alert('Data berhasil ditambahkan')
        }
    }
}
</script>

<style>

</style>