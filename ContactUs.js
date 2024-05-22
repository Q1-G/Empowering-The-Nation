import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { WebView } from 'react-native-webview';

const ContactUs = () => {
    const [selected, setSelected] = useState("");
    const [address, setAddress] = useState("");

    const data = [
        { key: '1', value: 'Rosebank', phone: '011 931 0333', address: '123 Main Road, Rosebank, 7700', email: 'Info@EmpoweringTheNationRosebank.co.za' },
        { key: '2', value: 'Alberton', phone: '011 546 2159', address: '20 Lever Street, Alberton, 2154.', email: 'Info@EmpoweringTheNationAlberton.co.za' },
        { key: '3', value: 'Midrand', phone: '011 627 2432', address: '154 Allandale Road, Midrand, 4073.', email: 'Info@EmpoweringTheNationMidrand.co.za' },
        
    ];

    const handleSelect = (val) => {
        setSelected(val);
        const selectedData = data.find(item => item.value === val);
        setAddress(selectedData ? formatAddress(selectedData) : "");
    };

    const formatAddress = (data) => {
        return `Phone number: ${data.phone}\n\nAddress: ${data.address}\n\nEmail: ${data.email}`;
    };

    return (

            

        <View style={styles.container}>
            <View style={styles.textContainer}>
                 <Text style={styles.text}>Contact us</Text>
            </View>
            <SelectList 
                setSelected={handleSelect} 
                data={data} 
                save="value"
                placeholder="Select a location"
                boxStyles={styles.selectBox} 
                dropdownStyles={styles.dropdown} 
                dropdownTextStyles={styles.dropdownText} 
            />
            {address !== "" && (
                <Text style={styles.address}>{address}</Text>
            )}
            <View style={styles.mapContainer}>
                <WebView
                    source={{ uri: 'https://www.google.com/maps/d/embed?mid=1UfBwMu47INh-_xmNGtj79z1y0_mRpFQ&ehbc=2E312F&noprof=1' }}
                    style={styles.mapContent}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: "#313B74",
    },
    textContainer: {
        justifyContent: "flex-start",
        backgroundColor: "#ffff",
        padding: 10,
        width: "100%",
        
    },
    text: {
        fontSize: 20,
        fontWeight: "normal",
        marginTop: 4,
        marginBottom: 16,
        backgroundColor: "#313B74",
        color: "#fff",
        marginRight: 290,
        marginLeft: 0,
        paddingLeft: 130,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    selectBox: {
        borderColor: '#525C91',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        backgroundColor: "#525C91",
        color: "#fff"
    },
    dropdown: {
        borderColor: '#525C91',
        borderWidth: 1,
        backgroundColor: "#313B74",
    },
    dropdownText: {
        fontSize: 16,
        color: "#fff",
    },
    address: {
        marginTop: 20,
        fontSize: 22,
        color: "#ffff",
        backgroundColor: "#525C91",
        padding: 10,
        borderRadius: 5,
        borderColor: "#313B74",
        borderWidth: 1,
        width:"100%",
        height: 250,
    },
    mapContainer: {
        width: '100%',
        height: 400,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#313B74",
    },
    mapContent: {
        flex: 1,
        backgroundColor: '#fff', 
    },
});

export default ContactUs;