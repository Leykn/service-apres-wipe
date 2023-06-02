<template>
    <section class="overflow-x-auto w-full h-full py-20 bg-home">
        <article class="w-full max-w-[1440px] mx-auto p-2">
            <table class="table w-full rounded-lg">
                <!-- head -->
                <thead>
                <tr>
                    <th>Pseudo</th>
                    <th>Classe</th>
                    <th>Métier</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user, index in membres" :key="index">
                    <BaseListUser
                        :Pseudo="user.pseudo"
                        :Classe="user.classe"
                        :Rang="user.Rang"
                        :Métier="user.Métier"
                    >
                    </BaseListUser>
                </tr>
                </tbody>
            </table>
        </article>
    </section>
</template>

<script>
import { reactive, toRefs } from 'vue'
import BaseListUser from '../components/BaseListUser.vue'
    export default {
        components: {
            BaseListUser
        },
        setup() {
            const state = reactive({
                membres: [
                    {
                        pseudo: "Ayz",
                        classe: "Assassin",
                        Rang: "Générale de Brigade",
                        Métier: ""
                    },
                    {
                        pseudo: "Peykah",
                        classe: "Spiritualiste",
                        Rang: "Tribun",
                        Métier: ""
                    },
                    {
                        pseudo: "Hankz",
                        classe: "Sorcier",
                        Rang: "Centurion",
                        Métier: ""
                    },
                    {
                        pseudo: "Lakraps",
                        classe: "Gladiateur",
                        Rang: "Centurion",
                        Métier: ""
                    },
                    {
                        pseudo: "Macminou",
                        classe: "Clerc",
                        Rang: "Centurion",
                        Métier: ""
                    },
                    {
                        pseudo: "Matthosor",
                        classe: "Templier",
                        Rang: "Centurion",
                        Métier: ""
                    },
                    {
                        pseudo: "Morgaa",
                        classe: "Aède",
                        Rang: "Centurion",
                        Métier: ""
                    },
                    {
                        pseudo: "Nocorie",
                        classe: "Sorcier",
                        Rang: "Centurion",
                        Métier: ""
                    },
                    {
                        pseudo: "Abalame",
                        classe: "Gladiateur",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Akroma",
                        classe: "Spiritualiste",
                        Rang: "Légionnaire",
                        Métier: "Alchimie"
                    },
                    {
                        pseudo: "Alcynes",
                        classe: "Clerc",
                        Rang: "Légionnaire",
                        Métier: "Cuisine"
                    },
                    {
                        pseudo: "Ashard",
                        classe: "Templier",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Azarel",
                        classe: "Rôdeur",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Azra",
                        classe: "Gladiateur",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Bonbon",
                        classe: "Spiritualiste",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Bounty",
                        classe: "Clerc",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Braze",
                        classe: "Gladiateur",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Hantares",
                        classe: "Rôdeur",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Helios",
                        classe: "Sorcier",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Hestias",
                        classe: "Templier",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Korigann",
                        classe: "Clerc",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Lysa",
                        classe: "Templier",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Marluxia",
                        classe: "Sorcier",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Miwa",
                        classe: "Gladiateur",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Ocalm",
                        classe: "Assassin",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Pandoulette",
                        classe: "Sorcier",
                        Rang: "Légionnaire",
                        Métier: "Alchimie"
                    },
                    {
                        pseudo: "Promathia",
                        classe: "Rôdeur",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Pwachiche",
                        classe: "Templier",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Siilk",
                        classe: "Rôdeur",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Spowned",
                        classe: "Spiritualiste",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Tehix",
                        classe: "Clerc",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Tozyer",
                        classe: "Rôdeur",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Xenoria",
                        classe: "Clerc",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Yucha",
                        classe: "Aède",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Zheff",
                        classe: "Sorcier",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Zuul",
                        classe: "Sorcier",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Bezoe",
                        classe: "Aède",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Draknire",
                        classe: "Spiritualiste",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Fyurdrimm",
                        classe: "Spiritualiste",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Goldeneyes",
                        classe: "Templier",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Jenly",
                        classe: "Aède",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Karib",
                        classe: "Rôdeur",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Karoto",
                        classe: "Assassin",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Leicka",
                        classe: "Rôdeur",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Mandus",
                        classe: "Rôdeur",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Millie",
                        classe: "Assassin",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Myckinette",
                        classe: "Sorcier",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Spartbuff",
                        classe: "Aède",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Risbo",
                        classe: "Templier",
                        Rang: "Recrue",
                        Métier: ""
                    },
                ]
            })

            return {
                ...toRefs(state)
            }
        }
    }
</script>

<style lang="css" scoped>
* {
    z-index: 1;
}
.bg-home {
    background-image: url(../assets/imgaccueil_optimized.jpg);
    background-position: top;
    background-attachment: fixed;
}
table {
    background-color: hsla(360, 100%, 100%, 0.75) !important;
}
</style>