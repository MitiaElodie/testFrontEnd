<template>
  <div class="container">
    <div class="detail-event-information">
      <information-event></information-event>
    </div>
    <div class="detail-event-comment">
        <comments></comments>
    </div>
  </div>
</template>

<script>
import InformationEvent from '../components/InformationEvent.vue'
import Comments from '../components/Comments.vue'
export default{
  components: {
    InformationEvent,
    Comments
  }
}
</script>
