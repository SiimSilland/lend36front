

<template>
  <div>
    <img v-if="imageData.length === 0" src="" class="img-thumbnail" alt="Õppuri pilt">
    <img v-else :src="imageData" class="img-thumbnail" alt="Õppuri pilt">
  </div>
</template>

<script>
export default {
  name: "UserImage",
  props: {
    imageData: String
  }
}
</script>