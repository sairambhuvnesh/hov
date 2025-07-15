<template>
  <q-page class="flex flex-center column" style="background-color: #f3e7f8; min-height: 100vh">
    <div class="row items-center q-col-gutter-md">
      <!-- Left Logo -->
      <div>
        <app-logo style="height: 60px" />
      </div>

      <!-- Contact Heading -->
      <div class="text-h5 text-primary">Contact Us</div>
    </div>

    <q-card flat class="q-pa-lg" style="background-color: #f3e7f8; width: 100%; max-width: 400px">
      <q-input filled v-model="name" label="Name" class="q-mb-md" />
      <q-input filled v-model="email" label="Email" class="q-mb-md" />
      <q-input filled v-model="message" type="textarea" label="Message" autogrow class="q-mb-md" />

      <q-btn label="Send" color="primary" @click="submitForm" />
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  if (!name.value || !email.value || !message.value) {
    alert('Please fill out all fields.')
    return
  }

  alert('Message sent! Thank you 😊')
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>
