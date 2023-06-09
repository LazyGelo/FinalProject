import { StyleSheet, Text, View, TextInput, ToastAndroid,Pressable, KeyboardAvoidingView,TouchableWithoutFeedback,Button, } from "react-native";
import { db, doc, updateDoc } from "../config/firebase";
import { useEffect, useState } from "react";
import { Button } from "@rneui/base";

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
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View>
      <Text style={styles.text1}>Camping Site Info: </Text>
      <Text style={styles.text2}>Name: {route.params.title}</Text>
      <Text style={styles.text2}>Location: {route.params.location}</Text>
      <Text style={styles.text2}>Price: {route.params.price}</Text>
      <TextInput
        placeholder="Rename the Campingsite Name"
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
        //onSubmitEditing={() => updateData(route.params.id)}
      />
      <TextInput
        placeholder="Rename the Location"
        style={styles.input}
        value={location}
        onChangeText={(text) => setLocation(text)}
        //onSubmitEditing={() => updateData(route.params.id)}
      />
      <TextInput
        placeholder="Price"
        style={styles.input}
        value={price}
        onChangeText={(text) => setPrice(text)}
        //onSubmitEditing={() => updateData(route.params.id)}
      />
      <Pressable style={styles.button} onPress={() => updateData(route.params.id)}>
      <Text style={styles.buttonText}>Add</Text>
      </Pressable>
      
      
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  },
  button:{
    backgroundColor: "#528fcc",
    padding: 10,
    width: "60%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop:20,

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
  },
  text2: {
    fontSize: 30,
    alignSelf: "center",
  },
});