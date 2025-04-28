import { colors } from '@/constants/Colors';
import {
  StyleSheet, Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  topContainer: {
    position: 'absolute',
    top: -40,
    left: '10%',
    transform: [{ translateX: -25 }],
    zIndex: 2,
    flexDirection: 'row',
  },
  topContainerImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  topContainerImageStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  titleText: {
    top: 10,
    left: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  cardContainer: {
    position: 'absolute',
    zIndex: 2,
    flexDirection: 'row',
    margin: width * 0.04,
  },
  ticketCard: {
    height: 50,
    width: width * 0.4,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ticketCardText: {
    textAlign: 'center',
    // fontSize: 16,
    marginHorizontal: 10,
  },
  iconListContainer: {
    flexDirection: 'row',
    top: 60,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    width: width * 0.2,
  },
  iconText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center'
  },
  upcomingTripContainer: {
    margin: 10,
    top: height* 0.04,
  },
  upcommingTrip: {
    height: 100,
    top: 15,
    width: width * 0.9,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 20,
    marginLeft: 10,
    justifyContent: 'center',
  },
  upcomingTripText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:colors.lightBlack

  },
  upcommingTextInside: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.orange,
  },
  imageCards: {
    height: 150,
    width: width * 0.9,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 20,
    margin: 10,
    marginTop: 25,
    resizeMode: 'cover',
  },
  tripContainer: {
    height: 250,
  },
  attractionImage: {
    resizeMode: 'cover',
    width: width * 0.5,
    height: 120,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 10,
  },
  // About page styles
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    // opacity:0.1,
    height: '65%',
    width: width * 0.9,
    top: '5%',
  },
  backgroundView: {
    flex: 1,
    alignItems: 'center',
  },
  headingText: {
    fontSize: 24,
    color: colors.orange,
    zIndex: 2,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  paragraphText: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 25,
  },
  aboutImage: {
    resizeMode: 'cover',
    width: width * 0.7,
    height: height * 0.3,
  },
  // category page styles
  categoryContainer: {
    height: 100,
    top: 15,
    width: width * 0.45,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 20,
    marginLeft: width * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  categoryImage: {
    height: '50',
    width: '50',
  },
  categoryImage1: {
    height: '30',
    width: '30',
  },
  // profile page styles
  loginCard: {
    height: height* 0.1,
    width: width * 0.9,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    marginHorizontal: width * 0.01,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  loginCardImageStyle: {
    height: 37,
    width: 40,
    margin: 10
  },
  loginButton: {
    height: 26,
    width: width * 0.2,
    borderRadius: 13,
    borderWidth: 1,
    backgroundColor: colors.orange,
    borderColor: colors.orange,
    justifyContent:'center',
  },
  loginButtonText: {
    textAlign: 'center',
    color: colors.white,
  },
  profileCard :{
    height: height* 0.1,
    width: width * 0.4,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  helpContainer :{
    margin: 10,
    top: height* 0.25,
  },
  helpProfile:{
    flexDirection:'row',
    padding: 15,
    alignItems:'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  // Contact Us page style
  headerContainer:{
    height: height* 0.09,
    width:width* 1,
    backgroundColor: colors.skyBlue,
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    fontSize: 24,
    color: colors.white,
    fontWeight:'bold'
  },
  ContactContainer:{
    alignItems:'center',
    gap:10
  },
  callIcons:{
    marginHorizontal:10,
    justifyContent:'center',
    left:width* (-0.2)
  },
  callTextContainer:{
    justifyContent:'center',
    textAlign:'left'
  },
  callText:{
    fontSize: 16,
    textAlign:'justify'
  },
});


