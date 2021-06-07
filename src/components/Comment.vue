<template>
    <div class="comment-content">
        <div class="comment-information">
            <div class="comment-image">
                <img src="/images/default.png" alt="Default image" />
            </div>
            <div class="comment-detail">
                <p class="comment-name">{{ comment.author }}</p>
                <p class="comment-comment">{{ comment.content }}</p>
            </div>
        </div>
        
        <span class="comment-date">{{ date }} {{ time }}</span>
    </div>
</template>

<style>

    .comment-content{
        border: 1px solid;
        width: 350px;
        margin: 10px;
        padding: 10px;
    }

    .comment-information{
        display: flex;
    }

    .comment-image img{
        width: 60px;
    }

</style>

<script>
    export default{
        props: {
            idComment: Number,
        },
        computed: {
            comment(){
                return this.$store.getters.getComment(this.idComment);
            },

            date(){
                return this.$store.getters.getDate(this.comment.creationDate);
            },

            time(){
                return this.$store.getters.getTime(this.comment.creationDate);
            },
        }
    }
</script>