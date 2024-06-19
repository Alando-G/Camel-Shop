<template>
<v-app-bar :elevation="2" colour ="purple">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Camel shop</v-app-bar-title>
  <v-btn to="/Products"></v-btn> 
  <v-btn to="/About us"></v-btn> 
  <v-btn to="/Cart"></v-btn> 
  <v-btn to="/Contact us"></v-btn> 
  <v-btn to="/Homepage"></v-btn> 
  <v-btn to="/Servicesofferd"></v-btn> 
  <v-btn to="/Navbar"></v-btn> 
  
</v-app-bar>


</template>
    