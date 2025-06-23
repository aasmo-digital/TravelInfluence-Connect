import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import styles from './discover.style';
import {InfluencerCard} from '../../../components';
import {FAKE_INFLUENCERS} from './Data';

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover</Text>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search influencers..."
          style={styles.searchInput}
        />
      </View>
      {/* <FlatList
        data={FAKE_INFLUENCERS}
        renderItem={({item}) => <InfluencerCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
      /> */}
    </SafeAreaView>
  );
};

export default DiscoverScreen;
