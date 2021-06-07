<template>
  <div class="container">
    <div id="nav">
      <h1>Les evenements</h1>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  min-width: 300px;

  a {
    font-weight: bold;
    color: #2c3e50;
    display: block;
    padding: 20px;
    margin: 10px;
    text-decoration: None;
    border: 1px solid;


    &.router-link-exact-active {
      color: #42b983;
      transform: scale(1.1);
    }
  }
}

.list-event{
  border: 1px solid;
  padding: 25px;
  max-height: 500px;
  overflow: auto;
}


@media (max-width: 700px) {
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
