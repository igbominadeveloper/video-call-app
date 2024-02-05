<template>
  <div
    class="min-h-dvh bg-white flex flex-col font-body border-x border-lightgray mx-auto"
  >
    <navbar />

    <div class="h-full flex flex-1">
      <sidebar class="max-w-[290px] flex-1" />
      <main class="flex-1">
        <div class="px-40 py-6 flex flex-col gap-4">
          <breadcrumbs />
          <nuxt-page />
        </div>
      </main>
    </div>
  </div>
</template>
