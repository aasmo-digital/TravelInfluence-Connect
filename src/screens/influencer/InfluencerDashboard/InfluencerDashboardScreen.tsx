import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const FAKE_INVITES = [
    { id: '1', title: 'Luxury Stay in Budapest', hotel: 'The Grand Budapest Hotel', image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: '2', title: 'California Dreamin\' Campaign', hotel: 'Hotel California', image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const FAKE_WISHLIST = [
    { id: '1', title: 'Eiffel Tower Views', location: 'Paris, France', image: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: '2', title: 'Zen Garden Retreat', location: 'Kyoto, Japan', image: 'https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-161251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
]

const InfluencerDashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?u=sophia' }} style={styles.profileImage} />
          <Text style={styles.name}>Sophia Carter</Text>
          <Text style={styles.username}>@sophia.travels</Text>
          <Text style={styles.bio}>Travel Influencer</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>120K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>8.5%</Text>
            <Text style={styles.statLabel}>Engagement</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>250</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Campaign Invites</Text>
          {FAKE_INVITES.map(item => (
            <View key={item.id} style={styles.card}>
              <Image source={{uri: item.image}} style={styles.cardImage}/>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle}>{item.hotel}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Travel Wishlist</Text>
           {FAKE_WISHLIST.map(item => (
            <View key={item.id} style={styles.card}>
              <Image source={{uri: item.image}} style={styles.cardImage}/>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle}>{item.location}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
// Styles...
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    profileHeader: { alignItems: 'center', padding: 20, backgroundColor: 'white' },
    profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
    name: { fontSize: 22, fontWeight: 'bold', color: '#333' },
    username: { fontSize: 16, color: '#666' },
    bio: { fontSize: 14, color: '#888', marginTop: 5 },
    statsContainer: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20, backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#EEE' },
    statBox: { alignItems: 'center' },
    statNumber: { fontSize: 18, fontWeight: 'bold', color: '#333' },
    statLabel: { fontSize: 12, color: '#888' },
    section: { marginTop: 10, backgroundColor: 'white', padding: 20 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
    card: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
    cardImage: { width: 60, height: 60, borderRadius: 10 },
    cardText: { marginLeft: 15 },
    cardTitle: { fontSize: 16, fontWeight: 'bold' },
    cardSubtitle: { fontSize: 14, color: '#666' },
});


export default InfluencerDashboardScreen;