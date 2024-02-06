<template>
  <div
    class="min-h-dvh bg-white flex flex-col font-body border-x border-lightgray mx-auto"
  >
    <navbar class="sticky top-0 bg-white z-10" />

    <div class="h-full grid grid-cols-[290px_1fr]">
      <sidebar class="h-full fixed" />
      <main class="ml-[290px] col-span-full">
        <div class="px-40 py-6 flex flex-col gap-4 w-full">
          <breadcrumbs />
          <nuxt-page />
        </div>
      </main>
    </div>
  </div>
</template>
