import { ImageBackground, Dimensions ,SafeAreaView ,Button, StyleSheet, Text, View, Image , TextInput ,Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE , Marker ,Polyline} from 'react-native-maps';
import React from 'react'
import MapViewDirections from 'react-native-maps-directions';

import MapboxGL from "@react-native-mapbox-gl/maps";
// import MapboxNavigation from '@homee/react-native-mapbox-navigation';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
  height: '100%',
    width: '100%',
    backgroundColor: 'blue',
  },
  map: {
    flex: 1
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1
//   }
// });

  
  MapboxGL.setAccessToken('AIzaSyCAXVezzXAWtaxbPP3AYJhYq3vi6bL9jOM');


export default function Map() { 

    const [coordinates] = React.useState([
        {
          latitude: 13.1790972,
          longitude: 80.0614713,
        },
        {
          latitude : 13.1949953,
          longitude : 80.1673384
        },
        {
          latitude: 13.4108161,
          longitude: 80.1081421,
        },
      ]);




 const GOOGLE_API_KEY = "AIzaSyCAXVezzXAWtaxbPP3AYJhYq3vi6bL9jOM";

//const GOOGLE_API_KEY = "sk.eyJ1IjoiaGFyaTk1bm4iLCJhIjoiY2wxbTFhaGl0MGI4eTNicXI4MjZtcHdxbyJ9.aJgatQvhRk9JI0bnymvejw"
//const APIKEY = "sk.eyJ1IjoiaGFyaTk1bm4iLCJhIjoiY2wxbTFhaGl0MGI4eTNicXI4MjZtcHdxbyJ9.aJgatQvhRk9JI0bnymvejw";



  return (
    <View style={styles.page}>
      <View style={styles.container}>
      <MapView 
        showUserLocation={true}
        zoomLevel={12}
        style={styles.map} 
        initialRegion={{
          latitude: coordinates[0].latitude, 
          longitude: coordinates[0].longitude,
          latitudeDelta: 0,
          longitudeDelta: 0.05,
        }}
        >

            <Marker  
            coordinate={{  latitude: coordinates[0].latitude, 
              longitude: coordinates[0].longitude }}  
            title={"JavaTpoint"}  
            description={"Java Training Institute"}  
          />  

          <MapViewDirections
           origin={coordinates[0]}
           destination={coordinates[1]}
           apikey={GOOGLE_API_KEY} 
           strokeWidth={4}
           strokeColor="#00008B"
         />

        </MapView>
       

</View>
        </View>
       
  )
}


