import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants';

// Styles...
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F8F9FA'},
  content: {padding: 0,backgroundColor:Colors?.white},
  section: {marginBottom: 30, width: '90%', alignSelf: 'center'},
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: Colors?.black,
  },
  campaignCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  campaignText: {flex: 1},
  campaignCategory: {color: '#888', fontSize: 12, fontWeight: 'bold'},
  campaignTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: Colors.black,
  },
  campaignApps: {color: '#555'},
  viewButton: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  viewButtonText: {fontWeight: 'bold', color: Colors?.black},
  campaignImage: {width: 100, height: 100, borderRadius: 10},
  applicantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  applicantImage: {width: 50, height: 50, borderRadius: 25, marginRight: 15},
  applicantName: {fontSize: 16, fontWeight: 'bold', color: Colors?.black},
  applicantFollowers: {color: '#666'},
  insightsGrid: {flexDirection: 'row', justifyContent: 'space-between'},
  insightBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  insightNumber: {fontSize: 24, fontWeight: 'bold', color: Colors.black},
  insightLabel: {color: '#666', marginTop: 5},
});

export default styles;
