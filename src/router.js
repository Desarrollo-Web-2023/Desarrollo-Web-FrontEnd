import { createRouter, createWebHistory } from "vue-router";

import home from "./components/frames/home/home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },

    {
      path: "/login",
      name: "login",
      component: () => import("./components/frames/auth/login.vue"),
    },
    {
      path: "/simplesearch",
      name: "Simple Search",
      component: () => import("./components/frames/search/simpleSearch.vue"),
    },
    {
      path: "/advancedsearch",
      name: "Advanced Search",
      component: () => import("./components/frames/search/advancedsearch.vue"),
    },
    {
      path: "/misdocumentos",
      name: "Mis Documentos",
      component: () => import("./components/frames/documents/mydocuments.vue"),
    },

    ////ADMIN PANEL ROUTES
    {
      path: "/adminpanel",
      name: "Administrator Panel ",
      component: () => import("./components/frames/admin/adminpanel.vue"),
    },

    //publication routes
    {
      path: "/adminpanel/publication/create",
      name: "Create Document",
      component: () => import("./components/frames/admin/documents/create.vue"),
    },
    {
      path: "/adminpanel/publication/validate",
      name: "Validate Document",
      component: () =>
        import("./components/frames/admin/documents/validate.vue"),
    },

    // COLLEGE BODIES
    {
      path: "/adminpanel/collegebody",
      name: "BB",
      component: () => import("./components/frames/admin/bodies/view.vue"),
    },

    {
      path: "/adminpanel/collegebody/create",
      name: "BB Create",
      component: () => import("./components/frames/admin/bodies/create.vue"),
    },

    {
      path: "/adminpanel/collegebody/modify",
      name: "BB Modify",
      component: () => import("./components/frames/admin/bodies/modify.vue"),
    },

    //----------------------------------------

    // USERS ROUTES
    {
      path: "/adminpanel/user",
      name: "USER",
      component: () => import("./components/frames/admin/users/view.vue"),
    },
    {
      path: "/adminpanel/user/create",
      name: "USER create",
      component: () => import("./components/frames/admin/users/create.vue"),
    },
    {
      path: "/adminpanel/user/modify",
      name: "USER modify",
      component: () => import("./components/frames/admin/users/modify.vue"),
    },
    //DOCUMENT ROUTES
    {
      path: "/document/:id",
      name: "Document",
      component: () => import("./components/frames/documents/document.vue"),
    },

    //SIGNUP ROUTE
    {
      path: "/signup",
      name: "Singup",
      component: () => import("./components/frames/auth/signup.vue"),
    },
  ],
});

export default router;
