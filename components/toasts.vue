<template>
    <div>
        <NotificationGroup group="toasts">
            <div class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none z-50">
                <div class="w-full max-w-sm">
                    <Notification
                    v-slot="{ notifications }"
                    enter="transform ease-out duration-300 transition"
                    enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
                    enter-to="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                    move="transition duration-500"
                    move-delay="delay-300">
                        <template v-for="notification in notifications">
                            <NotiSuccess v-if="notification.type == 'success'" :notification="notification"/>
                            <NotiError v-if="notification.type == 'error'" :notification="notification"/>
                            <NotiDelete v-if="notification.type == 'delete'" :notification="notification"/>
                        </template>
                    </Notification>
                </div>
            </div>
        </NotificationGroup>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>