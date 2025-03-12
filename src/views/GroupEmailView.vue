
<template>
  <h1> Õppurite emailide nimekirja lisamine </h1>
</template>

<script>
import {useRoute} from "vue-router";

export default {
  name: 'GroupEmailView',
  data() {
    return {
      groupId: useRoute().query.groupId
    }
  },
}
</script>