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

import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { db, collection, addDoc, deleteDoc, doc } from "../config/firebase";
import { getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
export default function List({ navigation }) {
  const [title, setTitle] = useState("");
  const [shopList, setShopList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchItemData, setSearchItemData] = useState([]);
  useEffect(() => {
    const queryCollect = query(collection(db, "shopping"));

    if (search.length > 0) {
    } else {
      setSearchItemData("");
      const unsub = onSnapshot(queryCollect, (snap) => {
        snap.forEach((doc) => {
          setShopList(
            snap.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
      });
      return unsub;
    }
  }, [search]);

  //Add data
  // const addShoppingItem = async () => {
  //   if (title == "") {
  //     alert("Item is empty");
  //   } else {
  //     const q = query(collection(db, "shopping"), where("title", "==", title));

  //     const querySnap = await getDocs(q);

  //     if (querySnap.empty) {
  //       try {
  //         const docRef = await addDoc(collection(db, "shopping"), {
  //           title: title,
  //           isChecked: false,
  //         });
  //         alert("Item is added");
  //         setTitle("");
  //       } catch (e) {
  //         console.error("Error adding document: ", e);
  //       }

  //     } else {
  //       alert("Item is already in the list");
  //     }


  //   }
  // };

  ///Delete the selected data
  const deletData = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, "shopping", id)).then(() => {
      ToastAndroid.showWithGravity(
        "Item Deleted",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    });
  };

  //List use to search the data
  const searchItem = async () => {
    setSearchItemData("");

    const q = query(collection(db, "shopping"), where("title", "==", search));

    const querySnap = await getDocs(q);

    if (querySnap.empty) {
      alert("List is not found");
    } else {
      querySnap.forEach((doc) => {
        setSearchItemData(
          querySnap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/*heading */}
        <Text style={styles.heading}>List of Camping Sites</Text>
        {/*no of shopping items */}
        <Text style={styles.noOfItems}>{shopList.length}</Text>
      </View>

      {/* Textbox to input the search item*/}
      <View
        style={{  
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#f0f2f5",
          borderRadius: 10,
        }}
      >
        <TextInput
          placeholder="Search item..."
          style={styles.search}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        {/* When click will search the Item*/}
        <TouchableOpacity onPress={() => searchItem()}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={searchItemData.length ? searchItemData : shopList}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                backgroundColor:'#22adec',
                borderRadius:10,
                padding: 20,
                marginTop:10,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 18,
                  flex: 1,
                  fontFamily:'monospace',
                  
                }}
              >
                {item.data.title}
              </Text>
              <View style={{ flexDirection: "row-reverse", gap: 20}}>
                {/* <TouchableOpacity onPress={() => deletData(item.id)}>
                  <MaterialIcons name="delete" size={30} color="black" />
                </TouchableOpacity> */}

                {/* Use to update data*/}
                <TouchableOpacity 
                  onPress={() =>
                    navigation.navigate("ViewItem", {
                      id: item.id,
                      title: item.data.title,
                      location: item.data.location,
                      price: item.data.price,
                    })
                  }
                >
                  <MaterialIcons name="navigate-next" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      {/* <TextInput
        placeholder="Enter an item"
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
        onSubmitEditing={() => addShoppingItem()}
      />
      <Pressable style={styles.button} onPress={addShoppingItem}>
      <Text style={styles.buttonText}>Add</Text>
      </Pressable> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6fa",
    padding: 10,
    
  },
  header: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    
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
    fontFamily:'monospace',       
  },
  search: {
    backgroundColor: "#f0f2f5",
    padding: 10,
    fontSize: 17,
    width: "90%",
    alignSelf: "center",
    fontFamily:'monospace'
  },
  button:{
    backgroundColor: "#528fcc",
    padding: 10,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 50,
  },
  buttonText:{
    fontSize: 17,
    color: "#000",
    
  }
});