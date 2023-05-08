import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { async } from "@firebase/util";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../views/Home.vue")},
    { path: "/register", component: () => import("../views/Register.vue")},
    { path: "/sign-in", component: () => import("../views/SignIn.vue")},
    { 
      path: "/feed", 
      component: () => import("../views/Feed.vue"),
      meta: {
        requireAuth: true,
      },
    },
  ],
});

const getCurrentUser = () =>{
  return new Promise((resolve, reject) =>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) =>{
        removeListener();
        resolve(user);
      }
    )
  })
};

  router.beforeEach(async(to,from,next)=>{
    if (to.matched.some((record)=> record.meta.requireAuth)){
      if (await getCurrentUser()) {
        next();
      } else {
        alert("you dont have access!");
        next("/");
      }
    } else {
      next();
    }

  });

export default router;