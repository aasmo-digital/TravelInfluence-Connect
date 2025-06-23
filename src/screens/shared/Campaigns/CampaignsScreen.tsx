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
// import styles from './campaign.style';
// import {HeaderCompt} from '../../../components';
// import imageIndex from '../../../assets/images/imageIndex';

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
//         <HeaderCompt title="Campaign" leftIcon={imageIndex.back} />
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

// export default CampaignsScreen;

import {View, Text} from 'react-native';
import React from 'react';

const CampaignsScreen = () => {
  return (
    <View>
      <Text>CampaignsScreen</Text>
    </View>
  );
};

export default CampaignsScreen;
