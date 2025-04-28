import { View, Text, TouchableOpacity, Dimensions, Linking, } from 'react-native'
import React from 'react'
import styles from './css/Style'
import { LinearGradient } from 'expo-linear-gradient';
import { gradientProps } from '@/constants/LinearGradient';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/Colors';

const { width } = Dimensions.get('window');
const contact = () => {
  const handleCall = number => {
    Linking.openURL(`tel:${number}`);
  };
  const handleEmail = email => {
    Linking.openURL(`mailto:${email}`);
  };
  const handleMap = () => {
    const location = 'Maha Metro, 3rd floor of the LBT office, near Maria Plaza Hotel, Thane (West) – 400601';
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`);
};
  return (
    <View style={styles.container}>
      {/* Top Container */}
      <LinearGradient {...gradientProps} style={styles.headerContainer}>
        <Text style={styles.headerText}>Contact Us</Text>
      </LinearGradient>
      {/* CALL CONTAINER  */}
      <View style={styles.ContactContainer}>
        <TouchableOpacity
          onPress={() => handleCall('07122554217')}
          style={[styles.upcommingTrip, { flexDirection: 'row' }]}
        >
          <View style={styles.callIcons}>
            <FontAwesome size={50} name="phone" color={colors.skyBlue} />
          </View>
          <View style={styles.callTextContainer}>
            <Text style={styles.callText}>Phone Number</Text>
            <Text style={styles.callText}>07122554217</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleEmail('info.thane@mahametro.org')}
          style={[styles.upcommingTrip, { flexDirection: 'row' }]}>
          <View style={[styles.callIcons, { left: width * (-0.1) }]}>
            <Ionicons size={50} name="mail" color={colors.skyBlue} />
          </View>
          <View style={styles.callTextContainer}>
            <Text style={styles.callText}>Email</Text>
            <Text style={styles.callText}>info.thane@mahametro.org</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={handleMap}
        style={[styles.upcommingTrip, { flexDirection: 'row', height: width * 0.5 }]}
        >
          <View style={[styles.callIcons, { left: width * (-0.15) }]}>
            <FontAwesome size={50} name="location-arrow" color={colors.skyBlue} />
          </View>
          <View style={styles.callTextContainer}>
            <Text style={styles.callText}>Address</Text>
            <Text style={[styles.callText, { width: width * 0.4 }]}>Maha Metro
              3rd floor of the LBT office, located near Maria Plaza Hotel, near Oswal Park, Pokhran Road No.2, Majiwada, Thane (West) – 400601</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default contact