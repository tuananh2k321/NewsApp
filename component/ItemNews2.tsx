import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, ICON} from './Constant';
import {useDispatch} from 'react-redux';
// interface News {
//   // Định nghĩa các thuộc tính của tin tức
//   // Ví dụ: title, content, date, ...
//   title: string;
//   content: string;
//   date: string;
//   // Thêm các thuộc tính khác nếu cần
// }
export const ItemNews2 = (props: any) => {
  const {news, navigation} = props;
  const disPath = useDispatch();
  const onClickItem = () => {
    //console.log(news._id);
    //navigation.navigate('NewsDetail', {id: news._id});
    navigation.navigate('NewsDetail');
    disPath({
      type: 'GET-DETAIL-NEWS',
      payload: [news._id],
    });
  };
  return (
    <TouchableOpacity
      onPress={() => onClickItem()}
      style={{
        marginBottom: 15,
        paddingBottom: 15,
        backgroundColor: '#fff', // Ensure there's a background color
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
      }}>
      <Image
        style={{
          width: '100%',
          height: 300,
          borderRadius: 10,
          marginTop: 20,
        }}
        source={{
          uri: news.image || 'https://stockdep.net/files/images/45572075.jpg',
        }}
      />
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        {news.title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: COLOR.detail,
          fontWeight: 'bold',
          marginTop: 10,
        }}
        numberOfLines={2}>
        {news.description}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              color: COLOR.detail,
              fontWeight: 'bold',
              marginRight: 10,
            }}>
            {news.country}
          </Text>
          <Image
            style={{width: 25, height: 25}}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/225px-Flag_of_Vietnam.svg.png',
            }}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              color: COLOR.detail,
              fontWeight: 'bold',
              marginRight: 10,
            }}>
            {news.createAt}
          </Text>
          <Image style={{width: 25, height: 25}} source={ICON.clock} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
