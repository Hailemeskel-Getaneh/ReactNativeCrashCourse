import { StyleSheet, Platform } from 'react-native';
import { Text, View, ScrollView, Image } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Explore</Text>
      </View>

      <Text style={styles.infoText}>This app includes example code to help you get started.</Text>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>File-based routing</Text>
        <Text style={styles.sectionText}>
          This app has two screens: <Text style={styles.bold}>app/(tabs)/index.tsx</Text> and{' '}
          <Text style={styles.bold}>app/(tabs)/explore.tsx</Text>.
        </Text>
        <Text style={styles.sectionText}>
          The layout file in <Text style={styles.bold}>app/(tabs)/_layout.tsx</Text> sets up the tab navigator.
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Images</Text>
        <Text style={styles.sectionText}>
          For static images, you can use the <Text style={styles.bold}>@2x</Text> and <Text style={styles.bold}>@3x</Text>{' '}
          suffixes to provide files for different screen densities.
        </Text>
        <Image source={require('../../assets/images/react-logo.png')} style={styles.image} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Light and dark mode components</Text>
        <Text style={styles.sectionText}>
          This template has light and dark mode support. The{' '}
          <Text style={styles.bold}>useColorScheme()</Text> hook lets you inspect what the user's
          current color scheme is, and so you can adjust UI colors accordingly.
        </Text>
      </View>

      {Platform.select({
        ios: (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Animations</Text>
            <Text style={styles.sectionText}>
              This template includes an example of an animated component for iOS.
            </Text>
          </View>
        ),
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 16,
  },
});
