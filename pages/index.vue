<template>
    <article class="w-full h-full bg-home">
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