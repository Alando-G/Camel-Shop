<script>

export default {
  data () {
    return {
      image: '../images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg',
      url : 'https://www.vuejs.org',
      stockDetails : [
        {
          itemNumber: 1,
          itemName : "sweets",
          itemPrice : 5,
          itemQuantity : 30,
          itemImage :'../images/customerbox-aXq1oCCjlVM-unsplash.jpg'

        },

        {
          itemNumber: 2,
          itemName : "Lollipop",
          itemPrice : 10,
          itemQuantity : 4,
          itemImage :'../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg'    

        }
      ],

    }
  },

  methods() {
    //functions
  },

  computed(){
    //forms
  },
}
</script>

<template>
<h1>1vxn Candy Shop</h1>
<div class ="Centre">
  <img v-bind:src="image" width="500" height="300">
</div>
<div class="centre">
  <a :href="url">Vue JS Practice</a>
  <h3>Milk, White, dark</h3>
  <h5>A wide variety of fine snacks, sweets and chocolate perfect for all ocassions</h5>
</div>
<div class="centre">
  <u1>
    <li :key="item" v-for="item in stockDetails">
      <div>
        <img v-bind:src="item.itemImage" width="200" height="150">
      </div>
      <div>
      <span>{{ item.itemName }}</span> &nbsp; &nbsp;
      <span><button style="background-color:blueviolet; color:white; border: blueviolet;">+</button></span>
    </div>
    <br/>
    </li>
  </u1>
</div>

</template>