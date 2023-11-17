import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR, ICON} from '../../component/Constant';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

export default function ChangePassword(props: any) {
  const {navigation} = props;

  const [password, setPassword] = useState('');
  const [newPassword, setNewsPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const disPath = useDispatch();
  const userRedux = useSelector((state: any) => state.user.user);
  const dataChangePassword = useSelector(
    (state: any) => state.user.dataChangePassword,
  );

  useEffect(() => {
    console.log('user: ', userRedux);
    if (userRedux) {
      console.log('user: ', userRedux.email);
      setLoading(false);
    }
  }, [userRedux]);

  //   useEffect(() => {
  //     console.log('dataLogin: ', dataChangePassword);
  //     if (dataChangePassword.result) {
  //         navigation.popToTop()
  //         navigation.navigate('Login');
  //     }
  //   }, [dataChangePassword]);

  const onClickChangePassword = () => {
    disPath({
      type: 'CHANGE-PASSWORD',
      payload: [userRedux.email, newPassword, password],
    });
    navigation.popToTop();
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.imageBack}>
          <Image style={styles.iconStyle} source={ICON.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Đổi Mật Khẩu</Text>
      </View>
      <View style={styles.centerView}>
        <Text style={styles.titleInput}>Mật khẩu</Text>

        <View style={styles.viewPassword}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
            onChangeText={(text: any) => setPassword(text)}
            secureTextEntry></TextInput>

          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/image/icons8-eye-30.png')}
          />
        </View>

        <Text style={styles.titleInput}>Mật khẩu mới</Text>

        <View style={styles.viewPassword}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
            onChangeText={(text: any) => setNewsPassword(text)}
            secureTextEntry></TextInput>

          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/image/icons8-eye-30.png')}
          />
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => onClickChangePassword()}>
            <Text style={styles.textBtn}>Thay đổi</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: '#FFF'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLOR.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: 25,
    height: 25,
    tintColor: 'black',
  },
  imageBack: {
    position: 'absolute',
    left: 0,
  },

  title: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  titleInput: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
    marginBottom: 15,
  },
  viewPassword: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 0.5,
    height: 45,
    marginBottom: 20,
    paddingRight: 10,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    borderColor: '#333',
    padding: 10,
    height: 45,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
  },

  bottomView: {
    marginTop: 50,
    justifyContent: 'flex-end',
  },

  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: COLOR.primary,
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
