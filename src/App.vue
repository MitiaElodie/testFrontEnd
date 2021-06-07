<template>
  <div class="container">
    <div id="nav">
      <h2>Les évènements</h2>
      <div class="list-event">
        <router-link v-for="event in events" :key="event.id" :to="getLink(event.id)">{{ event.title}}</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
.container{
  display: flex;
  justify-content: center;
  flex-direction: row;
}
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#nav {
  padding: 30px;
  min-width: 300px;
  max-width: 400px;

  a {
    font-weight: bold;
    color: black;
    display: block;
    padding: 20px;
    margin: 10px;
    text-decoration: None;
    border: 1px solid;
    background-color: white;


    &.router-link-exact-active {
      border-color: #42b983;
      transform: scale(1.1);
    }
  }
}

.list-event{
  background-color: #e6e6e6;
  padding: 25px;
  max-height: 500px;
  overflow: auto;
}


@media (max-width: 800px) {
  .container {
    flex-direction: column;
  }
}
</style>

<script>
import { mapState } from 'vuex'

export default{
  computed: {
    ...mapState(['events']),
    
  },
  methods: {
    getLink(id){
      console.log("/event/"+ id);
      return "/event/"+ id;
    }
  }
}

</script>
