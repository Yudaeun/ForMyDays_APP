//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져온다
const firebaseConfig = {
    apiKey: "AIzaSyDLWNcqAclJ1_hd-g3thETLBd57o-N5Fj4",
    authDomain: "sparta-myhoneytip-daysmary.firebaseapp.com",
    projectId: "sparta-myhoneytip-daysmary",
    storageBucket: "sparta-myhoneytip-daysmary.appspot.com",
    messagingSenderId: "948561666855",
    appId: "1:948561666855:web:cbfb3ee2b61ef4bf3a3f02",
    measurementId: "G-Z03BMFRFNL"
};

//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()
