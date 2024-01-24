<template>
    <div class="flex flex-col min-h-screen w-full bg-[#FFFBF5] font-redhat" data-theme="light">
        <CustomBar class=""/>
        <NuxtPage class="flex-1"/>
        <CustomFooter/>
        <Toasts/>
    </div>
</template>

<script setup>
</script>

<style>
:root {
    --font-family: 'Red Hat Display', sans-serif;
}
</style>