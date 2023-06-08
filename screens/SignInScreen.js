import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from '@rneui/themed';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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
          onChangeText={(text) => setEmail(text)}
          leftIcon={<Icon name='envelope' size={16}/>}
            />

        <Input
          placeholder='Password'
          style={styles.pass}
          containerStyle={{marginTop: 10}}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          leftIcon={<Icon name='key' size={16}/>}
            />
       {<Text style={styles.error}>{validationMessage}</Text>}

        <Button title="Sign in" buttonStyle={{marginTop:10}} onPress={login} />
        <Text style={{marginTop:5,fontSize:17}}> Don't have an account yet ? 
        <TouchableOpacity onPress={()=>navigation.navigate('Sign Up')} style={{color:'blue',marginLeft:10}}>
                <Text>Sign up here</Text> 
          </TouchableOpacity>
          </Text>
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
  error: {
    marginTop: 10,
    color: 'red',
  },
  email: {
    
    fontSize: 17,
    width: "90%",
    alignSelf: "center",
  },
  pass: {
    
    fontSize: 17,
    width: "90%",
    alignSelf: "center",
  },
  logo: {
    width: 250,
    height: 200,
  }
});

export default SignInScreen;