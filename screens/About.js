import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button, Alert} from 'react-native';

export default function About({ navigation }) {
    return (

        <View style={styles.container}>
            <Text style={styles.name1}>Submitted By:</Text>
            <Image source={require('../assets/Pic.jpg')} style={styles.IDimage}/>
            <Text style={styles.name}>Marc Angelo L. Tulin</Text>
            <Text style={styles.text}>BSIT III - 1</Text>
           
            </View>
             );
  
            }
            const styles = StyleSheet.create({
                container: {
                  flex: 1,
                },
            name: {
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 25,
              },
              name1: {
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 25,
                marginTop: 30,
              },
                text: {
                  color: 'black',
                  fontSize: 25,
                  textAlign:'center',
                  
                },
                IDimage: {
                    width: 230,
                    height: 230,
                    marginTop: 10,
                    marginLeft: 90,
                  },
                  divider: {
                    borderBottomColor: 'black',
                    borderBottomWidth: 5,
                    marginVertical: 2,
                    marginLeft: 70,
                    marginRight: 70
                  },
                });