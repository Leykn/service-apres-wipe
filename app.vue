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
    color: #fff;
    text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5, -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;
}
h3 {
    color: #FFFFFF;
    text-shadow: 2px 2px 0 hsl(var(--p)), 2px -2px 0 hsl(var(--p)), -2px 2px 0 hsl(var(--p)), -2px -2px 0 hsl(var(--p)), 2px 0px 0 hsl(var(--p)), 0px 2px 0 hsl(var(--p)), -2px 0px 0 hsl(var(--p)), 0px -2px 0 hsl(var(--p));
}
.mediaBasic {
    display: flex;
}
.mediaSmall {
    display: none;
}
.txtSize {
  font-size: 6rem;
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