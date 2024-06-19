
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image, ScrollView
} from 'react-native';

const AboutScreen = ({navigation}) => {
  return (
    <SafeAreaView>
    <ScrollView>
     <View style={styles.bgContainer}>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutText}>About Us </Text>
        </View>
        <View>
          <Image
            source={require('../Assets/TransparentLogo.png')}
            style={{
              resizeMode: 'center',
              height: 140,
              width: '50',
            }}
          />
           <View style={styles.logoTextContainer}>
          <Image
            source={require('../Assets/LogoText.png')}
            style={{
              resizeMode: 'center',
              height: 150,
              width: '50',
            }}
          />
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>
            We are local SME initiated by Precious Radebe, dedicated to
            providing skills training for domestic workers and gardeners in the
            community. {'\n\n'}
            Inspired by the lack of educational opportunities for her
            parents and elderly relatives, Precious aims to empower individuals
            through skills development. Our platform serves as a hub for
            advertising the SME's services, facilitating information requests
            from potential customers, and providing quotes for requested
            services. Through our initiatives, domestic workers and gardeners
            receive valuable training, making them more employable and enabling
            them to command higher wages. {'\n\n'}
            Additionally, they have the
            opportunity to become entrepreneurs and start their own small
            businesses, thus contributing to the economic growth of the
            community. Employers seeking skilled services for household needs
            can also benefit from our platform by upskilling their employees
            through our training programs.
          </Text>
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
 

  bgContainer:{
   backgroundColor: '#99A6E8',
   height: 'auto',
  },

  aboutContainer: {
    backgroundColor: '#313b74',
    width: '40%',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
  },
  aboutText: {
    color: 'white',
    fontWeight: 'bold',
    left: '20%',
  },

  logoTextContainer: {
marginBottom: -50,
  },

  detailsContainer: {
    width: '100%',
    padding: 20,
    alignContent: 'center',
    
  },
  detailsText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
    textAlign: 'justify'
  },
});

export default AboutScreen;
