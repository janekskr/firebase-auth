import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../assets/dummy';
import CustomText from './CustomText';

interface CustomButtonProps {
    onPress: any;
    children: any;
}

const CustomButton = ({children, onPress} : CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <CustomText style={styles.buttonText} weight={700}>{children}</CustomText>
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
    fontSize: 20,
  },
})