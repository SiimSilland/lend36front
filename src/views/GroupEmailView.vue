
<template>
  <h1> Õppurite emailide nimekirja lisamine </h1>
<!-- todo: 3 -->
<!-- todo: ehita table dünaamiliselt kasutades students massiivi -->
<!-- todo: loos uus modal õpilase lisamiseks -->
<!-- todo: loo nupp modali avamiseks -->
<!-- todo: propsiga anna kaasa groupId-->

</template>

<script>
import {useRoute} from "vue-router";

export default {
  name: 'GroupEmailView',
  data() {
    return {
      groupId: useRoute().query.groupId,
      students: [
        {
          groupNumber: 0,
          firstName: "string",
          lastName: "string",
          email: "string",
          status: "s"
        }
      ]
    }
  },
  methods: {
    // todo: 1
    // todo: uus meetod (kasuta axios template) getStudents() kasutades groupId
    // todo: too ära GET /group-emails
    // todo: pane tulemus students objekti
    // todo:
    // todo:
    // todo:

  },
  beforeMount() {
    // todo: 2
    // todo: käivita lehte lkaadides getStudents()
    // todo:
    // todo:
    // todo:
    // todo:

  }
}
</script>