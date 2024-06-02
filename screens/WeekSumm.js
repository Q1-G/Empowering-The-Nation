import { View, Text, StyleSheet, Button } from "react-native";

const WeekSumm = ({ navigation }) => {
    return (
        <View style={styles.container}>
             <View style={styles.weekContainer}>
              <Text style={styles.weekText}>6 Week Courses </Text>
            </View>
             <View style={styles.buttonContainer}>
                 <View style={styles.buttonWrapper}>
                     <Button title="Child Minding" onPress={() => navigation.jumpTo("Child Minding")} color="#525C91" />
                 </View>
                 <View style={styles.buttonSpacer} />
                 <View style={styles.buttonWrapper}>
                     <Button title="Cooking" onPress={() => navigation.jumpTo("Cooking")} color="#525C91" />
                 </View>
                 <View style={styles.buttonSpacer} />
                 <View style={styles.buttonWrapper}>
                     <Button title="Garden Maintenance" onPress={() => navigation.jumpTo("GardenMaintenance")} color="#525C91" />
                 </View>
             </View>
         </View>
    );
};

const styles = StyleSheet.create({
    weekContainer: {
        backgroundColor: '#313b74',
        width: '50%',
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
      alignSelf: "flex-start"
      },
      weekText: {
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

export default WeekSumm;