<template>
    <article class="w-full h-full bg-home">
        <!-- <div class="bgOverlay bg-opacity-60"></div> -->
        <div class="hero-content max-w-full h-full text-center text-neutral-content">
            <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
    </article>
</template>

<script setup>

</script>

<style lang="css" scoped>
h1, p {
    color: #222;
}
.hero {
    min-height: 100%;
}
.bg-home {
    background-image: url(../assets/imgaccueil_optimized.jpg);
    background-position: top;
    background-attachment: fixed;
}
.bgOverlay {
    grid-column-start: 1;
    grid-row-start: 1;
    width: 100%;
    height: 100%;
    background-color: hsl(0 0% 2.51% / var(--tw-bg-opacity));
    --tw-bg-opacity: 0.5;
}
</style>