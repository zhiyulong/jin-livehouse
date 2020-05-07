<template> 
    <div id="app">
        <div id="logo">
            <img src="./assets/logo.png" alt="logo" width="180" height="149" />
        </div>

        <fixed-header>
            <div id="nav" class="navbar">
                <router-link to="/">{{ $t("menu.home") }}</router-link> |
                <router-link to="/event">{{ $t("menu.event") }}</router-link> |
                <router-link to="/memory">{{ $t("menu.memory") }}</router-link> 

                <!--router-link to="/musician&label">{{ $t("menu.musicianlabel") }}</router-link--> 

                <!--router-link to="/about">{{ $t("menu.about") }}</router-link-->

                <div id="lang">
                    <el-button @click="setEn()">English</el-button> &nbsp;
                    <el-button @click="setZh()">中文</el-button>
                </div>
            </div>
        </fixed-header>

        <router-view />
    </div>
    
</template>

<script>
import FixedHeader from 'vue-fixed-header'
import Cookies from 'js-cookie'
export default {
    methods: {
        setEn: function () {
            this.$i18n.locale = 'en';
            Cookies.set('language', 'en', { expires: 30 });
        },
        setZh: function () {
            this.$i18n.locale = 'zh';
            Cookies.set('language', 'zh', { expires: 30 });
        }
    },
    components: {
        FixedHeader
    }
};
</script>

<style>
    body {
        background-color: black;
    }
    #lang {
        font-family: Arial, Helvetica, sans-serif;
        padding-top: 10px;
        font-size: medium;
    }
    #logo {
        padding-top: 0px;
        text-align: center;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ffffff;
    }
    #nav {
        font-size: x-large;
        padding-top: 10px;
        text-align: center;
    }
    #nav a {
        font-weight: bold;
        color: #ffffff;
    }
    #nav a.router-link-exact-active {
        color: #F5F823;
    }

    .navbar.vue-fixed-header--isFixed {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
    }
</style>