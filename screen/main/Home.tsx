import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view'
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR, ICON} from '../../component/Constant';
import {ItemNews1} from '../../component/ItemNews1';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Home(props: any) {
  try {
    interface NewsItem {
      _id?: string
      image?: string
      title?: string
      description?: string
      createAt?: string
      country?: string
      // Add other properties as needed
    }

    const {navigation} = props;
    const [data, setData] = useState();
    const [trending, setTrending] = useState<NewsItem>()
    const [loading, setLoading] = useState(false);

    const disPath = useDispatch();
    const dataNews = useSelector((state: any) => state.news.dataListNews);


    useEffect(() => {
      //console.log('listNews: ', dataNews);
      setLoading(true)
      if (dataNews.result) {
        //console.log('listNews: ', dataNews.news);
        setData(dataNews.news);
        setTrending(dataNews.news[0])
        setLoading(false)
      }
    }, [dataNews]);

    useEffect(() => {
      disPath({
        type: 'GET-LIST-NEWS',
      });
    }, []);

    const onClickTrending = (_id: any) => {
      navigation.navigate('NewsDetail');
      disPath({
        type: 'GET-DETAIL-NEWS',
        payload: [_id],
      });
    }

    return (
      <ScrollView>
        <SafeAreaView
          style={{
            flex: 1,
            padding: 15,
            backgroundColor: COLOR.background,
          }}>
          <View>
            <Text
              style={{
                fontSize: 24,
                color: COLOR.primary,
                fontWeight: 'bold',
                marginBottom: 40,
              }}>
              Tin Tức
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Trending
          </Text>
          <TouchableOpacity onPress={() => onClickTrending(trending?._id)}>
          <Image
            style={{
              width: '100%',
              height: 300,
              borderRadius: 10,
              marginTop: 20,
            }}
            source={{
              uri: trending?.image || 'https://stockdep.net/files/images/45572075.jpg',
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {trending?.title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: COLOR.detail,
              fontWeight: 'bold',
              marginTop: 10,
            }}
            numberOfLines={2}>
            {trending?.description}
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
                {trending?.country}
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
                {trending?.createAt}
              </Text>
              <Image style={{width: 25, height: 25}} source={ICON.clock} />
            </View>
          </View>
          </TouchableOpacity>
          
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: 'gray',
                borderRadius: 10,
                padding: 15,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Thể Thao
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: 'gray',
                borderRadius: 10,
                padding: 15,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Chính Trị
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: 'gray',
                borderRadius: 10,
                padding: 15,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Đời sống
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <ItemNews1 news={item} navigation={navigation} />
              )}
              keyExtractor={item => item._id.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
      />
        </SafeAreaView>
        
      </ScrollView>
    );
  } catch (err) {
    console.log(err);
  }
}

const styles = StyleSheet.create({});
