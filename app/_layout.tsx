import React from 'react'
import { Stack } from 'expo-router'
import { colors } from '@/constants/Colors'

const RootLayout = () => {
  return (
   <Stack>
    <Stack.Screen name="(tab)" options={{ headerShown: false }}/> 
    <Stack.Screen name="contact" options={{ headerShown: false }}/> 
    {/* <Stack.Screen name="index" /> */}
   </Stack>
  )
}

export default RootLayout