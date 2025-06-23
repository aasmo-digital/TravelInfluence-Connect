import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import styles from './discover.style';
import {
  HeaderCompt,
  InfluencerCard,
  Loader,
  SearchBarCompt,
  StatusBarCompt,
} from '../../../components';
import {FAKE_INFLUENCERS} from './Data';
import imageIndex from '../../../assets/images/imageIndex';
import ApiRequest from '../../../network/ApiRequest';
import hotelApi from '../../../apis/hotelApi';

const DiscoverScreen = () => {
  const [influencers, setInfluncers] = useState<any>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await ApiRequest({
        baseUrl: hotelApi.getAllInfluencers,
        method: 'GET',
        isForm: false,
      });

      // console.log('API Result:---', response?.status==200 );

      if (response?.status == 200) {
        setLoading(false);

        setInfluncers(FAKE_INFLUENCERS);
      } else {
        setLoading(false);

        setInfluncers([]);
      }
    } catch (err) {
      setLoading(false);

      console.log('API Error:', err);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarCompt />

      <HeaderCompt
        rightIcon={imageIndex?.filter}
        title="Discover"
        onRightPress={() => Alert.alert('filer btn')}
      />
      <SearchBarCompt />
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={influencers}
          renderItem={({item}) => <InfluencerCard item={item} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  );
};

export default DiscoverScreen;
