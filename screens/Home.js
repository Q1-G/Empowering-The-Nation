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
import WeekSumm from './WeekSumm';
import SixMonthSumm from './SixMonthSumm';
import ContactUsScreen from './ContactUs';


const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
     
      <View style={styles.sloganContainer}>
          <Text style={styles.sloganText}>Empowering The Nation strives to empower individuals through skills development.  </Text>
        
        </View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../Assets/homeSixWeek.jpg')}
              style={styles.image}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Six Week Courses')}>
                <Text style={styles.buttonText}>6 Week Courses</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../Assets/homeSixMonth.jpg')}
              style={styles.image}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Six Month Courses")}>
                <Text style={styles.buttonText}>6 Month Courses</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../Assets/homecontact.jpg')}
              style={styles.image}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Contact Us")}>
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
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
  },
  
  sloganContainer: {
    backgroundColor: '#313b74',
    width: '100%',
    padding: 10,
  },
  sloganText: {
    color: 'white',
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    fontStyle: 'italic'

  },

  imageContainer: {
    flex: 1,
    marginRight: 8,
    position: 'relative',
    marginBottom: 50,
  },
 
  image: {
    width: '100%',
    height: 210,
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

export default HomeScreen;
