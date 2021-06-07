<template>
    <div class="comment-container">
        <comment v-for="comment in comments" :key="comment.creationDate" :idComment="comment.id"></comment>
    </div>
</template>

<style>
    .comment-container{
        width: 200px;
    }
</style>

<script>
    import Comment from '../components/Comment.vue'
    export default{
        components: {
            Comment
        },
        props:{
            idEvent: Number,
        },
        computed: {
            comments() {
                return this.$store.getters.getComments(this.idEvent);
            }
        }
    }
</script>