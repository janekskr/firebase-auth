import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../assets/dummy';

interface CustomButtonProps {
    onPress: any;
    children: string;
}

const CustomButton = ({children, onPress} : CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.blue,
    paddingVertical: 15,
    width: "90%",
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: "center",
    fontWeight: "800",
    fontSize: 20,
  },
})