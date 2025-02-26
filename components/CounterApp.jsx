import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CounterApp = () => {

    const [count, setCount] = useState(0);
    return(
        <View style={styles.container}>
            <Text style={styles.resultLabel}>Count:{count}</Text>


            <TouchableOpacity  onPress={() => setCount(count + 1)} >
                <Text style={styles.button} > Increament</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => setCount(count -1)}> 
                <Text style={styles.button} >Decreament</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCount(0)}>
              <Text style={styles.button}>Reset</Text>
            </TouchableOpacity>


        </View>
    )
}

export default CounterApp;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    button:{
        padding:10,
        margin:10,
        borderRadius:5,
        color:'white',
        fontSize:19,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    resultLabel:{
        fontSize:19,
        margin:20
    }
})