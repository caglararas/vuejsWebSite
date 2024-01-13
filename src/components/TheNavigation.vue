<template>
 <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
            <li>
          <router-link class="dropdown-item text-white"
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
      >
      
        {{ destination.name }}
      </router-link>  </li></ul>
</template>
<script>
import sourceData from '../data/data.json'
export default {
  data(){
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>