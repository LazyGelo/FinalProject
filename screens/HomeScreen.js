import { StyleSheet, Text, View} from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from '@rneui/themed';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();

export default function HomeScreen( { navigation} ) {
  const { user } = useAuthentication();
  return (
    <View style={styles.container}>
        <Text style={styles.text1}>Welcome</Text>
        <Text style={styles.text2}>{user?.email}!</Text>
        <Button title="Add Camping Site" buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 5,
              }}
               onPress={()=>navigation.navigate('AddItem')} />
               <Button title="Edit/Delete Camping Site" buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 5,
              }}
               onPress={()=>navigation.navigate('UDShop')} />
        <Button title="Camping Site List" buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 5,
              }}
               onPress={()=>navigation.navigate('Shopping')} />
               <Button title="About" buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 5,
              }}
               onPress={()=>navigation.navigate('About')} />
      <Button title="Sign Out" buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 5,
              }}
               onPress={() => signOut(auth)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
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
  button: {
    backgroundColor: "#528fcc",
            padding: 10,
            width: "90%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginHorizontal: 50,
            marginVertical: 10,
  
    
  },
});