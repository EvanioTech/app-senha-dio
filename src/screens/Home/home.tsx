import React from "react";
import { Text,View, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './Style';
import { BatLogo } from "../../components/BatLogo/BatLogo";

export default function Home() {
return (
    <View style={styles.container}>
      <View>
      <BatLogo/>
      </View>
      
    <Text>Matias Developer</Text>
    <StatusBar style="auto" />
    <Text>Home Works!!</Text>
  </View>
    
)
}

