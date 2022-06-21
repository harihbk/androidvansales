import { ImageBackground, Dimensions ,SafeAreaView ,Button, StyleSheet, Text, View, Image , TextInput ,Alert } from "react-native";
// import MapView, { PROVIDER_GOOGLE , Marker ,Polyline} from 'react-native-maps';
import React from 'react'
// import MapViewDirections from 'react-native-maps-directions';

import MapboxGL from "@react-native-mapbox-gl/maps";
import MapboxNavigation from '@homee/react-native-mapbox-navigation';

const stylesqwe = StyleSheet.create({
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

  
 // MapboxGL.setAccessToken('sk.eyJ1IjoiaGFyaTk1bm4iLCJhIjoiY2wxbTFhaGl0MGI4eTNicXI4MjZtcHdxbyJ9.aJgatQvhRk9JI0bnymvejw');


export default function Map() { 

    // const [coordinates] = React.useState([
    //     {
    //       latitude: 13.1790972,
    //       longitude: 80.0614713,
    //     },
    //     {
    //       latitude : 13.1949953,
    //       longitude : 80.1673384
    //     },
    //     {
    //       latitude: 13.4108161,
    //       longitude: 80.1081421,
    //     },
    //   ]);

     // const [coordinates] = React.useState([80.0614713, 13.1790972]);



     const [route, setRoute] = React.useState({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [80.1673384, 12.9716],
              [80.2707, 13.0827],
            ],
          },
        },
      ],
    });

    moveCamera = () => {
      this.mapRef.moveCamera(); 
  }


 const GOOGLE_API_KEY = "AIzaSyBeHUSg_2XpNrsCKREOIurZTVCN0lmlKf0";

//const GOOGLE_API_KEY = "sk.eyJ1IjoiaGFyaTk1bm4iLCJhIjoiY2wxbTFhaGl0MGI4eTNicXI4MjZtcHdxbyJ9.aJgatQvhRk9JI0bnymvejw"
const APIKEY = "sk.eyJ1IjoiaGFyaTk1bm4iLCJhIjoiY2wxbTFhaGl0MGI4eTNicXI4MjZtcHdxbyJ9.aJgatQvhRk9JI0bnymvejw";



  return (

    <View style={styles.container}>

      
    <MapboxNavigation
      origin={[80.0739228 ,13.1451689]}
      destination={[80.0814292,13.1717666]}
      shouldSimulateRout={false}
        showsEndOfRouteFeedback
      onLocationChange={(event) => {
        const { latitude, longitude } = event.nativeEvent;
      }}
      onRouteProgressChange={(event) => {
        const {
          distanceTraveled,
          durationRemaining,
          fractionTraveled,
          distanceRemaining,
        } = event.nativeEvent;
      }}
      onError={(event) => {
        const { message } = event.nativeEvent;
      }}
      onCancelNavigation={() => {
        // User tapped the "X" cancel button in the nav UI
        // or canceled via the OS system tray on android.
        // Do whatever you need to here.
      }}
      onArrive={() => {
        // Called when you arrive at the destination.
      }}
    />
  </View>
  )
}
