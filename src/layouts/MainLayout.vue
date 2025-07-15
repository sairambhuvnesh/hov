<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Top Header -->
    <q-header elevated>
      <q-toolbar class="bg-deep-purple-8 text-white">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <!-- Title -->
        <q-toolbar-title class="text-white q-mr-md">House of Vrindha</q-toolbar-title>

        <!-- 🏃 Scrolling Banner -->
        <div class="scrolling-banner">
          <div class="scrolling-text">Next sale starts from tomorrow! 🛍️</div>
        </div>

        <!-- Top Right Icons -->
        <q-space />
        <div class="row items-center q-gutter-x-sm">
          <q-btn flat dense round icon="home" @click="$router.push('/')">
            <q-tooltip>Home</q-tooltip>
          </q-btn>
          <q-btn flat dense round icon="email" @click="$router.push('/contact')">
            <q-tooltip>Contact</q-tooltip>
          </q-btn>
          <q-btn flat dense round icon="shopping_cart" @click="$router.push('/')">
            <q-tooltip>Shopping cart</q-tooltip>
          </q-btn>

          <q-btn v-if="!user" flat dense round icon="login" @click="$router.push('/login')">
            <q-tooltip>Login</q-tooltip>
          </q-btn>

          <q-btn v-else flat dense round icon="logout" @click="handleLogout">
            <q-tooltip>Logout</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Left Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      :show-if-above="false"
      bordered
      style="background-color: #f3e7f8; color: #4a0072"
    >
      <q-list>
        <!-- Sidebar Title -->
        <q-item-label header class="text-white text-subtitle2 q-pl-md q-mt-sm"> </q-item-label>

        <!-- Sidebar Links -->
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          style="color: #f3e7f8"
          class="text-black hover:bg-grey-3 hover:text-deep-purple-10 rounded q-mb-sm"
        />
      </q-list>
    </q-drawer>

    <!-- Page Content -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from 'boot/supabase'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Instagram',
    icon: 'mdi-instagram',
    link: 'https://www.instagram.com/house_of_vrindha?igsh=MWh0c3dqd3BsOXVxZw==',
  },
]

const leftDrawerOpen = ref(false)
const user = ref(null)

const handleLogout = async () => {
  await supabase.auth.signOut()
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

onMounted(async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession()
  user.value = session?.user ?? null

  supabase.auth.onAuthStateChange((_, session) => {
    user.value = session?.user ?? null
  })
})
</script>

<style scoped>
.scrolling-banner {
  overflow: hidden;
  white-space: nowrap;
  flex: 1; /* takes all available space between title and buttons */
  max-width: 100%;
  margin-left: 16px;
  margin-right: 16px;
}

.scrolling-text {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation:
    scroll-left 15s linear infinite,
    flash 1s infinite;
  font-weight: 500;
  position: relative;
  font-size: 20px;
  color: white;
}

@keyframes scroll-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
</style>
