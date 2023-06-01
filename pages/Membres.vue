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
                        pseudo: "Ashard",
                        classe: "Templier",
                        Rang: "Tribun",
                        Métier: ""
                    },
                    {
                        pseudo: "Azra",
                        classe: "Gladiateur",
                        Rang: "Centurion",
                        Métier: ""
                    },
                    {
                        pseudo: "Hankz",
                        classe: "Sorcier",
                        Rang: "Centurion",
                        Métier: ""
                    },
                    {
                        pseudo: "Hantares",
                        classe: "Rôdeur",
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
                        pseudo: "Noconie",
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
                        pseudo: "Baku",
                        classe: "Assassin",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Dmz",
                        classe: "Gladiateur",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Heidyne",
                        classe: "Spiritualiste",
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
                        pseudo: "Lakrass",
                        classe: "Sorcier",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Macminou",
                        classe: "Clerc",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Merguezz",
                        classe: "Rôdeur",
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
                        pseudo: "Pandoulette",
                        classe: "Sorcier",
                        Rang: "Légionnaire",
                        Métier: "Alchimie"
                    },
                    {
                        pseudo: "Peykah",
                        classe: "Spiritualiste",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Promathia",
                        classe: "Rôdeur",
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
                        pseudo: "Zheff",
                        classe: "Sorcier",
                        Rang: "Légionnaire",
                        Métier: ""
                    },
                    {
                        pseudo: "Alcynes",
                        classe: "Clerc",
                        Rang: "Recrue",
                        Métier: "Cuisine"
                    },
                    {
                        pseudo: "Azarel",
                        classe: "Rôdeur",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Blakmamba",
                        classe: "Aède",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Bonbon",
                        classe: "Spiritualiste",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Bounty",
                        classe: "Clerc",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Braze",
                        classe: "Gladiateur",
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
                        pseudo: "Karoto",
                        classe: "Assassin",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Mailynn",
                        classe: "Spiritualiste",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Marluxia",
                        classe: "Sorcier",
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
                        pseudo: "Ocalm",
                        classe: "Assassin",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Oometisse",
                        classe: "Clerc",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Pwachiche",
                        classe: "Templier",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Risbo",
                        classe: "Templier",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Risjo",
                        classe: "Gladiateur",
                        Rang: "recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Sachimie",
                        classe: "Spiritualiste",
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
                        pseudo: "Spowned",
                        classe: "Spiritualiste",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Suha",
                        classe: "Clerc",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Tehix",
                        classe: "Clerc",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Tozyer",
                        classe: "Rôdeur",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Tsukasaa",
                        classe: "Sorcier",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Xenoria",
                        classe: "Clerc",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Xheal",
                        classe: "Clerc",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Yamabushi",
                        classe: "Rôdeur",
                        Rang: "Recrue",
                        Métier: ""
                    },
                    {
                        pseudo: "Zuul",
                        classe: "Sorcier",
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
    background-image: url(/_nuxt/assets/imgaccueil_optimized.jpg);
    background-position: top;
    background-attachment: fixed;
}
table {
    background-color: hsla(360, 100%, 100%, 0.75) !important;
}
</style>