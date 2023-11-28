import { View } from "react-native";
import ButonsScreen from "../../components/ButonScreen";

function TestScreen(){

    return(
        <View>
            <ButonsScreen title="LoginClient" destinyScreen="loginClient"/>
            <ButonsScreen title="LoginProvider" destinyScreen="loginProvider"/>
            <ButonsScreen title="Home" destinyScreen="home"/>
            <ButonsScreen title="TestScreen" destinyScreen="testScreen"/>
        </View>
    )
}

export default TestScreen