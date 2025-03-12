<template>
  <div>
    <Modal :modal-is-open="modalIsOpen" @event-close-modal="$emit('event-close-modal')">
      <template #title>
        Lisa lend
      </template>

      <template #body>
        <div class="input-group mb-3">
          <span class="input-group-text">Lennu number</span>
          <input v-model="groupNumber" type="text" class="form-control">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Periood</span>
          <input v-model="groupPeriod" type="text" class="form-control">
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Lektori nimi</span>
          <input v-model="groupLectorName" type="text" class="form-control">
        </div>

      </template>

      <template #footer>
        <button @click="addGroup" type="submit" class="btn btn-outline-success">Lisa lend</button>
      </template>
    </Modal>
  </div>
</template>


<script>
import GroupService from "@/services/GroupService";
import Modal from "@/components/modal/Modal.vue";
import NavigationService from "@/services/NavigationService";

export default {
  name: 'AddGroupModal',
  components: {Modal},
  props: {
    modalIsOpen: Boolean
  },
  data() {
    return {
      groupNumber: '',
      groupPeriod: '',
      groupLectorName: ''

    }
  },
  methods: {
    addGroup() {
      GroupService.sendPostNewGroupRequest(this.groupNumber)
          .then(() => {
            this.$emit('event-new-group-added')
            this.$emit('event-close-modal')
          })
    },
  }
}
</script>