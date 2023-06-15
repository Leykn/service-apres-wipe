<template>
  <div class="flex flex-col h-screen w-full bg-base-100">
    <header class="grid w-full h-20 place-items-center fixed z-10">
      <TheHeader />
    </header> 
    <div class="grid h-full place-items-center">
      <main class="grid flex-grow w-full h-full place-items-center overflow-x-hidden">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
<script setup>
</script>
<style>
::-webkit-scrollbar {
  width: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #b8b8b8; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #888; 
}
h2 {
  text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00;
color: #FFFFFF;
}
h3 {
    color: #FFFFFF;
    text-shadow: 2px 2px 0 hsl(var(--p)), 2px -2px 0 hsl(var(--p)), -2px 2px 0 hsl(var(--p)), -2px -2px 0 hsl(var(--p)), 2px 0px 0 hsl(var(--p)), 0px 2px 0 hsl(var(--p)), -2px 0px 0 hsl(var(--p)), 0px -2px 0 hsl(var(--p));
}
tr {
  background-color: hsla(360, 100%, 100%, 0.75);
}
tbody tr:hover {
  background-color: hsla(360, 100%, 100%, 0.95);
}
.mediaBasic {
    display: flex;
}
.mediaSmall {
    display: none;
}
.txtSize {
  font-size: 5vw;
  line-height: 1;
}

@media screen and (max-width: 767px) {
    td {
      padding: 2px !important;
    }
    .mediaBasic {
        display: none;
    }
    .mediaSmall {
        display: flex;
    }
    .txtSize {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
}
</style>