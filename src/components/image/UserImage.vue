

<template>
  <div>
    <img v-if="userImageData.length === 0"
         src="../../assets/image/Mugshot.png"
         class="img-thumbnail"
         alt="Õppuri pilt">
    <img v-else
         :src="userImageData"
         class="img-thumbnail"
         alt="Õppuri pilt">
  </div>
</template>

<script>
export default {
  name: "UserImage",
  props: {
    userImageData: {
      type: String,
      default:''
    }
  }
}
</script>