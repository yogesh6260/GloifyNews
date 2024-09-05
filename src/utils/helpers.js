import firestore from '@react-native-firebase/firestore';
import Crashlytics from '@react-native-firebase/crashlytics';

export const saveUserToFirestore = userData => {
  firestore()
    .collection('Users')
    .add(userData)
    .then(() => {})
    .catch(error => {
      console.log(error);
      Crashlytics().recordError(error);
    });
};

export const loginUser = async credentials => {
  const {email, password} = credentials;

  try {
    const usersRef = firestore().collection('Users');
    const querySnapshot = await usersRef.where('email', '==', email).get();

    if (querySnapshot.empty) {
      console.log('No user found with this email');
      Crashlytics().log('No user found with this email');
      return {error: 'No user found with this email!'};
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    if (userData.password !== password) {
      console.log('Incorrect password');
      Crashlytics().log('Incorrect password');
      return {error: 'Incorrect password!'};
    }

    console.log('User logged in successfully!');
    Crashlytics().log('User logged in successfully!');
    Crashlytics().setAttributes({
      id: userData.uid,
      name: userData.name,
      email: userData.email,
      contact: userData.contact,
    });
    return {data: userData}; // return the user data if login is successful
  } catch (error) {
    console.log(error);
    Crashlytics().recordError(error);
    return {error: error};
  }
};

export const generateQuery = newsTopics => {
  if (newsTopics.length !== 0) {
    const query = newsTopics
      .map(topic => topic.name.replace(/\s+/g, '').replace('&', ''))
      .join(' AND ');

    return query;
  }
};
