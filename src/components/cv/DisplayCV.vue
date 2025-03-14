<template>
  <div>
    <img v-if="cvFileData.length === 0"
         src="../../assets/image/CV.png"
         class="img-thumbnail"
         alt="CV logo">
    <img v-else
         :src="cvFileData"
         class="img-thumbnail"
         alt="CV">
  </div>
</template>

<script>
export default {
  name: "DisplayCV",
  props: {
    cvFileData: {
      type: String,
      default: ''
    }
  }

}
</script>


