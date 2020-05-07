<template>
    
    <v-card width="400" class="mx-auto" color="#ffffff">
        <v-img class="image" :src="require(`../assets/${picSrc}`)" width="500px" height="400px"/>
        <v-card-title>
            <h2 class="title-text">{{ title }}</h2>
        </v-card-title>
        
        <v-card-text >
            <a class="snapshot-text">{{ snapshot }}</a>
        </v-card-text>  
        
        <v-card-action>
            <v-btn class="link-btn" color="#000" small outlined light :href="link">Read More</v-btn>
        </v-card-action>

        <v-divider />
    </v-card>
  
</template>

<script>
export default {
  name: "OneEvent",
  props: {
    title: String,
    snapshot: String,
    link: String,
    picSrc: String
  }
};
</script>

<style>
.image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

.title-text {
    color: #000000;
}

.snapshot-text {
    color: #000000;
}

.link-btn {
    margin-left: 1%;
}
</style>
