import React, { useContext } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCourseSelections } from '../CourseContext'; 

const LifeSkillsScreen = () => {
  const navigation = useNavigation();
  const { addSelectedCourse, getCourses } = useCourseSelections(); 

  const addCourseAndNavigate = () => {
    addSelectedCourse("Life Skills"); 
    Alert.alert("Course added!");
    navigation.navigate("Calculator");
  };

    return (
        <SafeAreaView>
          <ScrollView>
            <View style={styles.monthContainer}>
              <Text style={styles.monthText}>6 Month Courses </Text>
            </View>
            <View style={styles.courseTypeContainer}>
              <Text style={styles.typeText}>Life Skills</Text>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>
              Fees: R1500 {'\n\n'}
                Purpose:  To provide skills to navigate basic life necessities {'\n\n'}
                Content: {'\n'}
                • Opening a bank account{'\n'}
                • Basic labour law (know your rights){'\n'}
                • Basic reading and writing literacy {'\n'}
                • Basic numeric literacy
              </Text>
               <View style={styles.buttonContainer}>
               <TouchableOpacity style={styles.button} onPress={addCourseAndNavigate}>
               <Text style={styles.buttonText}>Add To Quote</Text>
               </TouchableOpacity>
            </View>
            <View>
           <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Six Month Courses")}}>
  <Text style={styles.buttonText}>Go Back</Text>
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
        backgroundColor: '#525C91',
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
        backgroundColor: '#313b74',
       padding: 10,
        borderRadius: 8,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
    });

export default LifeSkillsScreen;