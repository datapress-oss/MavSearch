## Programok, amik kellenek a fejlesztéshez:

- [NodeJS](https://nodejs.org/en/)
- [VueJS](https://vuejs.org), ezt globálisan installáld: `npm install -g @vue/cli`
- [Git](https://git-scm.com/)
- [GitKraken](https://www.gitkraken.com/git-client)
- [Insomnia core](https://insomnia.rest/download/#windows)
- [MongoDB compass](https://www.mongodb.com/products/compass)
- [VScode](https://code.visualstudio.com/) <br>
  - #### VScode pluginok:
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - [vuetify-vscode](https://marketplace.visualstudio.com/items?itemName=vuetifyjs.vuetify-vscode)
  - [Vue 2 snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets)
  - [StandardJS](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)


## Frontend workflow:

1. terminálban el kell indítani a Vue kezelő felületét: `vue ui`
2. a **Tasks** menu-ben indítsd el a *"serve"* task-ot, ez el indítja a projectnek a live server-t

## Backend workflow:

1. Indítsd el a dev live server-t: `npm run dev`
2. struktúra: *routes*, *models*, *controllers*
3. Endpoint-ok teszteléséhez érdemes az **Insomnia** API klienst használni.

## Git

A repository commitizen friendly, ahhoz, hogy commit-old a stage-elt változásokat futtasd a: `npx git-cz` parancsot a project root mappájában.