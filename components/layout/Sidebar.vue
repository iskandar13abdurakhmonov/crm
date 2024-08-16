<script setup lang="ts">

import {useAuthStore, useIsLoadingStore} from "~/store/auth.store";

const store = useAuthStore()
const router = useRouter()
const isLoadingStore = useIsLoadingStore()

// TODO: AppWrite config + Auth
const logout = async () => {
  isLoadingStore.set(true)
  await account.deleteSession('current')
  store.clear()
  await router.push('/login')
  isLoadingStore.set(false)
}

</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="" width="100px" class="mx-auto"/>
    </NuxtLink>

    <button @click="logout" class="absolute top-2 right-3 transition-colors hover:text-primary">
      <Icon class="text-white" size="22" name="line-md:logout"/>
    </button>
    <LayoutMenu/>
  </aside>
</template>

<style scoped>

</style>