import { createStackNavigator } from "react-navigation";
import FormScreen from "./FormScreen";
import ListScreen from "./ListScreen";

const AppNavigator = createStackNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: {
      title: "Meu ToDo app",
    }
  },
  Form: {
    screen: FormScreen
  }
}, {
  unmountInactiveRoutes: true,
  defaultNavigationOptions: {}
});

export default AppNavigator;