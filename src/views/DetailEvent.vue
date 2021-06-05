<template>
  <div class="container">
    <div class="detail-event-information">
      <information-event
        :idEvent="Number($route.params.id)"/>
    </div>
    <div class="detail-event-comment">
        <comments></comments>
    </div>
  </div>
</template>

<script>
  import InformationEvent from '../components/InformationEvent.vue'
  import Comments from '../components/Comments.vue'
  import { mapActions } from 'vuex'
export default{
  components: {
    InformationEvent,
    Comments
  },
  
  methods: {
      ...mapActions(['getEvent']),
  }
}
</script>
