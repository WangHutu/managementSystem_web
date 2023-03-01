<template>
    <div class="app_wrap">
        <sidebar class="sidebar_container" />
        <div class="main_container">
            <headTop class="navbar"></headTop>
            <app-main class="main_wrap"/>
        </div>
    </div>
</template>

<script setup>
import headTop from '@/components/headTop.vue'
import sidebar from './sidebar.vue'
import appMain from './appMain.vue'
</script>

<style scoped>
.app_wrap {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
}

.sidebar_container {
    width: 210px !important;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 9;
}

.main_container {
    width: calc(100vw - 210px);
    margin-left: 210px;
}

.navbar {
    background-color: var(--color-background-content);
    position: fixed;
    top: 0;
    width: 100%;
    /* padding: 0 100px; */
    height: 50px;
    line-height: 50px;
    box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
    z-index: 5;
}

.main_wrap {
    margin: 50px auto 30px;
    padding: 20px;
    width: calc(100% - 70px);
    min-width: 1024px;
}
</style>