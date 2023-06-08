import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Pressable,
  TextInput,
  FlatList,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useEffect, useState } from "react";
import { db, collection, addDoc} from "../config/firebase";
import { getDocs, query, where } from "firebase/firestore";
export default function AddItem({ navigation }) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
const addShoppingItem = async () => {
    if (title == "") {
      alert("Item is empty");
    } else {
      const q = query(collection(db, "shopping"), where("title", "==", title));
      const w = query(collection(db, "shopping"), where("location", "==", location));
      const r = query(collection(db, "shopping"), where("price", "==", price));

      const querySnap = await getDocs(q,w,r);

      if (querySnap.empty) {
        try {
          const docRef = await addDoc(collection(db, "shopping"), {
            title: title,
            location: location,
            price: price,
            isChecked: false,
          });
          alert("Added a Camping Site");
          setTitle("");
          setLocation(""); 
          setPrice("");
        } catch (e) {
          console.error("Error adding document: ", e);
        }

      } else {
        alert("Camping Site already exist");
      }


    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:20, color:'black',fontFamily:'serif',marginTop:10, marginBottom:20, fontWeight:'bold'}}>Add Campsite</Text>
    <TextInput
        placeholder="Camping Site Name"
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
        // onSubmitEditing={() => addShoppingItem()}
      />
      <TextInput
        placeholder="Camping Site Location"
        style={styles.input}
        value={location}
        onChangeText={(text) => setLocation(text)}
        // onSubmitEditing={() => addShoppingItem()}
      />
      <TextInput
        placeholder="Camping Spot Price"
        style={styles.input}
        value={price}
        onChangeText={(text) => setPrice(text)}
        // onSubmitEditing={() => addShoppingItem()}
      />
      <Pressable style={styles.button} onPress={addShoppingItem}>
      <Text style={styles.buttonText}>Add</Text>
      </Pressable>
      </SafeAreaView>
      );
  }
  
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#e6e6fa",
          padding: 10,
        },
        input: {
            backgroundColor: "#f0f2f5",
            padding: 10,
            fontSize: 17,
            width: "90%",
            alignSelf: "center",
            borderRadius: 10,    
            marginTop: 15,   
            marginBottom: 15,
            fontFamily:'serif',
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
          buttonText:{
            fontSize: 17,
            color: "#000",
            fontFamily:'monospace'

            
          }
    });