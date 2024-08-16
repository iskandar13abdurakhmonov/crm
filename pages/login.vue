<script setup lang="ts">

import {Input} from "~/components/ui/input";
import {useAuthStore, useIsLoadingStore} from "~/store/auth.store";
import {v4 as uuid} from 'uuid'

useSeoMeta({
  title: 'Login | CRM System'
})

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')

watch(emailRef, () => {
  console.log(emailRef.value)
})

const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()
const router = useRouter()

const login = async () => {
  isLoadingStore.set(true)
  await account.createEmailPasswordSession(emailRef.value, passwordRef.value)
  const response = await account.get()
  if (response) {
    authStore.set({
      email: response.email,
      name: response.name,
      status: response.status
    })
  }

  emailRef.value = ''
  passwordRef.value = ''
  nameRef.value = ''

  await router.push('/')
  isLoadingStore.set(false)
}

const register = async () => {
  await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value)
  await login()
}

</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="font-bold text-2xl mb-5 text-white">Login</h1>

      <form>
        <Input v-model="emailRef" placeholder="Email" type="email" class="mb-3"/>
        <Input v-model="passwordRef" placeholder="Password" type="password" class="mb-3"/>
        <Input v-model="nameRef" placeholder="First Name" type="name" class="mb-3"/>
        <div class="flex items-center justify-center gap-5">
          <UiButton @click="login" type="button">Login</UiButton>
          <UiButton @click="register" type="button">Register</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>