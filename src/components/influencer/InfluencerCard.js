import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../constants';

const InfluencerCard = ({item}) => (
  <View style={styles.card}>
    <Text style={styles.platform}>{item.platform}</Text>
    <View style={styles.cardHeader}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text
          style={
            styles.verified
          }>{`Verified • ${item.followers} followers`}</Text>
      </View>
      <Image source={{uri: item.image}} style={styles.profilePic} />
    </View>
    <View style={styles.statsRow}>
      <View style={styles.stat}>
        <Text style={styles.statValue}>{item.followers}</Text>
        <Text style={styles.statLabel}>Followers</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statValue}>{item.posts}</Text>
        <Text style={styles.statLabel}>Posts</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statValue}>{item.engagements}</Text>
        <Text style={styles.statLabel}>Engagements</Text>
      </View>
    </View>
  </View>
);

export default InfluencerCard;
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F8F9FA',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  platform: {fontWeight: 'bold', color: '#555', marginBottom: 10},
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {fontSize: 20, fontWeight: 'bold', color: Colors?.black},
  verified: {color: '#666', marginTop: 4},
  profilePic: {width: 80, height: 80, borderRadius: 10},
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 15,
  },
  stat: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: '32%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  statValue: {fontSize: 18, fontWeight: 'bold', color: Colors?.black},
  statLabel: {color: '#666', fontSize: 12},
});
