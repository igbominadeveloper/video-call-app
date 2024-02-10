<template>
  <layout-base>
    <div class="h-full grid grid-cols-[290px_1fr]">
      <base-sidebar class="h-full fixed" />
      <main class="ml-[290px] col-span-full">
        <div class="px-40 py-6 flex flex-col gap-4 w-full">
          <breadcrumbs />
          <slot />
        </div>
      </main>
    </div>
  </layout-base>
</template>
