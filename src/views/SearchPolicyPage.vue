<template>
  <Loading :status="isLoadingStatus" />
  <div class="container">
  <div class="search-container grid-container">
  <div class="grid-row">
    <h2>Search Policy</h2>
  </div>
  <div class="grid-row">
    <input 
      class="input-text"
      type="text"
      v-model="inputSearch"
      placeholder="Name, ID Card No. or Policy No."
    ></input>
  </div>
  <div class="grid-row justify-content-end">
    <button 
      class="btn" 
      v-on:click="searchData()"
    >Search</button>
  </div>
</div>
  </div>
  <div v-if="resultList.length > 0">
    <div v-for="item in resultList">
      <ResultDeatil :data="item" />
    </div>
  </div>
  <div v-else>
    <div class="container">
      <h2>ขออภัยค่ะไม่พบข้อมูล</h2>
    </div>
    
  </div>
</template>

<script>
import Loading from '../components/Loading.vue';
import ResultDeatil from '../components/ResultDetail.vue'

export default {
name: 'SearchPolicy',
props: {
  msg: String,
},
components: {
  Loading,
  ResultDeatil
},
data: () => ({
  inputSearch: '',
  isLoadingStatus: false,
  resultList: [{
    name: 'test'
  }]
}),
methods: {
  searchData: function() {
    this.inputSearch = 'search';
    this.isLoadingStatus = true;
  }
}
};
</script>

<style></style>
