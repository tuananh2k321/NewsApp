import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ItemNews2} from '../../component/ItemNews2';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { COLOR } from '../../component/Constant';

export default function Explore(props: any) {
  const {navigation} = props;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const disPath = useDispatch();
  const dataNews = useSelector((state: any) => state.news.dataListNews);

  useEffect(() => {
    //console.log('listNews: ', dataNews);
    setLoading(true);
    if (dataNews.result) {
      //console.log('listNews: ', dataNews.news);
      setData(dataNews.news);
      setLoading(false);
    }
  }, [dataNews]);

  useEffect(() => {
    disPath({
      type: 'GET-LIST-NEWS',
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text
              style={{
                fontSize: 24,
                color: COLOR.primary,
                fontWeight: 'bold',
                marginBottom: 20,
              }}>
              Tin tức hot nhất
            </Text>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ItemNews2 news={item} navigation={navigation} />
          )}
          keyExtractor={item => item._id.toString()}
          showsVerticalScrollIndicator={false}
        />
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
    paddingBottom: 50
  },
});
