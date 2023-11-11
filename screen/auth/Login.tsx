
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import { COLOR } from '../../component/Constant';


function Login({navigation}: {navigation:any}): JSX.Element{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [email2, setEmail2] = useState('')
  const [password2, setPassword2] = useState('')
  return (
    <SafeAreaView style={{
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      padding: 15
    }}>
      <Text style={{
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 15,
        alignSelf: 'center'
      }}>
        Xin Chào
      </Text>

      <Text style={{
        fontSize: 30,
        color: COLOR.primary,
        fontWeight: 'bold',
        marginBottom: 50,
        alignSelf: 'center'
      }}>
        Mừng Trở Lại
      </Text>

      <Text style={{
        fontSize: 18,
        color: 'black',
        fontWeight: "400",
        marginBottom: 15,
      }}>
        Email
      </Text>

      <TextInput
          style={{
            borderColor: "#333",
            borderWidth: 0.5,
            height: 45,
            borderRadius: 5,
            padding: 10,
            paddingHorizontal: 10,
            fontSize: 20,
            marginBottom: 20,
            width: '100%'
          }}
          placeholder="Email"
          placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
          onChangeText={(text: any) => setEmail(text)}
        ></TextInput>

      <Text style={{
        fontSize: 18,
        color: 'black',
        fontWeight: '400',
        marginBottom: 15,
      }}>
        Mật khẩu
      </Text>

      <View style={{
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 0.5,
        height: 45,
        marginBottom: 20,
        paddingRight: 10,
        alignItems: 'center'
      }}>
        <TextInput
          style={{
            flex: 1,
            borderColor: "#333",
            padding: 10,
            height: 45,
            paddingHorizontal: 10,
            fontSize: 20,
            
          }}
          placeholder="Password"
          placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
          onChangeText={(text: any) => setPassword(text)}
          secureTextEntry
          
        ></TextInput>

        <Image
        style={{width: 25, height: 25}}
          source={
            require('../../assets/image/icons8-eye-30.png')
          }
        />
      </View>
      

      <TouchableOpacity
        onPress={() => {
          console.log('Press')
          navigation.navigate('Detail')}
        }
        style={{
            padding: 20,
            backgroundColor: COLOR.primary,
            borderRadius: 10,
            marginTop: 20
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center'
          }}
        >
            Login
        </Text>
      </TouchableOpacity>
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20
        }}>
          <Text style={{
        fontSize: 18,
        color: 'black',
        fontWeight: '600',
        marginBottom: 15,
        marginRight: 5
      }}>
        Nếu chưa có tài khoản?
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
      >
      <Text style={{
        fontSize: 18,
        color: COLOR.primary,
        fontWeight: '600',
        marginBottom: 15,
      }}>
        Đăng kí
      </Text>
      </TouchableOpacity>
     
        </View>
      
      
    </SafeAreaView>
  );
}



export default Login;
