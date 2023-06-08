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
                borderRadius: 10,
              }}
              containerStyle={{
                width: 220,
                marginTop:50,
                marginVertical: 5,
              }}
               onPress={()=>navigation.navigate('AddItem')}>
              <Text style={{fontSize:15, color:'#ebf1f7',fontFamily:'serif'}}>Add Camping Site</Text>
        </Button>
        <Button title="Edit/Delete Camping Site" buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 10,
              }}
              containerStyle={{
                width: 220,
                marginTop:20,
                marginVertical: 5,
              }}
               onPress={()=>navigation.navigate('UDShop')}> 
               <Text style={{fontSize:15, color:'#ebf1f7',fontFamily:'serif'}}>Edit/Delete Camping Site</Text>
               </Button>
        <Button title="Camping Site List" buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 10,
              }}
              containerStyle={{
                width: 220,
                marginTop:20,
                marginVertical: 5,
              }}
               onPress={()=>navigation.navigate('Shopping')}>
            <Text style={{fontSize:15, color:'#ebf1f7',fontFamily:'serif'}}>Camping Site List</Text>
        </Button>
        <Button title="About" buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 10,
              }}
              containerStyle={{
                width: 220,
                marginTop:20,
                marginVertical: 5,
              }}
               onPress={()=>navigation.navigate('About')}>
            <Text style={{fontSize:15, color:'#ebf1f7',fontFamily:'serif'}}>About</Text>
        </Button>

        <Button title="Sign Out" buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 10,
              }}
              containerStyle={{
                width: 220,
                marginTop:20,
                marginBottom:200,
                marginVertical: 5,
              }}
               onPress={() => signOut(auth)} >
            <Text style={{fontSize:15, color:'#ebf1f7',fontFamily:'serif'}}>Sign Out</Text>
        </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#e6e6fa',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text1: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 60,
    marginBottom:10,
    fontFamily:'serif',
  },
  text2: {
    fontSize: 20,
    alignSelf: "center",
    marginBottom:20,
    fontWeight:'bold',
    fontFamily:'monospace',
  },
  
            
  
    
  
});