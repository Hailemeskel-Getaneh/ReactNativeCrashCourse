import React from 'react';
import {
  Text, ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import Greeting from '../components/Greeting';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ForTrying from '../components/ForTrying';
import Profile from '../components/Profile';
import UserInput from '../components/UserInput';
import CounterApp from '../components/CounterApp'
import LoginPage from '../components/LoginPage';
import Props from '../components/Props';
import ToggleSwitchApp from '../components/PropsandStates';

export default function App() {
  const handleLearnMore = () => {
    Alert.alert(
      'React Native Course',
      'We have started our exciting React Native journey! Stay tuned for amazing lessons ahead.',
      [{ text: 'donkey', onPress: () => console.log('Alert closed') }]
    );
  };

  const handleLogin = () => {
    Alert.alert('Login successful', [{ text: 'ok', onPress: () => console.log('login successful') }]);
  };

  const handleStartLesson = () => {
    Alert.alert('Lesson Started', 'Your first lesson is ready. Dive in now!', [
      { text: 'Go!', onPress: () => console.log('Lesson started') },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require('../assets/images/backgroundImage.jpg')}
        style={styles.backgroundImage}
      >
        {/* <Greeting/> */}
        <Header />
        <Image
          source={require('../assets/images/welcomeImage.jpg')}
          style={styles.image}
        />
        <Profile />

        <Text style={styles.heading}>Welcome to React Native Crash course!</Text>
        <Text style={styles.subheading}>Our Journey Starts Here </Text>

        <TouchableOpacity style={styles.button} onPress={handleLearnMore}>
          <Text style={styles.buttonText}>Register </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.startButton]}
          onPress={handleStartLesson}
        >
          <Text style={styles.buttonText}>Start Lesson</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>What is React Native?</Text>
          <Text style={styles.cardText}>
            React Native is a framework for building native apps using React.
            Write your code once and deploy it across iOS and Android!
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Course Highlights</Text>
          <Text style={styles.cardText}>✨ Interactive Lessons</Text>
          <Text style={styles.cardText}>✨ Hands-on Projects</Text>
          <Text style={styles.cardText}>✨ Build Your First App</Text>
        </View>

        <ForTrying />
        <UserInput />
        <CounterApp />
        <LoginPage />
        <Props name={'Haile'} />
        <ToggleSwitchApp />
      </ImageBackground>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
  },
  backgroundImage: {
    flex: 1, // Ensure the image takes up the entire screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    width: '100%', // Ensure it takes up the full width
    height: '100%', // Ensure it takes up the full height
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  subheading: {
    fontSize: 18,
    color: '#666',
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  startButton: {
    backgroundColor: '#007BFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 1,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});
