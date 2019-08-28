<template>
  <div>
      <table class="table table-bordered table-responsive">
          <thead>
              <tr>
                  <td>No</td>
                  <td>Tanggal</td>
                  <td>Mata Uang</td>
                  <td>Nilai Kurs</td>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item,index) in datakurs" :key="index">
                  <td>{{++index}}</td>
                  <td>{{item.THANG}}</td>
                  <td>{{item.MATA_UANG}}</td>
                  <td>{{item.KURS}}</td>
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
      "https://spanint.kemenkeu.go.id/spanint/data/DataWebService/KursUSD"
    );
    this.datakurs = response.data;
  },
  data() {
    return {
      datakurs: []
    };
  }
};
</script>

<style>
</style>