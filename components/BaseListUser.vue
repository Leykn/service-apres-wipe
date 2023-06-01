<template>
        <td>
            <div class="flex items-center space-x-3">
                <div class="avatar mediaBasic">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src="../assets/default_avatar.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div class="font-bold">{{ Pseudo }}</div>
                </div>
            </div>
        </td>
        <td>
            {{ Classe }}<br/>
            <span class="badge badge-ghost badge-sm">{{ Rang }}</span>
        </td>
        <td>{{ Métier }}</td>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: {
            Pseudo: String,
            Classe: String,
            Rang: String,
            Métier: String,
        },
    }
</script>

<style lang="css" scoped>

</style>