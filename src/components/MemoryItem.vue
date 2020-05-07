<template>
  <v-card width="400" class="memory" color="#1c1919">
    <v-img class="image" :src="require(`../assets/${picSrc}`)" />
    <v-card-title>
        <h2 class="title-text">{{ title }}</h2>
    </v-card-title>
    <v-card-text>
      <body class="snapshot-text">{{ snapshot }}</body>
    </v-card-text>  

    <v-card-action>
        <v-btn class="link-btn" color="#fff" small outlined light :href="link">Read More</v-btn>
    </v-card-action>

    <v-divider />
  </v-card>
  
</template>

<script>
export default {
  name: "MemoryItem",
  props: {
    title: String,
    snapshot: String,
    link: String,
    picSrc: String
  }
};
</script>

<style scoped>

.image {
    width: auto;
    max-height: 180px;
}

.title-text {
    color: #ffffff;
    width: auto;
    height: auto;
}

.snapshot-text {
    color: #ffffff;
    background-color: #1c1919;
}

.link-btn {
    margin-left: 1%;
}

</style>
