/** @format */

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/providers/overview
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: FirestoreAdapter({
    apiKey: "AIzaSyB9SwgLBnFwsVqp7zZByemxy6gLl8sgajo",
    authDomain: "disney-clone-a6c88.firebaseapp.com",
    projectId: "disney-clone-a6c88",
    storageBucket: "disney-clone-a6c88.appspot.com",
    messagingSenderId: "472534866634",
    appId: "1:472534866634:web:ce6b3a8bcce21504533233",
    // Optional emulator config (see below for options)
    emulator: {},
  }),
  // ...
});
//   adapter: FirebaseAdapter(
//     {
//         apiKey: "AIzaSyB9SwgLBnFwsVqp7zZByemxy6gLl8sgajo",
//         authDomain: "disney-clone-a6c88.firebaseapp.com",
//         projectId: "disney-clone-a6c88",
//         storageBucket: "disney-clone-a6c88.appspot.com",
//         messagingSenderId: "472534866634",
//         appId: "1:472534866634:web:ce6b3a8bcce21504533233"
//     }
//   )
//   // ...
// });
