import React from "react"
import { View, Image, StyleSheet } from "react-native"

export default function Header(){
    return(
        <View style={styles.container} >
           <Image source={require("../../assets/codenation.png")} style={styles.image} ></Image>
        </View>           
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:100,
        
        alignItems:"center",
        justifyContent:"center"
    },
    title: {
        fontSize: 20,
        color: "#FFF",
        fontWeight: "bold",
        textAlign:"center"  
    },
    image:{
        resizeMode:"center",
        width: 300,
        height: 300
      }
})