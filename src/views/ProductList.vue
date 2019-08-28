<template>
  <div>
      <table class="table table-bordered">
          <thead>
              <tr>
                  <td>No</td>
                  <td>Produk</td>
                  <td>Harga</td>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item,index) in products" :key=index>
                  <td>{{++index}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.price}}</td>
              </tr>
          </tbody>
          <tfoot>
              <tr>
                  <td colspan="2" align="center">Total</td>
                  <td>Rp{{total}}</td>
              </tr>
          </tfoot>
      </table>
  </div>
</template>

<script>
export default {
    data(){
        return{
            products: [
                {'id':1,'name':"Topi", 'price':25000},
                {'id':2,'name':"Kaos Kaki", 'price':10000},
                {'id':3,'name':"Celana", 'price':45000},
                {'id':4,'name':"Kemeja", 'price':42000},
                {'id':5,'name':"Ikat Pinggang", 'price':20000}
            ]
        }
    },
    computed: {
        total(){
            return this.products
            .map(item=>Number(item.price))
            .reduce((prev,current)=>prev+current,0)
        }
    }
}
</script>

<style>

</style>