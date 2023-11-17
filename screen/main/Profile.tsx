import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR, ICON} from '../../component/Constant';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
export default function Profile(props:any) {

  interface UserItem{
    avatar?: string
    name?: string
    email?: string
  }
  const {navigation} = props
  const [user, setUser] = useState<UserItem>()
  const [loading, setLoading] = useState(true)

  const disPath = useDispatch()
  const userRedux = useSelector((state: any) => state.user.user)

  useEffect(() => {
    console.log('user: ', userRedux);
    if (userRedux) {
      setUser(userRedux)
      console.log('user: ', userRedux)
      setLoading(false)
    }
  }, [userRedux]);

  const onClickLogout = () => {
    navigation.popToTop();
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowView}>
        <Image
          style={styles.circleImage}
          source={{
            uri: user?.avatar || 'https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/ban-sao-shutterstock561480127huge-1669015265381.jpg',
          }}
        />
        <View style={styles.alignCenterView}>
          <Text style={styles.nameText}>{user?.name}</Text>
          <Text style={styles.emailText}>{user?.email}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.rowViewItem}>
            <Text style={styles.emailText}>Chỉnh sửa hồ sơ</Text>
            <Image style={styles.iconStyle} source={ICON.editProfile}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.rowViewItem}>
            <Text style={styles.emailText}>Đổi mật khẩu</Text>
            <Image style={styles.iconStyle} source={ICON.changePassword}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.rowViewItem}>
            <Text style={styles.emailText}>Cài đặt</Text>
            <Image style={styles.iconStyle} source={ICON.setting}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => onClickLogout()}>
          
            <Text style={styles.emailText}>Đăng xuất</Text>
         
        </TouchableOpacity>
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
  circleImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30
  },
  rowViewItem: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 15
  },
  iconStyle: {
    width: 25,
    height: 25,
    tintColor: COLOR.primary
  },
  alignCenterView: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  nameText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
  emailText: {
    fontSize: 16,
    color: COLOR.detail,
    fontWeight: 'bold',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 50
  }
});
