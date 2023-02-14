import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalcularCurp from "../screens/CalcularCurp";
import Factorial from "../screens/Factorial";
import GradosCC from "../screens/GradosCC";
import Home from "../screens/Home";
import MtsPies from "../screens/MtsPies";
import NumeroN from "../screens/NumeroN";
import NumeroSuerte from "../screens/NumeroSuerte";
import PrecioFinalVenta from "../screens/PrecioFinalVenta";

const Stack = createNativeStackNavigator();

function StackFunction(){
    return(
        <Stack.Navigator
            initialRouteName="home"
        >
            <Stack.Screen name="home" component={Home} 
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="curp" component={CalcularCurp} />
            <Stack.Screen name="factorial" component={Factorial} />
            <Stack.Screen name="grados" component={GradosCC} />
            <Stack.Screen name="metros" component={MtsPies} />
            <Stack.Screen name="numeron" component={NumeroN} />
            <Stack.Screen name="numerosuerte" component={NumeroSuerte} />
            <Stack.Screen name="preciofinal" component={PrecioFinalVenta} />
        </Stack.Navigator>
    );
};

export default StackFunction;