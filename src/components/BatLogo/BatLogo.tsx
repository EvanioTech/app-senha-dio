import React from 'react';
import { View , Text, Image} from 'react-native';
import batLogo from '../../../assets/batLogo.png'
import { styles } from './BatLogoStyle';

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>
            BAT PASS GENERATOR
        </Text>
        <Image
        source={batLogo}
        style={{
            resizeMode:'contain',
            height:190
        }}
        />

    </>
  );
}