import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,TextFile } from "react-native";
import './practice'


// const App = () => {
//   const [displayValue, setDisplaying] = useState("");

//   const [message,setMessage]=useState('')
//   const handleClick =()=>{
//     setMessage('Hello raj')
//   }


//   const calculateValue = () => {
//     const trimmed = displayValue.trim();
//     if (!trimmed) return;
//     try {
//       const result = eval(trimmed);
//       if (result === Infinity || result === -Infinity || Number.isNaN(result)) {
//         setDisplaying("Error");
//         return;
//       }
//       setDisplaying(String(result));
//     } catch {
//       setDisplaying("Error");
//     }
//   };

//   return (
//     <View style={Styles.container}>
//       <Text style={Styles.headingText}>Calculator RAJ</Text>

//       <TextInput
//         value={displayValue}
//         style={Styles.display}
//         editable={false}
//         placeholder="0"
//       />

//       <View style={Styles.btnRow}>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "7")} style={Styles.btn}>
//           <Text style={Styles.btnText}>7</Text>
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "8")} style={Styles.btn}>
//           <Text style={Styles.btnText}>8</Text>
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "9")} style={Styles.btn}>
//           <Text style={Styles.btnText}>9</Text>
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "+")} style={Styles.btnOperator}>
//           <Text style={Styles.btnOperatorText}>+</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={Styles.btnRow}>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "4")} style={Styles.btn}>
//           <Text style={Styles.btnText}>4</Text>
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "5")} style={Styles.btn}>
//           <Text style={Styles.btnText}>5</Text>
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "6")} style={Styles.btn}>
//           <Text style={Styles.btnText}>6</Text>
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "-")} style={Styles.btnOperator}>
//           <Text style={Styles.btnOperatorText}>−</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={Styles.btnRow}>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "1")} style={Styles.btn}>
//           <Text style={Styles.btnText}>1</Text>
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "2")} style={Styles.btn}>
//           <Text style={Styles.btnText}>2</Text>
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "3")} style={Styles.btn}>
//           <Text style={Styles.btnText}>3</Text>
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "*")} style={Styles.btnOperator}>
//           <Text style={Styles.btnOperatorText}>×</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={Styles.btnRow}>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying("")} style={Styles.btnClear}>
//           <Text style={Styles.btnClearText}>C</Text>
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "0")} style={Styles.btn}>
//           <Text style={Styles.btnText}>0</Text>
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + ".")} style={Styles.btn}>
//           <Text style={Styles.btnText}>.</Text>
//         </TouchableOpacity>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => setDisplaying(displayValue + "/")} style={Styles.btnOperator}>
//           <Text style={Styles.btnOperatorText}>/</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={Styles.equalsRow}>
//         <TouchableOpacity activeOpacity={0.7} onPress={calculateValue} style={Styles.btnEquals}>
//           <Text style={Styles.btnEqualsText}>=</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity onPress={handleClick}>

//         <Text style={{color:'white',margin:8,backgroundColor:'red'}}>Click me </Text>
//       </TouchableOpacity>
//       <Text>{message}</Text>
//     </View>
//   );

// }
// export default App;

// const Styles = StyleSheet.create({
//   container: {
//     height:600,
//     marginTop: 40,
//     marginHorizontal: 16,
//     marginBottom: 24,
//     padding: 20,
//     backgroundColor: "#2d3748",
//     borderRadius: 16,
//     borderWidth: 2,
//     borderColor: "#1a202c",
//   },
//   headingText: {
//     marginTop: 8,
//     marginBottom: 16,
//     fontSize: 24,
//     fontStyle: "italic",
//     fontWeight: "bold",
//     color: "#e2e8f0",
//     alignSelf: "center",
//   },
//   display: {
//     backgroundColor: "#1a202c",
//     borderWidth: 2,
//     borderColor: "#4a5568",
//     borderRadius: 12,
//     height: 72,
//     marginBottom: 20,
//     paddingHorizontal: 16,
//     fontSize: 32,
//     color: "#f7fafc",
//     textAlign: "right",
//   },
//   btnRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 12,
//     gap: 12,
//   },
//   btn: {
//     flex: 1,
//     height: 64,
//     backgroundColor: "#e2e8f0",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 12,
//     minWidth: 64,
//   },
//   btnText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#2d3748",
//   },
//   btnOperator: {
//     flex: 1,
//     height: 64,
//     backgroundColor: "#4a5568",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 12,
//     minWidth: 64,
//   },
//   btnOperatorText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#f7fafc",
//   },
//   btnClear: {
//     flex: 1,
//     height: 64,
//     backgroundColor: "#c53030",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 12,
//     minWidth: 64,
//   },
//   btnClearText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   btnEquals: {
//     height: 56,
//     backgroundColor: "#3182ce",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 12,
//     marginTop: 4,
//   },
//   btnEqualsText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   equalsRow: {
//     marginBottom: 8,
//   },
// });

const App=()=>{



const[Evenodd,setEvenodd]=useState(' ')
const[InputEvenodd,setInputEvenodd]=useState('')

const clicks=()=>{

const result= InputEvenodd

if(result%2==0){
  setEvenodd("Even number")
}else{
  setEvenodd("odd Number")
}
}


return(
<View style={{marginTop:50}}>

<TextInput  onChangeText={setInputEvenodd} style={Styles.textinputdesion}placeholder="Enter a Name "></TextInput>

  

  <TouchableOpacity onPress={clicks} style={Styles.ButtonDesion}>
    <Text style={{color:'white',fontSize:20, fontWeight:'bold',alignSelf:'center',}}>Click me</Text>
  </TouchableOpacity>

  <Text style={{alignSelf:'center'}}>{Evenodd}</Text>
  
 
  



</View>

)

}
export default App;

const Styles=StyleSheet.create({
ButtonDesion:{
backgroundColor:'blue',
margin:8,
padding:8,
borderRadius:5,
height:50,
},
textinputdesion:{
backgroundColor:"#f5f5f5",
margin:8,
},
box:{
  marginTop:20,
 width:200,
 alignSelf:'center',
 height:20,
 backgroundColor:'black'
}

})