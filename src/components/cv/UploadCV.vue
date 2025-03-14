
<template>
  <div class="mb-3">
    <input type="file" @change="handleImage" accept="image/x-png,image/pdf">
  </div>
</template>

<script>
export default {
  name: "UploadCV",
  data() {
    return {
      imageDataBase64: String
    }
  },
  methods: {
    handleImage(event) {
      const selectedImage = event.target.files[0];
      if (selectedImage.size > 5 * 1024 * 1024) { // 5MB limit
        alert('Image size exceeds 5MB limit');
        return;
      }
      this.emitBase64(selectedImage);
    },

    emitBase64(fileObject) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageDataBase64 = reader.result;
        this.$emit('event-new-image-posted', this.imageDataBase64)
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    }
  }
}
</script>
