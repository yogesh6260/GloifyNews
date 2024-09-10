import firestore from '@react-native-firebase/firestore';
import Crashlytics from '@react-native-firebase/crashlytics';

// register user to firestore
export const saveUserToFirestore = userData => {
  firestore()
    .collection('Users')
    .add(userData)
    .then(() => {})
    .catch(error => {
      Crashlytics().recordError(error);
    });
};

// login user using firestore check
export const loginUser = async credentials => {
  const {email, password} = credentials;

  try {
    const usersRef = firestore().collection('Users');
    const querySnapshot = await usersRef.where('email', '==', email).get();

    if (querySnapshot.empty) {
      Crashlytics().log('No user found with this email');
      return {error: 'No user found with this email!'};
    }

    const userDoc = querySnapshot.docs[0];

    const userId = userDoc.id;
    const userData = userDoc.data();

    if (userData.password !== password) {
      Crashlytics().log('Incorrect password');
      return {error: 'Incorrect password!'};
    }

    Crashlytics().log('User logged in successfully!');
    Crashlytics().setAttributes({
      id: userId,
      name: userData.name,
      email: userData.email,
      contact: userData.contact,
    });
    return {data: {...userData, id: userId}}; // return the user data if login is successful
  } catch (error) {
    Crashlytics().recordError(error);
    return {error: error};
  }
};

// generate query to fetch news updates
export const generateQuery = newsTopics => {
  if (newsTopics.length !== 0) {
    const query = newsTopics
      .map(topic => topic.name.replace(/\s+/g, '').replace('&', ''))
      .join(' AND ');

    return query;
  }
};

// Add user reaction to Firestore
export const addUserReactionToFirestore = async (
  reaction,
  userId,
  newsCardId,
) => {
  const reactionRef = firestore()
    .collection('news')
    .doc(newsCardId)
    .collection('reactions')
    .doc(reaction);

  try {
    const reactionDoc = await reactionRef.get();

    if (reactionDoc.exists) {
      await reactionRef.update({
        count: firestore.FieldValue.increment(1),
        [`users.${userId}`]: true,
      });
    } else {
      await reactionRef.set({
        count: 1,
        users: {
          [userId]: true,
        },
      });
    }
  } catch (error) {
    console.error('Failed to add reaction:', error);
    Crashlytics().recordError(error);
  }
};

// Remove user reaction from Firestore
export const removeUserReactionFromFirestore = async (
  reaction,
  userId,
  newsCardId,
) => {
  const reactionRef = firestore()
    .collection('news')
    .doc(newsCardId)
    .collection('reactions')
    .doc(reaction);

  try {
    await reactionRef.update({
      count: firestore.FieldValue.increment(-1),
      [`users.${userId}`]: firestore.FieldValue.delete(),
    });
  } catch (error) {
    console.error('Failed to remove reaction:', error);
    Crashlytics().recordError(error);
  }
};

// Get user reactions from firestore.
export const getReactionsFromFirestore = async newsCardId => {
  try {
    const reactionsSnapshot = await firestore()
      .collection('news')
      .doc(newsCardId)
      .collection('reactions')
      .get();

    if (!reactionsSnapshot.empty) {
      let reactions = {};
      reactionsSnapshot.forEach(doc => {
        reactions[doc.id] = doc.data().count;
      });
      return reactions;
    }
    return {};
  } catch (error) {
    console.error('Failed to get reactions:', error);
    Crashlytics().recordError(error);
    return {};
  }
};
