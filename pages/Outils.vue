<template>
    <section class="overflow-x-auto w-full h-full py-20 bg-home">
        <div class="mx-auto flex flex-wrap items-center justify-around p-4">
            <article class="card relative w-96 min-h-96 bg-base-100 shadow-xl overflow-hidden my-2">
                <div class="card-body">
                    <h3 class="card-title">Map Interactive</h3>
                    <p class="h-11 overflow-x-auto">
                        Vous avez besoin de minerais ou de l'éther ?
                        Cette outil vous localisera aussi bien vos récoltes que les mobs que vous traquez !
                    </p>
                    <a target="_blank" href="https://easyaionmaps.com/" class="absolute left-1/2 bottom-1/4 translate-x-[-50%] btn btn-outline btn-secondary">
                        Visiter
                    </a>
                </div>
                <figure><img src="../assets/map_optimized.png" alt="Map Interactive" /></figure>
            </article>
            <article class="card w-96 min-h-96 bg-base-100 shadow-xl overflow-hidden my-2">
                <div class="card-body">
                    <h3 class="card-title">Aion codex</h3>
                    <p class="h-11 overflow-x-auto">
                        Pour toutes information sur le jeu (item, mobs, craft, loot ect...), rien de mieux qu'une base de donnée !
                    </p>
                    <a target="_blank" href="https://aioncodex.com/frc/?sl=1" class="absolute left-1/2 bottom-1/4 translate-x-[-50%] btn btn-outline btn-secondary">
                        Visiter
                    </a>
                </div>
                <figure><img src="../assets/aioncodex_optimized.png" alt="Database d'aion" /></figure>
            </article>
            <article class="card w-96 min-h-96 bg-base-100 shadow-xl overflow-hidden my-2">
                <div class="card-body">
                    <h3 class="card-title">Calculateur de stigma</h3>
                    <p class="h-11 overflow-x-auto">
                        Cette outil est fait pour ceux qui veulent savoir combien coûtera leurs stigmas suppérieures !
                    </p>
                    <a target="_blank" href="https://aion.aspirine.su/stigma/?lang=en" class="absolute left-1/2 bottom-1/4 translate-x-[-50%] btn btn-outline btn-secondary">
                        Visiter
                    </a>
                </div>
                <figure><img src="../assets/stigma_optimized.png" alt="Stigma Calculateur" /></figure>
            </article>
        </div>
    </section>
</template>

<script setup>
    const route = useRoute()
</script>

<style lang="css" scoped>
.bg-home {
    background-image: url(../assets/imgaccueil_optimized.jpg);
    background-position: top;
    background-attachment: fixed;
}
p::-webkit-scrollbar {
  width: 6px;
}
figure {
    width: 100%;
    height: 250px;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
a {
    background-color: hsla(360, 100%, 100%, 0.5);
    border-color: #222;
    color: #222 !important;
}
a:hover {
    color: #fff !important;
}
</style>