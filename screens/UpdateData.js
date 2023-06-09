import { StyleSheet, Text, View, TextInput, ToastAndroid,TouchableOpacity,KeyboardAvoidingView} from "react-native";
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
    <KeyboardAvoidingView style={styles.container} behavior='padding'> 
        <View>
        <Text style={styles.text1}>Camping Site Info: </Text>
        <Text style={styles.text2}>Name:</Text>
          <Text style={styles.text3}>{route.params.title}</Text>
          <Text style={styles.text2}>Location:</Text>
          <Text style={styles.text3}>{route.params.location}</Text>
          <Text style={styles.text2}>Price:</Text>
          <Text style={styles.text3}>{route.params.price}</Text>
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
          <TouchableOpacity style={styles.button} onPress={() => updateData(route.params.id)}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity> 
          
        </View>
    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6fa",
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
    fontSize: 20,
    fontWeight: 500,
    flex: 1,
    fontFamily:'monospace',
    marginTop:10,
    marginBottom:15,
  },
  buttonText:{
    fontFamily:'monospace',
    color: 'white',
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
    fontSize: 20,
    fontWeight: 500,
    fontFamily:'monospace',
    marginTop:10,
    marginBottom:15,
  },
  input: {
    backgroundColor: "#f0f2f5",
    padding: 10,
    fontSize: 17,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
    fontFamily:'monospace',
  },
  text1: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 25,
    marginBottom:20,
    color:'black',
    fontFamily:'serif',
  },
  text2: {
    fontSize: 20,
    fontWeight:'bold',
    marginTop:10,
    color:'black',
    marginLeft:20,
    fontFamily:'monospace',
  },
  text3: {
    fontSize: 25,
    marginLeft:40,
    color:'black',
    fontFamily:'serif',
  }
});