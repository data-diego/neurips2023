<template>
    <div
     class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
    >
        <div class="flex items-center justify-center w-12 bg-red-500 text-xl">
            <Icon name="material-symbols:error-rounded"/>
        </div>

        <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
            <span class="font-semibold text-red-500">{{ notification.title }}</span>
            <p class="text-sm text-gray-600">{{ notification.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['notification'])
</script>

<style lang="scss" scoped>

</style>