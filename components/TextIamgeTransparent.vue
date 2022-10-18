<template>
    <div class="textimagetransparent">
        <img class="image" :src="image"/>
        <div class="content">
            <h1>Login</h1>
            <input 
                type="text"
                placeholder="Username"
            >
            <input 
                type="password"
                placeholder="Password"
            >
        </div>
    </div>
</template>
    
<style lang="scss" scoped>
    .image {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
    
    .content {
        position: absolute;
        right: 0;
        top: 0;
        width: 40vw;
        height: 100vh;
        background-color: rgba($color: #ffff, $alpha: .5);
        padding-left: 5%;
        padding-top: 10%;
    }
    
    .content h1{
        font-size: var(--font-size-xl);
    }
    
    .content input{
        width: 50%;
        margin: .5rem 0rem;
    }
    
    .textimagetransparent {
        position: relative;
        text-align: left;
        color: white;
    }
    
</style>
<script>
    export default {
      props: {
        image: String
      }
    }
</script>