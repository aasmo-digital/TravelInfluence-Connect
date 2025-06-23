// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';

// const FAKE_APPLICATIONS = [
//   {
//     id: '1',
//     name: 'Sophia Carter',
//     followers: '120k',
//     image: 'https://i.pravatar.cc/150?u=sophia',
//   },
//   {
//     id: '2',
//     name: 'Ethan Walker',
//     followers: '25k',
//     image: 'https://i.pravatar.cc/150?u=ethan',
//   },
//   {
//     id: '3',
//     name: 'Olivia Bennett',
//     followers: '15k',
//     image: 'https://i.pravatar.cc/150?u=olivia',
//   },
// ];

// const CampaignsScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.content}>
//         <Text style={styles.header}>Campaigns</Text>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Active Campaigns</Text>
//           <View style={styles.campaignCard}>
//             <View style={styles.campaignText}>
//               <Text style={styles.campaignCategory}>CAMPAIGN</Text>
//               <Text style={styles.campaignTitle}>Luxury Resort Getaway</Text>
//               <Text style={styles.campaignApps}>5 applications</Text>
//               <TouchableOpacity style={styles.viewButton}>
//                 <Text style={styles.viewButtonText}>View</Text>
//               </TouchableOpacity>
//             </View>
//             <Image
//               source={{
//                 uri: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//               }}
//               style={styles.campaignImage}
//             />
//           </View>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Applications</Text>
//           {FAKE_APPLICATIONS.map(app => (
//             <View key={app.id} style={styles.applicantCard}>
//               <Image source={{uri: app.image}} style={styles.applicantImage} />
//               <View>
//                 <Text style={styles.applicantName}>{app.name}</Text>
//                 <Text style={styles.applicantFollowers}>
//                   {app.followers} followers
//                 </Text>
//               </View>
//             </View>
//           ))}
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Campaign Insights</Text>
//           <View style={styles.insightsGrid}>
//             <View style={styles.insightBox}>
//               <Text style={styles.insightNumber}>120k</Text>
//               <Text style={styles.insightLabel}>Impressions</Text>
//             </View>
//             <View style={styles.insightBox}>
//               <Text style={styles.insightNumber}>80k</Text>
//               <Text style={styles.insightLabel}>Reach</Text>
//             </View>
//           </View>
//           <View style={[styles.insightBox, {width: '100%', marginTop: 15}]}>
//             <Text style={styles.insightNumber}>15k</Text>
//             <Text style={styles.insightLabel}>Engagement</Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// // Styles...
// const styles = StyleSheet.create({
//   container: {flex: 1, backgroundColor: '#F8F9FA'},
//   content: {padding: 20},
//   header: {fontSize: 28, fontWeight: 'bold', marginBottom: 20},
//   section: {marginBottom: 30},
//   sectionTitle: {fontSize: 20, fontWeight: '600', marginBottom: 15},
//   campaignCard: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 15,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   campaignText: {flex: 1},
//   campaignCategory: {color: '#888', fontSize: 12, fontWeight: 'bold'},
//   campaignTitle: {fontSize: 18, fontWeight: 'bold', marginVertical: 5},
//   campaignApps: {color: '#555'},
//   viewButton: {
//     backgroundColor: '#F0F0F0',
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     alignSelf: 'flex-start',
//     marginTop: 10,
//   },
//   viewButtonText: {fontWeight: 'bold'},
//   campaignImage: {width: 100, height: 100, borderRadius: 10},
//   applicantCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   applicantImage: {width: 50, height: 50, borderRadius: 25, marginRight: 15},
//   applicantName: {fontSize: 16, fontWeight: 'bold'},
//   applicantFollowers: {color: '#666'},
//   insightsGrid: {flexDirection: 'row', justifyContent: 'space-between'},
//   insightBox: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//     width: '48%',
//   },
//   insightNumber: {fontSize: 24, fontWeight: 'bold'},
//   insightLabel: {color: '#666', marginTop: 5},
// });

// export default CampaignsScreen;


import { View, Text } from 'react-native'
import React from 'react'

const CampaignsScreen = () => {
  return (
    <View>
      <Text>CampaignsScreen</Text>
    </View>
  )
}

export default CampaignsScreen
