import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button, Alert, SafeAreaView, 
  ScrollView,} from 'react-native';

export default function About({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <Text style={styles.name1}>Submitted By:</Text>
            <Image source={require('../assets/Pic.jpg')} style={styles.IDimage}/>
            <Text style={styles.name}>Marc Angelo L. Tulin</Text>
 
            <Image source={require('../assets/riz.jpg')} style={styles.IDimage}/>
            <Text style={styles.name}>Rizalene Corro</Text>
            
            <Image source={require('../assets/kael.jpg')} style={styles.IDimage}/>
            <Text style={styles.name}>Michael James Labitad</Text>

            <Image source={require('../assets/des.jpg')} style={styles.IDimage}/>
            <Text style={styles.name}>Deserie Sarucam</Text>

            <Text style={styles.text}>BSIT III - 1</Text>
            </View>
            </ScrollView>
          </SafeAreaView>
             );
  
            }
            const styles = StyleSheet.create({
                container: {
                  flex: 1,
                  backgroundColor:'#e6e6fa'
                },
            name: {
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 20,
                fontFamily:'serif',
                marginTop: 15,
              },
              name1: {
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 25,
                marginTop: 20,
                fontFamily:'serif',
              },
                text: {
                  color: 'black',
                  fontSize: 20,
                  textAlign:'center',
                  fontFamily:'serif',
                  marginTop: 10,
                  marginBottom:40,
                },
                IDimage: {
                    width: 230,
                    height: 230,
                    marginTop: 20,
                    alignSelf:'center',
                    borderRadius:10,

                  },
                  divider: {
                    borderBottomColor: 'black',
                    borderBottomWidth: 5,
                    marginVertical: 2,
                    marginLeft: 70,
                    marginRight: 70
                  },
                });