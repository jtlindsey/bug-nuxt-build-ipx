<template>
    <div>
        <h1>Good</h1>
        <NuxtImg
            :src="fLocation1"
            sizes="400px"
        />

        <h1>Has build issue with ipx</h1>
        <NuxtImg
            :src="fLocation2"
            sizes="400px"
        />
    </div>
</template>
<script setup lang="ts">
const fLocation1 = '/example/f1-raoul-droog-yMSecCHsIBc-unsplash.jpg'
const fLocation2 = '/example/f2-a+mber-kipp-75715CVEJhI-unsplash.jpg'
</script>