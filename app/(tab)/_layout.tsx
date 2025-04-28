import React from 'react'; 
import { StyleSheet, Text, Dimensions, View } from 'react-native';
import { Tabs } from 'expo-router';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { gradientProps } from '../../constants/LinearGradient';

// Get the device's width and height
const { width, height } = Dimensions.get('window');

const TabRoot = () => {
  return (
    <Tabs
      screenOptions={{ 
        tabBarActiveTintColor: 'white',
        headerTitle: () => (
          <LinearGradient {...gradientProps} style={styles.gradientContainer}>
          </LinearGradient>
        ),
        tabBarBackground: () => {
          return (        
            <LinearGradient {...gradientProps} style={styles.gradientBottomContainer}>
              <View style={styles.tabBarBackground}></View>
            </LinearGradient>
          );
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="info-circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={28} name="microsoft-xbox-controller-menu" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabRoot;

const styles = StyleSheet.create({
  gradientContainer: {
    width: width * 1, 
    height: height * 0.15, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginLeft: -15,
    zIndex: 1, // Ensure gradient stays behind the image container
  },
 
  gradientBottomContainer:{
    width: '100%',
    height: height * 0.11, 
    justifyContent: 'center', 
    alignItems: 'center', 
    top: -40,
  },
  tabBarBackground:{
    backgroundColor: 'white',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    height: 20,
    width: '100%',
    top: -40,
  },
 
});
