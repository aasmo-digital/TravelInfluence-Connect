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
// import Icon from 'react-native-vector-icons/Ionicons';

// const HotelProfile = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         {/* Header Image */}
//         <Image
//           style={styles.headerImage}
//           source={{
//             uri: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//           }}
//         />
//         {/* Profile Info Section */}
//         <View style={styles.profileInfoSection}>
//           <Image
//             style={styles.profileLogo}
//             source={{
//               uri: 'https://cdn.dribbble.com/users/1061278/screenshots/14603360/media/c8272ea89eb6a33728373a62854c86e6.jpg?compress=1&resize=400x300',
//             }}
//           />
//           <Text style={styles.hotelName}>The Grand Budapest Hotel</Text>
//           <Text style={styles.hotelLocation}>Budapest, Hungary</Text>
//           <TouchableOpacity style={styles.editButton}>
//             <Text style={styles.editButtonText}>Edit Profile</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.content}>
//           {/* About Section */}
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>About The Hotel</Text>
//             <Text style={styles.cardText}>
//               A world-renowned hotel known for its luxurious accommodations and
//               impeccable service. A perfect spot for travel and lifestyle
//               creators.
//             </Text>
//           </View>

//           {/* Collaboration Criteria Section */}
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>Our Collaboration Criteria</Text>
//             <View style={styles.criteriaItem}>
//               <Icon name="people-outline" size={22} color="#555" />
//               <Text style={styles.criteriaText}>Min. 100k Followers</Text>
//             </View>
//             <View style={styles.criteriaItem}>
//               <Icon name="camera-outline" size={22} color="#555" />
//               <Text style={styles.criteriaText}>
//                 Must be a Travel/Lifestyle Vlogger
//               </Text>
//             </View>
//             <View style={styles.criteriaItem}>
//               <Icon name="film-outline" size={22} color="#555" />
//               <Text style={styles.criteriaText}>
//                 Deliverable: 1 Reel + 3 Stories
//               </Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, backgroundColor: '#F8F9FA'},
//   headerImage: {width: '100%', height: 200},
//   profileInfoSection: {alignItems: 'center', marginTop: -75}, // Negative margin to pull it up
//   profileLogo: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     borderWidth: 4,
//     borderColor: 'white',
//   },
//   hotelName: {
//     fontSize: 24,
//     fontFamily: 'Poppins-Bold',
//     color: '#111',
//     marginTop: 10,
//   },
//   hotelLocation: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#666'},
//   editButton: {
//     marginTop: 15,
//     backgroundColor: '#007BFF',
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//   },
//   editButtonText: {
//     color: 'white',
//     fontFamily: 'Poppins-SemiBold',
//     fontSize: 14,
//   },
//   content: {padding: 20, marginTop: 10},
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 20,
//     marginBottom: 20,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontFamily: 'Poppins-SemiBold',
//     color: '#333',
//     marginBottom: 15,
//   },
//   cardText: {
//     fontSize: 14,
//     fontFamily: 'Poppins-Regular',
//     color: '#555',
//     lineHeight: 22,
//   },
//   criteriaItem: {flexDirection: 'row', alignItems: 'center', marginBottom: 12},
//   criteriaText: {
//     fontSize: 14,
//     fontFamily: 'Poppins-Regular',
//     color: '#555',
//     marginLeft: 10,
//   },
// });

// export default HotelProfile;


import { View, Text } from 'react-native'
import React from 'react'

const HotelProfile = () => {
  return (
    <View>
      <Text>HotelProfile</Text>
    </View>
  )
}

export default HotelProfile