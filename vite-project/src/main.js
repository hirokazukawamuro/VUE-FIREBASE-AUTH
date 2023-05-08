import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2UzB2oIMzGXDu0tarS8xJnKRzliVri0s",
  authDomain: "vue-firebase-auth-90c54.firebaseapp.com",
  projectId: "vue-firebase-auth-90c54",
  storageBucket: "vue-firebase-auth-90c54.appspot.com",
  messagingSenderId: "492940529410",
  appId: "1:492940529410:web:74df16c08d23a401ddbc1b"
};

initializeApp(firebaseConfig);
const app = createApp(App);

app.use(router)

app.mount('#app')
