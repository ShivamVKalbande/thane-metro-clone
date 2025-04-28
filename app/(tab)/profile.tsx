import { Image, Text, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../css/Style';
import image from '@/constants/Image';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/constants/Colors';

const { width, height } = Dimensions.get('window');

const Profile = () => {
  const navigation = useNavigation();

  const homeNavigate = () => {
    navigation.navigate('index');
  };

  const contactPage = () => {
    navigation.navigate('contact')
  }

  return (
    <View style={styles.container}>
      {/* Top Image Container */}
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.topContainerImage} onPress={homeNavigate}>
          {image.logo && (
            <Image
              source={image.logo}
              style={styles.topContainerImageStyle}
              accessible={true}
              accessibilityLabel="Metro logo"
            />
          )}
        </TouchableOpacity>
        <Text style={styles.titleText}>Profile</Text>
      </View>

      {/* Big Card Container */}
      <View style={styles.cardContainer}>
        <View style={styles.loginCard}>
          <Image
            source={image.logo}
            style={styles.loginCardImageStyle}
          />
          <View>
            <Text style={[styles.ticketCardText, { fontWeight: 'bold' }]}>Welcome to Thane Metro!</Text>
            <Text style={styles.ticketCardText}>Log In use more features</Text>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 250 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Card Container */}
        <View style={[styles.cardContainer, { top: height * 0.12 }]}>
          <View style={styles.profileCard}>
            <Ionicons
              name='card-outline'
              size={30}
              color={colors.skyBlue}
            />
            <Text style={styles.ticketCardText}>Metro Card</Text>
          </View>
          <View style={styles.profileCard}>
            <Ionicons
              name='ticket-outline'
              size={30}
              color={colors.skyBlue}
            />
            <Text style={styles.ticketCardText}>My Tickets</Text>
          </View>
        </View>

        {/* Help Container */}
        <View style={styles.helpContainer}>
          <Text style={styles.upcomingTripText}>Help & Support</Text>
          <TouchableOpacity style={styles.helpProfile}>
            <FontAwesome
              name='question-circle-o'
              size={25}
              color={colors.lightBlack}
            />
            <Text style={{ marginHorizontal: 10, color: colors.lightBlack }}>Customer Care</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.helpProfile}
          onPress={contactPage}
          >
            <FontAwesome
              name='headphones'
              size={25}
              color={colors.lightBlack}
            />
            <Text style={{ marginHorizontal: 10, color: colors.lightBlack }}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.helpProfile}>
            <FontAwesome
              name='question'
              size={25}
              color={colors.lightBlack}
            />
            <Text style={{ marginHorizontal: 10, color: colors.lightBlack }}>FAQ's</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.helpProfile}>
            <FontAwesome
              name='inr'
              size={25}
              color={colors.lightBlack}
            />
            <Text style={{ marginHorizontal: 10, color: colors.lightBlack }}>Penalty</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.helpContainer}>
          <Text style={styles.upcomingTripText}>More</Text>
          <TouchableOpacity style={styles.helpProfile}>
            <FontAwesome
              name='shopping-bag'
              size={25}
              color={colors.lightBlack}
            />
            <Text style={{ marginHorizontal: 10, color: colors.lightBlack }}>Lost & Found</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.helpProfile}>
            <MaterialCommunityIcons
              name='message-alert-outline'
              size={25}
              color={colors.lightBlack}
            />
            <Text style={{ marginHorizontal: 10, color: colors.lightBlack }}>Ticket Grievances</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.helpProfile}>
            <FontAwesome
              name='info-circle'
              size={25}
              color={colors.lightBlack}
            />
            <Text style={{ marginHorizontal: 10, color: colors.lightBlack }}>Terms and Services</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.helpProfile}>
            <Ionicons
              name='shield-checkmark-outline'
              size={25}
              color={colors.lightBlack}
            />
            <Text style={{ marginHorizontal: 10, color: colors.lightBlack }}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.helpProfile}>
            <Ionicons
              name='log-in-outline'
              size={25}
              color={colors.lightBlack}
            />
            <Text style={{ marginHorizontal: 10, color: colors.lightBlack }}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;