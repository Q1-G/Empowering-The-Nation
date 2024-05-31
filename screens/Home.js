<<<<<<< HEAD
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';



const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.logocontainer}>
            <Image
              source={require('../assets/TransparentLogo.png')}
              style={{
                resizeMode: 'center',
          height: 150,
          width: '50',
          margin: 10,
  }}
            />
        </View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/homeSixWeek.jpg')}
              style={styles.image}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('WeekSummary')}>
                <Text style={styles.buttonText}>6 Week Courses</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/homeSixMonth.jpg')}
              style={styles.image}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('MonthCourses')}>
                <Text style={styles.buttonText}>6 Month Courses</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/homecontact.jpg')}
              style={styles.image}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ContactUs')}>
                <Text style={styles.buttonText}>Contact Us</Text>
              </TouchableOpacity>
          </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 32,
  },
  
  imageContainer: {
    flex: 1,
    marginRight: 8,
    position: 'relative',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
 
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    top: '75%',
    transform: [{ translateY: -20 }],
  },
  button: {
    backgroundColor: '#313b74',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 2,
    width: 240,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    left: '50%',

  },
});

=======
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';



const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.logocontainer}>
            <Image
              source={require('../assets/TransparentLogo.png')}
              style={{
                resizeMode: 'center',
          height: 150,
          width: '50',
          margin: 10,
  }}
            />
        </View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/homeSixWeek.jpg')}
              style={styles.image}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('WeekSummary')}>
                <Text style={styles.buttonText}>6 Week Courses</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/homeSixMonth.jpg')}
              style={styles.image}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('MonthCourses')}>
                <Text style={styles.buttonText}>6 Month Courses</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/homecontact.jpg')}
              style={styles.image}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ContactUs')}>
                <Text style={styles.buttonText}>Contact Us</Text>
              </TouchableOpacity>
          </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 32,
  },
  
  imageContainer: {
    flex: 1,
    marginRight: 8,
    position: 'relative',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
 
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    top: '75%',
    transform: [{ translateY: -20 }],
  },
  button: {
    backgroundColor: '#313b74',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 2,
    width: 240,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    left: '50%',

  },
});

>>>>>>> d816f48 (Test Commit)
export default HomeScreen;