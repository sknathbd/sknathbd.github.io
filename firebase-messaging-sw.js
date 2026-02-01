// web/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyANzQ5hvnfk9h2CNtv_DbxTR24RRcaPF30",
    authDomain: "sk-projects-58f06.firebaseapp.com",
    projectId: "sk-projects-58f06",
    storageBucket: "sk-projects-58f06.firebasestorage.app",
    messagingSenderId: "546052800113",
    appId: "1:546052800113:web:68580878d57e748c6065d0",
    measurementId: "G-NHRYY2W0YK"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Background message ', payload);
});
