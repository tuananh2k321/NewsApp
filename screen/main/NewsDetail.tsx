import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR, ICON} from '../../component/Constant';
import {ScrollView} from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
export default function NewsDetail(props: any) {
  try {
    interface NewsItem {
        image?: string
        title?: string
        description?: string[] | undefined
        specific?: [
            {
                image?: string,
                description?: string
            }
        ]
        createAt?: string
        country?: string
        // Add other properties as needed
      }

    const {navigation, route} = props;
    //const {params} = route
    const disPath = useDispatch();
    const dataDetail = useSelector((state: any) => state.news.dataDetailNews);

    const [data, setData] = useState<NewsItem>()
    const [loading, setLoading] = useState(true)
   
    useEffect(() => {
        if (dataDetail.result) {
            setData(dataDetail.news)
            console.log(dataDetail.news)
            setLoading(false)
        }
    }, [dataDetail])
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.rowView}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Image style={styles.iconStyle} source={ICON.back} />
            </TouchableOpacity>

            <Image style={styles.iconStyle} source={ICON.favorite} />
          </View>

          <View>
            <Text style={styles.title}>{data?.title}</Text>
            <Image
              style={styles.image}
              source={{
                uri: data?.image || 'https://stockdep.net/files/images/45572075.jpg',
              }}
            />
            <View style={{height: 10}}></View>
            <View style={styles.rowView}>
              <View style={styles.rowView}>
                <Text style={styles.timeAndCountry}>{data?.country}</Text>
                <Image style={{width: 25, height: 25}} source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/225px-Flag_of_Vietnam.svg.png',
                }}/>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.timeAndCountry}>{data?.createAt}</Text>
                <Image style={styles.iconStyle} source={ICON.clock} />
              </View>
            </View>
            <Text style={styles.description}>{data?.description && data.description[0]}</Text>
            <Text style={styles.description}>{data?.description && data.description[1]}</Text>
            <Text style={styles.description}>{data?.description && data.description[2]}</Text>
            <View>
              <Image
                style={styles.image}
                source={{
                  uri: data?.specific?.[0]?.image || 'https://stockdep.net/files/images/45572075.jpg',
                }}
              />
              <Text style={styles.timeAndCountry}>{data?.specific?.[0]?.description}</Text>
            </View>
          </View>
          <Text style={styles.description}>{data?.description && data?.description[3]}</Text>
          <Text style={styles.description}>{data?.description && data?.description[4]}</Text>
          <Text style={styles.description}>{data?.description && data?.description[5]}</Text>
          <Text style={styles.description}>{data?.description && data?.description[6]}</Text>
          <Text style={styles.description}>{data?.description && data?.description[7]}</Text>
          <Text style={styles.description}>{data?.description && data?.description[8]}</Text>
        </SafeAreaView>
        <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
      />
      </ScrollView>
    );
  } catch (err) {
    console.log(err);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLOR.background,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  iconStyle: {
    width: 25,
    height: 25,
    tintColor: 'black',
  },
  title: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginBottom: 10,
  },
  timeAndCountry: {
    fontSize: 16,
    color: COLOR.detail,
    fontWeight: 'bold',
    marginRight: 10,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 50,
  },
});
