import React from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';


export default function AccelerationItem({ item }) {
  return (
      <View>     
        <Image style={styles.image} source={{uri: 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png'}} ></Image>
      </View>
  );
}

const styles = StyleSheet.create({ 
  container:{
    width:"100%",      
    height:100,
    alignItems:"center",
    justifyContent:"center",    
},
   image:{
      resizeMode:"cover",
      width: 100,
      height: 100
    }
})