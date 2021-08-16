import React, { useEffect } from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity, Platform} from 'react-native'

import{
  setTestDeviceIDAsync,
  AdMobBanner,
  AdMobInterstitial, //전면 광고 배너
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';


//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function Card({content,navigation}){

  useEffect(()=>{
//Card.js에 들어오자마자 전면 광고를 내보내야 하므로 useEffect에 설정해야 한다.
//애드몹도 외부 API에 속하기 때문에, 실행 순서를 지키기 위해 async/await를 사용해야 한다.
Platform.OS==='ios' ? AdMobInterstitial.setAdUnitID("ca-app-pub-4904587771389145/4842191892"):AdMobInterstitial.setAdUnitID("ca-app-pub-4904587771389145/4288298756")
//ios이면 ios 키를, 안드로이드이면 안드로이드 키를 사용

AdMobInterstitial.addEventListener("interstitialDidLoad",()=>
  console.log("interstitialDidLoad")
  );
AdMobInterstitial.addEventListener("interstitialDidFailToLoad",()=>
  console.log("interstitialDidFailToLoad")
  );
AdMobInterstitial.addEventListener("interstitialDidOpen",()=>
  console.log("interstitialDidOpen")
  );
AdMobInterstitial.addEventListener("interstitialDidClose",()=>{
  //광고가 끝나면
  console.log("interstitialDidClose")
  navigation.navigate('DetailPage',{idx:content.idx})
  //누른 디테일 페이지로 돌아온다.
});
},[])

const goDetail=async()=>{
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
  await AdMobInterstitial.showAdAsync();
}


    return(
        //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
        <TouchableOpacity style={styles.card} onPress={()=>{goDetail()}}>
            <Image style={styles.cardImage} source={{uri:content.image}}/>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    
    card:{
      flex:1,
      flexDirection:"row",
      margin:10,
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10
    },
    cardImage: {
      flex:1,
      width:100,
      height:100,
      borderRadius:10,
    },
    cardText: {
      flex:2,
      flexDirection:"column",
      marginLeft:10,
    },
    cardTitle: {
      fontSize:20,
      fontWeight:"700"
    },
    cardDesc: {
      fontSize:15
    },
    cardDate: {
      fontSize:10,
      color:"#A6A6A6",
    }
});