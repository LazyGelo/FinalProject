import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from '@rneui/themed';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { color } from '@rneui/base';

const auth = getAuth();

const SignInScreen = ({ navigation}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [validationMessage,setvalidationMessage] = useState('');
  
  async function login() {
    if (email === '' || password === '') {
      setvalidationMessage('required filled missing')
      return;
    }

    try {
      await signInWithEmailAndPassword(auth,email, password);
    } catch (error) {
     setvalidationMessage(error.message);
    }
  }

  return (
    <View style={styles.container}>
      
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Input
          placeholder='Email'
          style={styles.email}
          containerStyle={{marginTop: 10}}
          value={email}
          placeholderTextColor={'#ebf1f7'}
          onChangeText={(text) => setEmail(text)}
          leftIcon={<Icon name='envelope' size={16} color={'#ebf1f7'}/>}
            />

        <Input
          placeholder='Password'
          style={styles.pass}
          containerStyle={{marginTop: 10}}
          value={password}
          placeholderTextColor={'#ebf1f7'}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          leftIcon={<Icon name='key' size={16} color={'#ebf1f7'}/>}
            />
       {<Text style={styles.error}>{validationMessage}</Text>}

        <Button title="Sign in" buttonStyle={{marginTop:10, placeholderTextColor: '#ebf1f7', 
                                              backgroundColor:'#2582f6', borderRadius:10, fontSize:5}} onPress={login} />
        <Text style={{marginTop:5, fontSize:17, color:'#ebf1f7'}}> Don't have an account yet? 
        <TouchableOpacity onPress={()=>navigation.navigate('Sign Up')}>
                <Text style={{marginTop:6, fontSize:15, color:'#ebf1f7', 
                                fontStyle:'italic', fontFamily:'serif',
                                textDecorationLine:'underline'}}>Sign up here</Text> 
          </TouchableOpacity>
          </Text>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#0b3188',
    alignItems: 'center',
    justifyContent: 'center',
       
  },
  error: {
    marginTop: 10,
    color: 'red',
  },
  email: {
    fontFamily: 'serif',
    fontSize: 17,
    width: "90%",
    alignSelf: "center",
  },
  pass: {
    fontSize: 17,
    width: "90%",
    alignSelf: "center",
    fontFamily: 'serif',
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 20,
  }
});

export default SignInScreen;