<template>
  <section v-if="destination" class="card1 mt-5">
    <h1 class="text-center">{{destination.name}}</h1>
    <img :src="`/../src/assets/images//${destination.image}`" :alt="destination.name" />
    <h5>Oyun Özeti</h5>
    <p>{{ destination.description }}</p>
    <h5>Oyun İçi Görseller</h5>
    <div class="gallery">
      <div class="image-container">
    <img :src="`/../src/assets/images//${destination.image2}`" :alt="destination.name" />
      </div>
    <div class="image-container">
    <img :src="`/../src/assets/images//${destination.image3}`" :alt="destination.name" />
    </div>
    <div class="image-container">
    <img :src="`/../src/assets/images//${destination.image4}`" :alt="destination.name" />
    </div>
    </div>
  </section>


</template>
<script>
import sourceData from '../data/data.json'

export default {
   
    props:{
    id: {type: Number, required: true}
  },
  computed:{
    destinationId(){
      return parseInt(this.$route.params.id)
    },
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
  },
}
</script>