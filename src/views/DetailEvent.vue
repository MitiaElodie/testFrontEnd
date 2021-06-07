<template>
  <div class="detail-event-container">
    <div class="detail-event-information">
      <information-event
        :idEvent="Number($route.params.id)"/>
    </div>
    <div class="detail-event-comment">
        <comments :idEvent="Number($route.params.id)"></comments>
    </div>
  </div>
</template>

<style>
  .detail-event-container{
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 1400px){
    .detail-event-container{
      flex-direction: column;
    }
    
  }
</style>

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
