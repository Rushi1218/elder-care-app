// android-app/index.js
import { AppRegistry } from "react-native";
import App from "./app"; // Import the App.js we just created
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
