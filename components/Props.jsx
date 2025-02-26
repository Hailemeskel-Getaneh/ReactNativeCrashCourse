import React from 'react'
import { Text, View , StyleSheet} from 'react-native'

const Props = ({name}) => {
    return (
      <View>
        <Text style={styles.myText }> Hello {name} , Do you know about props </Text>
      </View>
    )
}

export default Props;

const styles = StyleSheet.create({
    myText:{
        fontSize:22,
        color:'black',
        margin:10,
        justifyContent:'center',
        alignItems:'center'
        }
})







