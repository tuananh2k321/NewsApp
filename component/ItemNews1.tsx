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
export const ItemNews1 = (props: any) => {
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
    <TouchableOpacity onPress={() => onClickItem()}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          marginTop: 20,
        }}>
        <Image
          style={{width: 130, height: 130, borderRadius: 10, marginRight: 10}}
          source={{
            uri: news.image,
          }}
        />
        <View
          style={{
            maxWidth: '60%',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: 'bold',
            }}
            numberOfLines={1}>
            {news.title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: COLOR.detail,
              fontWeight: 'bold',
              marginTop: 6,
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
                  fontSize: 16,
                  color: COLOR.detail,
                  fontWeight: 'bold',
                  marginRight: 6,
                }}>
                {news.country}
              </Text>
              <Image
                style={{width: 20, height: 20}}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/225px-Flag_of_Vietnam.svg.png',
                }}
              />
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOR.detail,
                  fontWeight: 'bold',
                  marginRight: 6,
                }}>
                {news.createAt}
              </Text>
              <Image style={{width: 20, height: 20}} source={ICON.clock} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
