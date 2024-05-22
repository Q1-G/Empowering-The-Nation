import { View, Text, StyleSheet, Button } from "react-native";

const SixMonthCourses = ({ navigation }) => {
    return (
        <View style={styles.container}>
             <Text style={styles.text}>Six month courses</Text>
             <View style={styles.buttonContainer}>
                 <View style={styles.buttonWrapper}>
                     <Button title="First Aid" onPress={() => navigation.jumpTo("FirstAidScreen")} color="#525C91" />
                 </View>
                 <View style={styles.buttonSpacer} />
                 <View style={styles.buttonWrapper}>
                     <Button title="Sewing" onPress={() => navigation.jumpTo("SewingScreen")} color="#525C91" />
                 </View>
                 <View style={styles.buttonSpacer} />
                 <View style={styles.buttonWrapper}>
                     <Button title="Landscaping" onPress={() => navigation.jumpTo("LandscapingScreen")} color="#525C91" />
                 </View>
                 <View style={styles.buttonSpacer} />
                 <View style={styles.buttonWrapper}>
                     <Button title="Life Skills" onPress={() => navigation.jumpTo("LifeSkillsScreen")} color="#525C91" />
                 </View>
             </View>
         </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    text: {
        fontSize: 20,
        fontWeight: "normal",
        marginTop: 50,
        marginBottom: 16,
        backgroundColor: "#313B74",
        color: "#ffff",
        marginRight: 315,
        paddingLeft: 110,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
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

export default SixMonthCourses;