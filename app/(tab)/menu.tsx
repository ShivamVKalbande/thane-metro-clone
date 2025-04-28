import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../css/Style'
import image from '@/constants/Image';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
      const navigation = useNavigation();
    
      const homeNavigate = () => {
        navigation.navigate('index');
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
                <Text style={styles.titleText}>Category</Text>
            </View>
            {/* Top Image Container End */}
            <ScrollView style={styles.upcomingTripContainer}>
                {/* Row 1 */}
                <View style={styles.categoryRow}>
                    <TouchableOpacity style={styles.categoryContainer}>
                        <FontAwesome5 size={40} name="route" color={colors.skyBlue} />
                        <Text >Metro Route Map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryContainer}>
                        <FontAwesome5 size={40} name="table" color={colors.skyBlue} />
                        <Text >Metro Time Table</Text>
                    </TouchableOpacity>
                </View>

                {/* Row 2 */}
                <View style={styles.categoryRow}>
                    <TouchableOpacity style={styles.categoryContainer}>
                        <FontAwesome5 size={40} name="train" color={colors.skyBlue} />
                        <Text >Nearby Metro Station</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryContainer}>
                        <FontAwesome5 size={40} name="book" color={colors.skyBlue} />
                        <Text >Travel Advisor</Text>
                    </TouchableOpacity>
                </View>

                {/* Row 3 */}
                <View style={styles.categoryRow}>
                    <TouchableOpacity style={styles.categoryContainer}>
                        <Ionicons size={40} name="call-sharp" color={colors.skyBlue} />
                        <Text >Emergency Contacts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryContainer}>
                        <FontAwesome5 size={40} name="bus-alt" color={colors.skyBlue} />
                        <Text >Feeder Services</Text>
                    </TouchableOpacity>
                </View>

                {/* Row 4 */}
                <View style={styles.categoryRow}>
                    <TouchableOpacity style={styles.categoryContainer}>
                        <FontAwesome5 size={40} name="parking" color={colors.skyBlue} />
                        <Text >Parking Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryContainer}>
                        {/* <FontAwesome5 size={40} name="facebook" color={colors.skyBlue} /> */}
                        <Image source={image.facebook} style={styles.categoryImage}/>
                        <Text >Facebook</Text>
                    </TouchableOpacity>
                </View>

                {/* Row 5 */}
                <View style={styles.categoryRow}>
                    <TouchableOpacity style={styles.categoryContainer}>
                        {/* <FontAwesome5 size={40} name="twitter" color={colors.skyBlue} /> */}
                        <Image source={image.x} style={styles.categoryImage1}/>
                        <Text >X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryContainer}>
                        {/* <FontAwesome5 size={40} name="instagram" color={colors.skyBlue} /> */}
                        <Image source={image.instagram} style={styles.categoryImage}/>
                        <Text >instagram</Text>
                    </TouchableOpacity>
                </View>

                {/* Row 5 */}
                <View style={styles.categoryRow}>
                    <TouchableOpacity style={styles.categoryContainer}>
                        {/* <FontAwesome5 size={40} name="youtube" color={colors.skyBlue} /> */}
                        <Image source={image.youtube} style={styles.categoryImage}/>
                        <Text >Youtube</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 100 }}></View>
            </ScrollView>

        </View>
    )
}

export default Menu