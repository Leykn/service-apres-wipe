<template>
    <div class="bg-base-100 w-full h-full border-b-2 border-solid border-red-900">
        <div class="navbar mediaBasic">
            <h1 class="flex-1">
                <span class="normal-case text-4xl">Service Après <span class="wipe">Wipe</span></span>
            </h1>
            <nav class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li><NuxtLink to="/">Accueil</NuxtLink></li>
                    <li><NuxtLink to="DarkPoeta">Dark Poéta</NuxtLink></li>
                    <li tabindex="0">
                        <span>
                            Classes
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </span>
                        <ul class="p-2 bg-base-100">
                            <li><NuxtLink to="Templier">Templier</NuxtLink></li>
                            <li><NuxtLink to="Gladiateur">Gladiateur</NuxtLink></li>
                            <li><NuxtLink to="Clerc">Clerc</NuxtLink></li>
                            <li><NuxtLink to="Aede">Aède</NuxtLink></li>
                            <li><NuxtLink to="Assassin">Assassin</NuxtLink></li>
                            <li><NuxtLink to="Rodeur">Rôdeur</NuxtLink></li>
                            <li><NuxtLink to="Sorcier">Sorcier</NuxtLink></li>
                            <li><NuxtLink to="Spiritualiste">Spiritualiste</NuxtLink></li>
                        </ul>
                    </li>
                    <li><NuxtLink to="Membres">Membres</NuxtLink></li>
                    <li><NuxtLink to="Outils">Outils</NuxtLink></li>
                </ul>
            </nav>
        </div>
        <div class="navbar mediaSmall">
            <nav>
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box"> 
                        <li><NuxtLink to="/">Accueil</NuxtLink></li>
                        <li tabindex="0">
                            <span>
                                Classes
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </span>
                            <ul class="p-2 bg-base-100">
                                <li><NuxtLink to="Templier">Templier</NuxtLink></li>
                                <li><NuxtLink to="Gladiateur">Gladiateur</NuxtLink></li>
                                <li><NuxtLink to="Clerc">Clerc</NuxtLink></li>
                                <li><NuxtLink to="Aede">Aède</NuxtLink></li>
                                <li><NuxtLink to="Assassin">Assassin</NuxtLink></li>
                                <li><NuxtLink to="Rodeur">Rôdeur</NuxtLink></li>
                                <li><NuxtLink to="Sorcier">Sorcier</NuxtLink></li>
                                <li><NuxtLink to="Spiritualiste">Spiritualiste</NuxtLink></li>
                            </ul>
                        </li>
                        <li><NuxtLink to="Membres">Membres</NuxtLink></li>
                        <li><NuxtLink to="Outils">Outils</NuxtLink></li>
                    </ul>
                </div>
            </nav>
            <h1 class="w-full">
                <span class="w-full normal-case text-3xl text-right">Service Après <span class="wipe">Wipe</span></span>
            </h1>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style lang="css" scoped>
.wipe {
    color: hsl(var(--p));
}
</style>