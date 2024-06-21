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
<v-card
    class="mx-auto"
    width="1250"
  >
    
    <v-carousel>
  <v-carousel-item
    src="./../images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="./../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="./../images/customerbox-aXq1oCCjlVM-unsplash.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
    
  </v-card>
  <v-card align="center">
        <v-card-item>
          <v-card-title>1vxn Candy Shop</v-card-title>

          <v-card-subtitle>The no.1 Candy Shop</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Welcome to 1vxn Candy Shop, your ultimate destination for all things sweet and delightful! At Sweet Delights, we believe in the power of candy to brighten your day, evoke fond memories, and create moments of pure joy.

Our shop features an extensive selection of candies from around the world, carefully curated to satisfy every taste bud. From traditional favorites like gummy bears and licorice twists to artisanal chocolates and nostalgic treats, we have something for everyone. Whether you're planning a party, looking for a unique gift, or simply treating yourself, Sweet Delights is your go-to candy paradise.

We pride ourselves on offering top-quality products and exceptional customer service. Our knowledgeable staff is passionate about candy and eager to help you find the perfect sweet treat. We also prioritize freshness and variety, ensuring that our shelves are always stocked with the latest trends and timeless classics.
        </v-card-text>
      </v-card>

      <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="James dean"
      ></v-card>

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          James Chapo
        </template>

        <template v-slot:subtitle>
          Review
        </template>

        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Peter Oluuu</v-card-title>

          <v-card-subtitle>This is a card subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>

</template>