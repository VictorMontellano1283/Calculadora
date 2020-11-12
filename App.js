import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, YellowBox, Button} from 'react-native';
import Forms from "./src/components/Forms"; 
import Footer from "./src/components/Footer";

YellowBox.ignoreWarnings(['Picker has been extracted']);

export default function App() {
  const [primernumero, setprimernumero]= useState(null);
  const [segundonumero, setsegundonumero] = useState(null);
  const [operacion, setOperacion] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if(primernumero && segundonumero && operacion)calculate();
    else reset();

  }, [primernumero, segundonumero, operacion])

  const calculate=() =>{
    reset();
    if(!primernumero){
      setError("Añade la primer cantidad");
    }else if(!segundonumero){
      setError("Añade la segunda cantidad");
    }else if(!operacion){
      setError("Selecciona la operacion ");
    }else{
      
      if (operacion == "suma"){
         const i = (primernumero + segundonumero);
         
         setTotal({
            res: i,
          })
      }else if(operacion == "resta"){
       const  i = (primernumero - segundonumero);
      
       setTotal({
          res: i,
        })
      }else if(operacion == "multiplicacion"){
       const i = (primernumero * segundonumero);
       setTotal({
            res: i,
        })
      }else if(operacion == "division"){
       const i = (primernumero / segundonumero);

       setTotal({
            res: i,
         })
      }
    }

  }
  function reset() {
    setErrorMessage("");
    setTotal(null);
  }

  return (
    <>
      <StatusBar barStyle="light-content"/>
        <SafeAreaView style={[styles.safeArea, styles.content]}>
          <View style={styles.background}/>
          <Text style={styles.titleApp}>Calculadora</Text>
          <Forms 
            setprimernumero={setprimernumero}
            setsegundonumero={setsegundonumero}
            setOperacion={setOperacion}
          />
          <Result
            primernumero={primernumero}
            segundonumero={segundonumero}
            operacion={operacion}
            total={total} 
            errorMessage={errorMessage}
          />
        </SafeAreaView>
        
        <Footer calculate={calculate}/>
      </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    height: 290,
    alignItems: 'center',
  },

  background:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  
  titleApp:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  }


})