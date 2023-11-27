import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Splash from "../screens/Splash";
import LoginClient from "../screens/LoginClient";
import Home from "../screens/Home";
import TestScreen from "../screens/TestScreen";
import LoginProvider from "../screens/LoginProvider";
import CompanyList from "../screens/CompanyList";

function AppRoutes(){

const {Screen, Navigator} = createNativeStackNavigator();

    return(

        <Navigator initialRouteName="testScreen" screensOptions={{Headers: false}}>

            <Screen name="splashScreen" component={Splash}/>
            <Screen name="loginClient" component={LoginClient}/>
            <Screen name="loginProvider" component={LoginProvider}/>
            <Screen name="home" component={Home}/>
            <Screen name="companyList" component={CompanyList}/>
            <Screen name="testScreen" component={TestScreen}/>


        </Navigator>

    )

}

export default AppRoutes