<template>
<v-app-bar :elevation="2" colour ="Purple">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Camel shop</v-app-bar-title>
  <v-btn to="/">Home</v-btn>
  <v-btn to="/Products">Products</v-btn> 
  <v-btn to="/About us">About us</v-btn> 
  <v-btn to="/Cart">Cart</v-btn> 
  <v-btn to="/Contact us">Contact us</v-btn> 
  <v-btn to="/Servicesofferd">Services offerd</v-btn> 
  <v-btn to="/Navbar">Navbar</v-btn> 
  
</v-app-bar>


</template>
    