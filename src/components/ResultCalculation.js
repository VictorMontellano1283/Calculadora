import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ResultCalculation(props) {
    const{primernumero, segundonumero, operacion, total, ErrorMessage}=props;
    console.log(props);
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxContent}>
                    <Text style={styles.title}>Resumen</Text>
                    <DataResult title={"primernumero:"} value={`$ ${primernumero}`}/>
                    <DataResult title={"segundonumero:"} value={`${segundonumero}%`}/>
                    <DataResult title={"Operacion seleccionada:"} value={`${operacion} `}/>
                    <DataResult title={"Resultado total:"} value={`$ ${total.res}`}/>
                    </View>
            )
            }
            <View>
    <Text style={styles.error}>{ErrorMessage}</Text>
            </View>
        </View>
    )
}

function DataResult (props){
    const {title, value}=props
    return(
        <View >
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error:{
        textAlign: "center",
        color: "#f00",
        fontWeight: "bold",
        fontSize: 20,
    },
    content:{
        marginTop: 10,
        marginHorizontal: 40,
    },
    boxContent:{
        padding: 30,
    },

    title:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
    },

    value:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    }
})