<template>
    <div class="comment-content">
        <span class="comment-suppress" @click="removeComment"><i class="fa fa-trash"></i></span>
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
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    .comment-content{
        border: 1px solid;
        width: 300px;
        min-width: 200px;
        margin: 10px;
        padding: 10px;
        position: relative;
        background-color: white;
        box-shadow: 10px;
    }

    .comment-information{
        display: flex;
    }

    .comment-image img{
        width: 60px;
        height: 60px;
    }

    .comment-date{
        font-size: 0.8em;
        position: absolute;
        bottom: 5px;
        right: 5px;
    }

    .comment-suppress{
        position: absolute;
        top: 5px;
        right: 5px;
    }
    
    .comment-detail p{
        margin:0;
    }

    .comment-name{
        color: #737373;
        padding-bottom: 10px;
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
        },
        methods:{
            removeComment(){
                this.$store.commit('REMOVE_COMMENT', this.idComment);
            }
        }
    }
</script>