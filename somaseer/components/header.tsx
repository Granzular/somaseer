import { Image, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {Colors} from '@/constants/colors'

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/images/somaseer-logo.jpg")}
        style={styles.logo}
      />

      <View style={styles.actions}>
        <MaterialCommunityIcons
          name="bell-outline"
          size={26}
          style={styles.icon}
        />

        <MaterialCommunityIcons
          name="account-circle-outline"
          size={28}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingHorizontal: 16,
    paddingTop: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#fff',
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
    zIndex: 10,

  },

  logo: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginLeft: 16,
  },
});
