<template>
  <header class="flex items-center p-4 h-12 shadow">
    <div class="font-bold text-lg mr-4">PKU Hole Viewer</div>
    <nav>
      <RouterLink class="mr-4" to="/">Home</RouterLink>
    </nav>
    <div class="flex-1"></div>
    <div>
      <a>GitHub</a>
    </div>
  </header>

  <main class="p-4">
    <RouterView />
  </main>
</template>
