import { Image, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import React, { useRef, useEffect } from 'react';
import image from '@/constants/Image';
import { FontAwesome5, Fontisto, Foundation, Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/Colors'
import styles from '../css/Style'
import { useNavigation } from 'expo-router';

const Home = () => {
  const navigation = useNavigation();

  const homeNavigate = () => {
    navigation.navigate('index');
  }

  const aboutNavigation = () => {
    navigation.navigate('about');
  }

  
  return (
    <View style={styles.container}>
      {/* Top Image Container start */}
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
        <Text style={styles.titleText}>Thane Metro</Text>
      </View>
      {/* Top Image Container End */}
      {/* Card Container Start */}
      <View style={styles.cardContainer}>
        {/* Ticket card start */}
        <View style={styles.ticketCard}>
          <Ionicons
            name='ticket-outline'
            size={30}
            color={colors.orange}
          />
          <Text style={styles.ticketCardText}>Book Ticket</Text>
        </View>
        {/* Ticket card end */}
        {/* Metro card start */}
        <View style={styles.ticketCard}>
          <Ionicons
            name='card-outline'
            size={30}
            color={colors.orange}
          />
          <Text style={styles.ticketCardText}>Metro Card</Text>
        </View>
        {/* Metro card end */}
      </View>
      {/* Card Container End */}
      {/* Scroll able section start */}
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* icon list container start */}
        <View style={styles.iconListContainer}>
          {/* 1 st container start */}
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={aboutNavigation}
          >
            <Ionicons
              name='train-outline'
              size={30}
              color={colors.lightOrange}
            />
            <Text style={styles.iconText}>About Metro</Text>
          </TouchableOpacity>
          {/* 1 st container End */}
          {/* 2nd container start */}
          <TouchableOpacity style={styles.iconContainer}

          >
            <Ionicons
              name='ticket-outline'
              size={30}
              color={colors.lightOrange}
            />
            <Text style={styles.iconText}>Fare Enquiry</Text>
          </TouchableOpacity>
          {/* 2ndcontainer End */}
          {/* 3rd container start */}
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome5
              name='city'
              size={30}
              color={colors.lightOrange}
            />
            <Text style={styles.iconText}>City Landmarks</Text>
          </TouchableOpacity>
          {/* 3rd container End */}
          {/* 4th container start */}
          <TouchableOpacity style={styles.iconContainer}>
            <Foundation
              name='map'
              size={30}
              color={colors.lightOrange}
            />
            <Text style={styles.iconText}>Plan My Trip</Text>
          </TouchableOpacity>
          {/* 4 th container End */}
        </View>
        {/* icon list container End */}
        {/* Upcoming Trip start */}
        <View style={styles.upcomingTripContainer}>
          <Text style={styles.upcomingTripText}>Upcoming Trips</Text>
          <TouchableOpacity style={styles.upcommingTrip}>
            <Text style={styles.upcommingTextInside}>Click here to book metro ticket</Text>
          </TouchableOpacity>
        </View>
        {/* Upcoming Trip end */}
        {/* horizontal Slider start */}
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          style={styles.upcomingTripContainer}
        >
          {/* image1 */}
          <Image
            source={image.slider1}
            style={styles.imageCards}
            accessibilityLabel="Description of the image"
          />
          {/* image2 */}
          <Image source={image.slider2} style={styles.imageCards} />
          {/* image3 */}
          <Image source={image.slider3} style={styles.imageCards} />
          {/* image4 */}
          <Image source={image.slider4} style={styles.imageCards} />
        </ScrollView>
        {/* horizontal Slider end */}
        {/* Nearby Attraction start */}
        <View style={styles.upcomingTripContainer}>
          <Text style={styles.upcomingTripText}>Nearby Attraction</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {/* 1 container */}
            <View style={styles.tripContainer}>
              <Image source={image.ganesh} style={styles.attractionImage} />
              <Text style={styles.iconText}>Titwala Ganesha Mandir</Text>
            </View>
            {/* 2 container */}
            <View style={styles.tripContainer}>
              <Image source={image.kelva} style={styles.attractionImage} />
              <Text style={styles.iconText}>Kelwa Beach</Text>
            </View>
            {/* 3 container */}
            <View style={styles.tripContainer}>
              <Image source={image.tikuji} style={styles.attractionImage} />
              <Text style={styles.iconText}>Tikuji Ni Wadi</Text>
            </View>
            {/* 4 container */}
            <View style={styles.tripContainer}>
              <Image source={image.suraj} style={styles.attractionImage} />
              <Text style={styles.iconText}>Suraj Water Park</Text>
            </View>
          </ScrollView>
        </View>
        {/* Nearby Attraction end */}
      </ScrollView>
      {/* Scroll able section End */}
    </View>
  );
};

export default Home;