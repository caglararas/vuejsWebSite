<template>
    <div class="home card1 mt-5 text-center">
        <h1>GameTemplate2</h1>
           
    <div class="destinations">

            <div class="card1 mt-2">
                 <h1>OYUNLAR</h1>
    <div class="gallery">
    <router-link
        v-for="destination in destinations"
        :key="destination.id"
         :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}">
      <div class="image-container">
      <img :src="`/../src/assets/images//${destination.image}`" :alt="destination.name" />
      <h3>{{ destination.name }}</h3>
      </div> 
    </router-link>
    </div>
    </div>
     
        
    </div>
    </div>
</template>
<script>
import sourceData from "../data/data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>