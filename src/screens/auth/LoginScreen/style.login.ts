import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  content: {flex: 1, justifyContent: 'center', paddingHorizontal: 20},
  brand: {
    fontSize: 18,
    color: Colors.gray,
    textAlign: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.darkGray,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.mediumGray,
    textAlign: 'center',
    marginBottom: 40,
  },
  //btn--
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  influencerButton: {
    backgroundColor: Colors.lightGray,
  },
  influencerButtonText: {
    color: Colors.darkGray,
  },
  orText: {
    color: Colors.gray,
    marginVertical: 20,
    textAlign: 'center',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialButton: {
    width: '48%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
  },
  socialButtonText: {
    color: Colors.darkGray,
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInText: {
    marginTop: 30,
    color: Colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
