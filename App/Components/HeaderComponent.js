import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import constants from '../Constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../Utility/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { Header } from "react-native-elements"
const HeaderComponent = ({
  navigation,
  title,
  subTitle,
  rightFirstIcon, rightSecondIcon
}) => {
  return (
    <View>
      <Header
        leftComponent={<Image source={{ uri: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg' }} style={{ height: 40, width: 40, borderRadius: 40 }}></Image>}
        centerComponent={<View style={{ alignSelf: 'center', alignItems: 'center' }}>

          <Text style={{ fontSize: 20, fontWeight: '700' }}>{title}</Text>
          <Text>{subTitle}</Text>

        </View>}
        rightComponent={
          <View style={{ alignSelf: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: hp('1%') }}>
            <TouchableOpacity onPress={() => navigation.navigate('FiltterScreen')}>
              <Icon size={20} color={constants.title_Colors} name={rightFirstIcon} style={{ right: hp('2%') }} > </Icon>
            </TouchableOpacity>
            <Icon name={rightSecondIcon} size={20} color={constants.title_Colors}></Icon>
          </View>
        }
        containerStyle={{
          backgroundColor: 'white',
          alignItems: 'center',

        }}
      />


    </View>
  );
};

export default HeaderComponent;
