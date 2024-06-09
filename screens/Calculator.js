import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useCourseSelections} from '../CourseContext';

const CalculatorScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [calculatedTotal, setCalculatedTotal] = useState(null);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [errors, setErrors] = useState({name: '', phone: '', email: ''});

  const navigation = useNavigation();

  const courses = {
    'First Aid': 1500,
    'Sewing': 1500,
    'Landscaping': 1500,
    'Life Skills': 1500,
    'Child Minding': 750,
    'Cooking': 750,
    'Garden Maintenance': 750,
  };

const {getCourses, addSelectedCourse, removeSelectedCourse} = useCourseSelections();
const selectedCourses = getCourses();

  const handleCheckboxChange = course => {
    if (selectedCourses.includes(course)) {
      removeSelectedCourse(course);
    } else {
      addSelectedCourse(course);
    }
  };

  const validateInputs = () => {
    let valid = true;
    let newErrors = {name: '', phone: '', email: ''};

    if (name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (phone.trim() === '') {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = 'Phone number is invalid';
      valid = false;
    }
    if (email.trim() === '') {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const calculateTotal = () => {
    if (!validateInputs()) {
      return;
    }

    let newTotal = 0;
    selectedCourses.forEach(course => {
      newTotal += courses[course];
    });

    let discount = 0;
    if (selectedCourses.length === 2) discount = 0.05;
    else if (selectedCourses.length === 3) discount = 0.1;
    else if (selectedCourses.length > 3) discount = 0.15;

    setDiscountPercentage(discount * 100);

    newTotal = newTotal * (1 - discount);
    const totalWithVAT = newTotal * 1.15;
    setCalculatedTotal(totalWithVAT.toFixed(2));
  };

  const handleContinue = () => {
    if (!validateInputs()) {
      return;
    }

    Alert.alert(
      'Quote',
      `Your quote is R${calculatedTotal}. A consultant will contact you soon.`,
      [
        {
          text: 'OK',
          onPress: () => {
            handleClear();
            navigation.navigate('Home');
          },
        },
      ],
    );
  };

  const handleClear = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSelectedCourses([]);
    setCalculatedTotal(null);
    setDiscountPercentage(0);
    setErrors({name: '', phone: '', email: ''});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.quoteContainer}>
        <Text style={styles.qouteText}>Quote</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Calculate Fees</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.detailsText}>
            Please enter your details to request contact from a consultant.
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          {errors.name ? (
            <Text style={styles.errorText}>{errors.name}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          {errors.phone ? (
            <Text style={styles.errorText}>{errors.phone}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
          <Text style={styles.sectionHeader}>Please Select Courses</Text>
          <View style={styles.courseContainer}>
            <View style={styles.courseSection}>
              <Text style={styles.courseHeader}>6 Month Courses</Text>
              {Object.keys(courses)
                .slice(0, 4)
                .map((course, index) => (
                  <View key={index} style={styles.courseItem}>
                    <CheckBox
                      title={`${course} - R${courses[course]}`}
                      checked={selectedCourses.includes(course)}
                      onPress={() => handleCheckboxChange(course)}
                      checkedColor="#0ADD08"
                      containerStyle={styles.checkboxContainer}
                      textStyle={styles.checkboxText}
                    />
                  </View>
                ))}
            </View>
            <View style={styles.courseSection}>
              <Text style={styles.courseHeader}>6 Week Courses</Text>
              {Object.keys(courses)
                .slice(4)
                .map((course, index) => (
                  <View key={index} style={styles.courseItem}>
                    <CheckBox
                      title={`${course} - R${courses[course]}`}
                      checked={selectedCourses.includes(course)}
                      onPress={() => handleCheckboxChange(course)}
                      checkedColor="#0ADD08"
                      containerStyle={styles.checkboxContainer}
                      textStyle={styles.checkboxText}
                    />
                  </View>
                ))}
            </View>
          </View>
          <View style={styles.totalContainer}>
            <Button
              title="Calculate Total"
              onPress={calculateTotal}
              color={'#525C91'}
            />
            {calculatedTotal !== null && (
              <Text style={styles.totalText}>
                Total Quote: R{calculatedTotal} (inclusive of 15% VAT,{' '}
                {discountPercentage}% discount applied)
              </Text>
            )}
            <View style={styles.buttonContainer}>
              <Button title="Clear" onPress={handleClear} color={'#525C91'} />
              <Button
                title="Continue"
                onPress={handleContinue}
                color={'#525C91'}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  quoteContainer: {
    backgroundColor: '#313b74',
    width: '50%',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
  alignSelf: "flex-start"
  },
  qouteText: {
    color: 'white',
    fontWeight: 'normal',
    left: '30%',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  section: {
    backgroundColor: '#ffff',
    padding: 12,
  },
  header: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'left',
    backgroundColor: '#313B74',
    paddingLeft: 100,
    marginRight: 390,
  },
  subHeader: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    marginLeft: 0,
    backgroundColor: '#313B74',
    paddingTop: 20,
    paddingBottom: 20,
  },
  innerContainer: {
    padding: 20,
    backgroundColor: '#525C91',
  },
  detailsText: {
    color: '#ffff',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ffff',
    backgroundColor: '#ffff',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#ffff',
    textAlign: 'center',
    marginTop: 1,
  },
  courseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  courseSection: {
    flex: 1,
    marginTop: 0,
  },
  courseHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#ffff',
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxContainer: {
    backgroundColor: '#525C91',
    borderWidth: 0,
  },
  checkboxText: {
    color: '#ffffff',
  },
  totalContainer: {
    backgroundColor: '#313B74',
    padding: 20,
    marginTop: 0,
    width: '100%',
  },
  totalText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});

export default CalculatorScreen;
