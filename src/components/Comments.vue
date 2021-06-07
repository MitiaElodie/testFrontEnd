<template>
    <div class="comment-container">
        <p v-if="comments.length <= 0">Pas de commentaire</p>
        <comment v-for="comment in comments" :key="comment.id" :idComment="comment.id"></comment>
    </div>
</template>

<style>
    .comment-container{
        padding: 20px;
        font-size: 0.9em;      
        background-color: #e6e6e6;
        max-height: 600px;
        overflow: auto;
        width: 400px;
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