import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Footer = () => {
  
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.text}> &copy; 2025 All right are reserved </Text>
        <Text style={styles.text}> React Native</Text>
      </View>
    )
  
}
export default Footer

const styles = StyleSheet.create({
    footerContainer:{
        width:'100%',
        backgroundColor:'black',
        color:"white",
        padding:20,
        marginTop:30,
    },
    text:{
        color:'black',
        fontSize:20
    }

})
