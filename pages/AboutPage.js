import React, { useEffect } from 'react'
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';


export default function AboutPage({navigation,route}){
    const aboutImage = "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"
 
    useEffect(()=>{
        navigation.setOptions({
            title:"소개 페이지",
            headerStyle: {
                backgroundColor: "#ffc0cb",
                shadowColor: "#ffc0cb",
            },
            headerTintColor:"#000",
        })
    },[])
 
 
 
    return (
    <View style={styles.container}>
        <Text style={styles.title}>안녕하세요! 각종 생활의 꿀팁들을 모아서 편리하게 볼 수 있게 구성해두었습니다.</Text>
       
        
        <View style={styles.textContainer}>
            <Image style={styles.aboutImage} source={{uri:aboutImage}} resizeMode={"cover"}/>
            <Text style={styles.desc01}>
                많은 내용을 간결하게 담아내려 노력했습니다!</Text>
            <Text style={styles.desc02}>찜하기 버튼을 누르면 자주 보는 내용을 찜 버튼에서 확인할 수 있습니다.</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>여러분의 인스타계정</Text>
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#ffc0cb",
        alignItems:"center"
      
    },
    title: {
        fontSize:25,
        fontWeight:"700",
        color:"#fff",
        paddingLeft:30,
        paddingTop:50,
        paddingRight:30
    },
    textContainer: {
        width:350,
        height:550,
        backgroundColor:"#fff",
        marginTop:35,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    aboutImage:{
        width:150,
        height:150,
        borderRadius:30
    },
    desc01: {
        textAlign:"center",
        fontSize:20,
        fontWeight:"700",
        paddingLeft:22,
        paddingRight:22

    },
    desc02: {
        textAlign:"center",
        fontSize:15,
        fontWeight:"700",
        padding:22
    },
    button:{
        backgroundColor:"pink",
        padding:20,
        borderRadius:15
    },
    buttonText: {
        color:"#fff",
        fontSize:15,
        fontWeight:"700"
    }
})