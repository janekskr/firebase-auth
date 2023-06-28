import {  Text } from 'react-native'
import React from 'react'

interface CustomTextProps {
    weight?: 300 | 400 | 500 | 600 | 700;
    children: any;
    style ?: object;
    onPress ?: any;
}

const CustomText = ({weight = 400, children, style={}, onPress}: CustomTextProps) => {
  return (
      <Text style={{...{fontFamily: `Lexend-${weight}`}, ...style}} onPress={onPress}>{children}</Text>
  )
}

export default CustomText