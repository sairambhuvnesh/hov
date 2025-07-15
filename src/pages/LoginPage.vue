<template>
  <q-page class="flex flex-center column" style="background-color: #f3e7f8; min-height: 100vh">
    <app-logo class="q-mb-xxl" style="margin-bottom: 25px" />

    <q-card flat class="q-pa-lg" style="background-color: #f3e7f8; width: 100%; max-width: 400px">
      <q-input v-model="email" type="email" label="Email" filled class="q-mb-md" />
      <q-input v-model="password" type="password" label="Password" filled class="q-mb-md" />

      <div class="row q-gutter-sm q-mt-md">
        <q-btn
          label="Login"
          color="primary"
          unelevated
          class="col"
          :loading="loading"
          @click="handleLogin"
        />
        <q-btn
          label="Register"
          color="primary"
          unelevated
          class="col"
          :loading="loading"
          @click="handleRegister"
        />
      </div>

      <div v-if="errorMessage" class="text-negative q-mt-md">
        {{ errorMessage }}
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from 'boot/supabase'
import { useRouter } from 'vue-router'
import AppLogo from 'components/AppLogo.vue'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const loginLoading = ref(false)
const registerLoading = ref(false)
const router = useRouter()

const handleLogin = async () => {
  errorMessage.value = ''
  loginLoading.value = true
  registerLoading.value = false

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  loginLoading.value = false

  if (error) {
    errorMessage.value = error.message
  } else {
    router.push('/')
  }
}

const handleRegister = async () => {
  errorMessage.value = ''
  registerLoading.value = true
  loginLoading.value = false

  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

  registerLoading.value = false

  if (error) {
    errorMessage.value = error.message
  } else {
    alert('Registration successful! Please check your email for confirmation.')
  }
}
</script>
