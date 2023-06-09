import { StyleSheet, Text, View, TextInput, ToastAndroid,Image,Pressable } from "react-native";
import { db, doc, updateDoc } from "../config/firebase";
import { useEffect, useState } from "react";
export default function UpdateData({ route, navigation }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const updateData = async (id) => {
    const updatedRef = doc(db, "shopping", id);

    await updateDoc(updatedRef, {
      title: title,
      location: location,
      price: price,
    }).then(() => {
      ToastAndroid.showWithGravity(
        "Item Updated",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setTitle("");
      setLocation("");
      setPrice("");
      navigation.goBack();
    });
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      <Text style={styles.text1}>Camping Site Info: </Text>
      
      <Text style={styles.text2}>Name:</Text>
      <Text style={styles.text3}>{route.params.title}</Text>
      <Text style={styles.text2}>Location:</Text>
      <Text style={styles.text3}>{route.params.location}</Text>
      <Text style={styles.text2}>Price:</Text>
      <Text style={styles.text3}>{route.params.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b3188",
    
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 10,
    marginTop:40,
    marginLeft:50,
  },
  header: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: 500,
    flex: 1,
    color:'white',
  },
  noOfItems: {
    fontSize: 30,
    fontWeight: 500,
    marginRight: 20,
  },
  input: {
    backgroundColor: "#528fcc",
    padding: 10,
    fontSize: 17,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 50,
  },
  text1: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 25,
    marginBottom:20,
    color:'white',
    fontFamily:'serif',
  },
  text2: {
    fontSize: 20,
    fontWeight:'bold',
    marginTop:10,
    color:'white',
    marginLeft:20,
    fontFamily:'monospace',
  },
  text3: {
    fontSize: 25,
    marginLeft:40,
    color:'white',
    fontFamily:'serif',
  },
});