import {useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from '@rneui/base';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth()
const SignUpScreen  = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validationMessage, setValidationMessage] = useState('')


  let validateAndSet = (value,setValue) => {
   setValue(value)
}
function checkPassword(firstpassword,secondpassword) {
  if(firstpassword !== secondpassword){
    setValidationMessage('Password do not match') 
  }
  else setValidationMessage('')
}
  async function createAccount() {
    email === '' || password === '' 
    ? setValidationMessage('required filled missing')
    : ''
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Sign In');
    } catch (error) {
      setValidationMessage(error.message);
    }
  }
  return (
    <View style={styles.container}>
      
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Input
          placeholder='Email'
          containerStyle={{marginTop: 10}}
          fontFamily='serif'
          color='#ebf1f7'
          value={email}
          placeholderTextColor={'#ebf1f7'}
          onChangeText={(text) => setEmail(text)}
          leftIcon={<Icon name='envelope' size={16} color={'#ebf1f7'} />}
            />
        <Input
          placeholder='Password'
          placeholderTextColor={'#ebf1f7'}
          color='#ebf1f7'
          fontFamily='serif'
          containerStyle={{marginTop:10}}
          value={password}
          onChangeText={(value) => validateAndSet(value, setPassword)}
          secureTextEntry
          leftIcon={<Icon name='key' size={16} color={'#ebf1f7'}/>}
          

            />
        <Input
          placeholder='Confirm password'
          placeholderTextColor={'#ebf1f7'}
          fontFamily='serif'
          color='#ebf1f7'
          containerStyle={{marginTop:10}}
          value={confirmPassword}
          onChangeText={(value) => validateAndSet(value,setConfirmPassword)}
          secureTextEntry
          leftIcon={<Icon name='key' size={16} color={'#ebf1f7'}/>}
          onBlur={()=>checkPassword(password,confirmPassword)}
            />  
            {<Text style={styles.error}>{validationMessage}</Text>}
        <Button title="Sign up" buttonStyle={{marginTop:10,backgroundColor:'#2582f6', borderRadius:10}} onPress={createAccount} >
                <Text style={{fontSize:15, color:'#ebf1f7',fontFamily:'serif'}}>Sign up</Text>
        </Button>
        <View>
          <Text style={{marginTop:5,fontSize:17,color:'#ebf1f7', fontFamily:'serif', marginBottom:200}}>Already have an account?
          <TouchableOpacity onPress={()=>navigation.navigate('Sign In')} style={{color:'blue',marginLeft:10}}>
               <Text style={{marginTop:6, fontSize:15, color:'#ebf1f7',
                                fontStyle:'italic', fontFamily:'serif',
                                textDecorationLine:'underline'}}>Login here </Text> 
          </TouchableOpacity>
          </Text>
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#0b3188',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  error: {
    marginTop: 10,
    marginBottom:20,
    color: 'red',
    fontFamily:'serif',
    fontStyle:'italic'
  },
  logo: {
    width: 250,
    height: 200,
    marginTop:60,
  }
});

export default SignUpScreen;