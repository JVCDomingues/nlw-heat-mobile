import { StyleSheet } from "react-native";
import { FONTS } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.BOLD, 
    textTransform: 'uppercase'
  },
  icon: {
    marginRight: 12
  }
})