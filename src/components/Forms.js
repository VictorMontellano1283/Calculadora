import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from "../utils/colors";
import RNPickerSelect from 'react-native-picker-select';


export default function Forms(props){
    const {setprimernumero, setsegundonumero, setOperacion} = props;

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput placeholder="" keyboardType="numeric" 
                style={styles.input} onChange={e=> setprimernumero(e.nativeEvent.text)}></TextInput>
                <TextInput placeholder="" keyboardType="numeric" 
                style={[styles.input, styles.inputPorcentaje]} onChange={e=> setsegundonumero(e.nativeEvent.text)}></TextInput>
            </View>
            <RNPickerSelect style={pickerSelectStyles}
                placeholder={{
                    label: "Operacion a realizar",
                    value: null,
                    color: "Blue",
                }}
                useNativeAndroidPickerStyle={false}
                onValueChange={(value) => setOperacion(value)}
                items={[
                    { label: 'Sumar', value:  "suma" },
                    { label: 'Restar', value: "resta" },
                    { label: 'Multiplicacar', value: "multiplicacion" },
                    { label: 'Dividir', value: "division" },
                ]}
             />
        </View>
    );
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: "Blue",
        paddingRight: 30,
        backgroundColor: "#fff",
    },

    inputAndroid:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff",
    }
});

const styles = StyleSheet.create({
    viewForm:{
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent:"center",
    },

    viewInputs:{
        flexDirection: "row",
    },

    input:{
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginTop: 10,
        color: "#000",
        paddingHorizontal: 20,
    },

    inputPorcentaje:{
        width: "40%",
        marginLeft: 5,
    }

});