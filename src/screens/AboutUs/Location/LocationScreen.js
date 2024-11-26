import React, { useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import styles from "./Location.styles";

// Import URL link
import mapEmbedUrl from "./Location.link";

const LocationScreen = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.mapHeader}>Location</Text>

      {/* WebView */}

      <WebView
        source={{
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  iframe { width: 100%; height: 100%; border: none; }
                </style>
              </head>
              <body>
                <iframe 
                  src="${mapEmbedUrl}" 
                  allowfullscreen 
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </body>
            </html>
          `,
        }}
        style={styles.map}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Loading Container */}
      <View style={!isLoaded ? styles.loadingContainer : {opacity:0}}>
          <Text style={{textAlign:'center'}}>Please wait..</Text>
          <ActivityIndicator size="large" color="#red" />
        </View>
        
    </View>
  );
};

export default LocationScreen;
