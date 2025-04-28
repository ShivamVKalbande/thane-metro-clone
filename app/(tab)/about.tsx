import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import image from '@/constants/Image';
import styles from '../css/Style';
import { useNavigation } from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();

  const homeNavigate = () => {
    navigation.navigate('index');
  }
  return (
    <View style={styles.container}>
      {/* Top Image Container */}
      <View style={styles.topContainer} >
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
        <Text style={styles.titleText} accessibilityRole="header">
          About Metro
        </Text>
      </View>

      {/* Main Content */}
      <View style={styles.backgroundView}>
        <View style={styles.backgroundImage}>
          <ScrollView>
            <Text style={styles.headingText}>
              Thane Metro
            </Text>
            {image.about && (
              <Image
                source={image.about}
                style={styles.aboutImage}
                accessible={true}
                accessibilityLabel="About Metro image"
              />
            )}
            <Text style={styles.paragraphText}>
              Thane, a rapidly developing city, faces significant challenges in
              terms of traffic congestion, pollution, and high travel times. The
              Thane Ring Metro will serve as a backbone for urban mobility,
              drastically reducing travel time by offering a fast, reliable, and
              eco-friendly transit solution. By diverting commuters from road
              traffic, it will alleviate congestion, reduce pollution, and
              contribute to a more sustainable future, making Thane a more
              attractive and livable city for residents and visitors alike.
            </Text>
            <View style={{ height: 100 }}></View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default About;
