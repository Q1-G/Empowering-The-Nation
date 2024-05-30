import { View, Text, StyleSheet, Button } from "react-native";

const SixMonthSumm = ({ navigation }) => {
    return (
        <View style={styles.container}>
             <View style={styles.monthContainer}>
              <Text style={styles.monthText}>6 Month Courses </Text>
            </View>
             <View style={styles.buttonContainer}>
                 <View style={styles.buttonWrapper}>
                     <Button title="First Aid" onPress={() => navigation.navigate("FirstAid")} color="#525C91" />
                 </View>
                 <View style={styles.buttonSpacer} />
                 <View style={styles.buttonWrapper}>
                     <Button title="Sewing" onPress={() => navigation.navigate("Sewing")} color="#525C91" />
                 </View>
                 <View style={styles.buttonSpacer} />
                 <View style={styles.buttonWrapper}>
                     <Button title="Landscaping" onPress={() => navigation.navigate("Landscaping")} color="#525C91" />
                 </View>
                 <View style={styles.buttonSpacer} />
                 <View style={styles.buttonWrapper}>
                     <Button title="Life Skills" onPress={() => navigation.navigate("LifeSkills")} color="#525C91" />
                 </View>
             </View>
         </View>
    );
};

const styles = StyleSheet.create({
     monthContainer: {
        backgroundColor: '#313b74',
        width: '50%',
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
      alignSelf: "flex-start"
      },
      monthText: {
        color: 'white',
        fontWeight: 'normal',
        left: '30%',
      },
   
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    
    buttonContainer: {
        marginTop: 10,
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: 20,
    },
    buttonWrapper: {
        marginBottom: 5, 
        paddingVertical: 40, 
        backgroundColor: "#525C91", 
        borderRadius: 0, 
    },
    buttonSpacer: {
        marginBottom: 10,
    },
});

export default SixMonthSumm;