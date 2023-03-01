<template>
    <div>
        <!-- <router-view v-slot="{ Component, route }">
            <transition name="fade-transform" mode="out-in">
                <component :is="Component" :key="route.path">
                    <slot></slot>
                </component>
            </transition>
        </router-view> -->
        <router-view v-slot="{ Component, route }">
            <transition name="fade-transform" mode="out-in">
                <component :is=" route.path == '/home' ? A : B" :key="route.path">
                </component>
            </transition>
        </router-view>
    </div>
</template>
  
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import A from '@/views/HomeView/HomeView.vue'
import B from '@/views/Type.vue'

</script>