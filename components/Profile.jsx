import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity,Alert } from "react-native";

const Profile = () => {

    const contactInfo = () => {
       Alert.alert("email:hailgetaneh1221@gmail.com",
            "phone number :09 5631 94 63"
        )
    }
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/profileImage.jpg")}
        style={styles.Image}
      />
      <Text style={styles.text}>
        Hello Everyone. My name is Hailemeskel Getaneh. I am a mobile app
        developer!!!
      </Text>
      <TouchableOpacity style={styles.button} onPress={contactInfo}>
        <Text>Contact Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  Image: {
    width: 200,
    height: 200,
    borderRadius:100,
    marginBottom: 20,
  },
  text: {
    fontSize: 17,
    color: "black",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    fontWeight:'bold'
  },
});
