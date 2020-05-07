<template>
    <div class="info">
        <br>
        <p class="text">
            {{ $t("info.name") }} <br />
            {{ $t("info.phone") }} <br />
            {{ $t("info.wechart") }} <br />
            {{ $t("info.location") }}
        </p>
        <br>
    </div>
</template>


<script>
export default {
    name: "TailInfo",
};
</script>

<style>

    .info {
        background-color: #B9B9B9;
    }

    .text {
        color: #000000;
        font-size: medium;
        font-family: "Comic sans MS";
        text-shadow: 2px 2px 5px #FFFFFF;
        text-align: center;
    }
</style>