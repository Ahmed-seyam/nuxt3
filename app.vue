<template>
  <Html
    :class="{
      dark: theme === 'dark',
      right_to_left: locale === 'ar',
    }"
    :lang="locale"
    :dir="locale == 'ar' ? 'rtl' : 'ltr'"
  >
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
    >
      <div class="">{{ $t('app.name') }}: {{ ahmed }}</div>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'
AppSetup()

const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
const ahmed = useState<string>('ahmed.pref', () => 'Ahmed Seyam')

useHead({
  meta: [{ name: 'description', content: 'My amazing nuxt store.' }],
})
</script>
