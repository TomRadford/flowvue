<template>
  <div
    class="flex flex-col items-center gap-6 justify-center pt-36 max-w-3xl mx-auto px-4"
  >
    <h1 class="text-3xl font-bold">How to Install</h1>

    <div class="w-full space-y-6">
      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-aqua">
          Step 1: Add Script to Head
        </h2>
        <p class="text-white">
          In an HTML file, add the following to your
          <code class="bg-[var(--color-gray)] px-2 py-1 rounded"
            >&lt;head&gt;</code
          >:
        </p>

        <div class="bg-gray rounded-md p-4 overflow-x-auto">
          <pre
            class="text-white text-sm"
          ><code>&lt;script type="module" src="https://flowvue.rad.gdn/dist/flow-vue.js"&gt;&lt;/script&gt;</code></pre>
        </div>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-aqua">
          Step 2: Add Container Element
        </h2>
        <p class="text-white">
          Then somewhere in your
          <code class="bg-gray px-2 py-1 rounded">&lt;body&gt;</code>, add the
          following:
        </p>

        <div class="bg-gray rounded-md p-4 overflow-x-auto">
          <pre
            class="text-white text-sm"
          ><code>&lt;div id="my-flow-vue"&gt;&lt;/div&gt;</code></pre>
        </div>
      </section>

      <div
        class="flex items-center gap-2 bg-aqua/10 border border-aqua rounded-md p-4"
      >
        <div class="text-[var(--color-aqua)]">🔥</div>
        <p class="text-white">
          This will append the
          <code class="bg-gray px-2 py-1 rounded">flow-vue</code>
          web component to this div as soon as the page loads.
        </p>
      </div>

      <p class="text-white">
        See an example
        <a href="/demo/example.html" class="font-semibold hover:underline"
          >here</a
        >
      </p>
    </div>

    <NuxtLink class="font-semibold hover:underline" to="/"
      >Back to Home</NuxtLink
    >
  </div>
</template>
