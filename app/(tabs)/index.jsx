import { Image, StyleSheet, Platform } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.scrollView}
    >
      <Image
        source={require('../../assets/images/partial-react-logo.png')}
        style={styles.reactLogo}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome!</Text>
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.subtitle}>Step 1: Try it</Text>
        <Text>
          Edit <Text style={styles.bold}>app/(tabs)/index.jsx</Text> to see changes. Press{' '}
          <Text style={styles.bold}>
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </Text>{' '}
          to open developer tools.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.subtitle}>Step 2: Explore</Text>
        <Text>
          Tap the Explore tab to learn more about what's included in this starter app.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.subtitle}>Step 3: Get a fresh start</Text>
        <Text>
          When you're ready, run <Text style={styles.bold}>npm run reset-project</Text> to get a
          fresh <Text style={styles.bold}>app</Text> directory. This will move the current{' '}
          <Text style={styles.bold}>app</Text> to <Text style={styles.bold}>app-example</Text>.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  stepContainer: {
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  reactLogo: {
    height: 178,
    width: 290,
    marginBottom: 16,
  },
});
