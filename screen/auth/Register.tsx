import React, {useEffect, useState} from 'react';
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
  Image,
  ToastAndroid,
} from 'react-native';
import {COLOR} from '../../component/Constant';
import {useDispatch, useSelector} from 'react-redux';
import UserSlice from '../../redux/reducer/UserSlice';

const Register = (props: any) => {
  const {navigation} = props;
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const disPath = useDispatch();
  const dataRegister = useSelector((state: any) => state.user.dataRegister);

  // useEffect(() => {
  //   console.log('dataRegister: ', dataRegister);
  //   if (dataRegister.result) {
  //     navigation.navigate('Login');
  //   }
  // }, [dataRegister]);

  const onClickRegister = () => {
    console.log('onClickRegister: ', name );
    console.log('onClickRegister: ', email );
    console.log('onClickRegister: ', password );
    console.log('onClickRegister: ', rePassword );
    if (password === rePassword) {
      disPath({
        type: 'REGISTER',
        payload: [name, email, password],
      });
      console.log('dataRegister: ', dataRegister);
      if (dataRegister.result) {
        navigation.navigate('Login');
      } else {
        ToastAndroid.show('Email đã tồn tại',
      ToastAndroid.SHORT,)
      }
    } else {
      ToastAndroid.show('Mật khẩu nhập lại không đúng',
      ToastAndroid.SHORT, // DURATION: SHORT, LONG
      )
    }
    
  };

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: COLOR.background,
      }}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 15,
          alignSelf: 'center',
        }}>
        Xin Chào
      </Text>

      <Text
        style={{
          fontSize: 30,
          color: COLOR.primary,
          fontWeight: 'bold',
          marginBottom: 40,
          alignSelf: 'center',
        }}>
        Tạo Tài Khoản
      </Text>

      <Text
        style={{
          fontSize: 18,
          color: 'black',
          fontWeight: '400',
          marginBottom: 15,
        }}>
        Name
      </Text>

      <TextInput
        style={{
          borderColor: '#333',
          borderWidth: 0.5,
          height: 45,
          borderRadius: 5,
          padding: 10,
          paddingHorizontal: 10,
          fontSize: 20,
          marginBottom: 20,
          width: '100%',
        }}
        placeholder="Name"
        placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
        onChangeText={(text: any) => setName(text)}></TextInput>

      <Text
        style={{
          fontSize: 18,
          color: 'black',
          fontWeight: '400',
          marginBottom: 15,
        }}>
        Email
      </Text>

      <TextInput
        style={{
          borderColor: '#333',
          borderWidth: 0.5,
          height: 45,
          borderRadius: 5,
          padding: 10,
          paddingHorizontal: 10,
          fontSize: 20,
          marginBottom: 20,
          width: '100%',
        }}
        placeholder="Email"
        placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
        onChangeText={(text: any) => setEmail(text)}></TextInput>

      <Text
        style={{
          fontSize: 18,
          color: 'black',
          fontWeight: '400',
          marginBottom: 15,
        }}>
        Mật khẩu
      </Text>

      <View
        style={{
          flexDirection: 'row',
          borderRadius: 5,
          borderWidth: 0.5,
          height: 45,
          marginBottom: 20,
          paddingRight: 10,
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            flex: 1,
            borderColor: '#333',
            padding: 10,
            height: 45,
            paddingHorizontal: 10,
            fontSize: 20,
          }}
          placeholder="Password"
          placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
          onChangeText={(text: any) => setPassword(text)}
          secureTextEntry></TextInput>

        <Image
          style={{width: 25, height: 25}}
          source={require('../../assets/image/icons8-eye-30.png')}
        />
      </View>

      <Text
        style={{
          fontSize: 18,
          color: 'black',
          fontWeight: '400',
          marginBottom: 15,
        }}>
        Nhập lại mật khẩu
      </Text>

      <View
        style={{
          flexDirection: 'row',
          borderRadius: 5,
          borderWidth: 0.5,
          height: 45,
          marginBottom: 20,
          paddingRight: 10,
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            flex: 1,
            borderColor: '#333',
            padding: 10,
            height: 45,
            paddingHorizontal: 10,
            fontSize: 20,
          }}
          placeholder="Password"
          placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
          onChangeText={(text: any) => setRePassword(text)}
          secureTextEntry></TextInput>

        <Image
          style={{width: 25, height: 25}}
          source={require('../../assets/image/icons8-eye-30.png')}
        />
      </View>

      <TouchableOpacity
        onPress={() => onClickRegister()}
        style={{
          padding: 20,
          backgroundColor: COLOR.primary,
          borderRadius: 10,
          marginTop: 20,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
          }}>
          Đăng kí
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: '600',
            marginBottom: 15,
            marginRight: 5,
          }}>
          Nếu có tài khoản?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              fontSize: 18,
              color: COLOR.primary,
              fontWeight: '600',
              marginBottom: 15,
            }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
