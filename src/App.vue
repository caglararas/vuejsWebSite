
<template>
  <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navpos">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <router-link class="nav-link" to="/">GameTemplate2</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Hazırlayanlar</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Oyunlar
          </a>
          <TheNavigation/>
        </li>
      </ul>
    </div>
  </div>
</nav>
   
   <div class="container">
    <router-view ></router-view>

  </div>
  </div>

</template>
<style lang="css">
  .navbar .active-link{
    background-color: #000000;
    border-radius: 15px;
  }
</style>
<script>
import TheNavigation from './components/TheNavigation.vue'
export default{
  components: {TheNavigation}
}
</script>
