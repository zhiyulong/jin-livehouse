<template> 
    <div class="homepage">

        <div class="video">
            <video id="main" controls autoplay muted loop>
                <source src="../assets/homepagevideo.mp4" type="video/mp4">
            </video>
        </div>

        <div class="video2">
            <video width="70%" height="70%" controls>
                <source src="../assets/jin-video.mp4" type="video/mp4">
            </video>
        </div>

    </div>
</template>


<script>
    export default {
        name: "HomePage",
        props: {
            msg: String
        }
    };
</script>

<style>
    .main {
        width: 100%;
        height: 100%;
    }

    .video2 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>