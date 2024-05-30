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

const FirstAidScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.monthContainer}>
          <Text style={styles.monthText}>6 Month Courses </Text>
        </View>
        <View style={styles.courseTypeContainer}>
          <Text style={styles.typeText}>First Aid</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>
          Fees: R1500 {'\n\n'}
            Purpose: To provide first aid awareness and basic life support {'\n\n'}
            Content: {'\n'}
            • Wounds and bleeding {'\n'}
            • Burns and fractures {'\n'}
            • Emergency scene management {'\n'}
            • Cardio-Pulmonary Resuscitation (CPR) {'\n'}
            • Respiratory distress e.g., Choking, blocked airway
          </Text>
           <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.button} onPress={() => navigation.jumpTo("Calculator")} >
  <Text style={styles.buttonText}>Add To Quote</Text>
</TouchableOpacity>
        </View>
        </View>

       
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
      },
    

  monthContainer: {
    backgroundColor: '#313b74',
    width: '40%',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
  },
  monthText: {
    color: 'white',
    fontWeight: 'bold',
    left: '20%',
  },

  courseTypeContainer: {
    backgroundColor: '#313b74',
    width: '100%',
    alignSelf: 'center',
    padding: 20,
  },

  typeText: {
    
    color: '#f0f1f5',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
 
  detailsContainer: {
    backgroundColor: '#6580cf',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
   detailsText: {
   color: 'white',
   fontSize: 16,
   marginBottom: 20,
},

  buttonContainer: {
    width: '100%',
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#6B46C1',
   padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FirstAidScreen;
