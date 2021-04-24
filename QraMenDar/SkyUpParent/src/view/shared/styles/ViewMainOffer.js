/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import styled from 'styled-components';
import {Container, Content} from 'native-base';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import platform from '../../../../native-base-theme/variables/platform';
import Toast from '../../shared/items/toast';
import BackIcon from '../../../../assets/icons/navigation/leftWhite.svg';
import NavigationServices from '../../../navigation/NavigationService';

const Link = ({
  className,
  children,
  style,
  Icon,
  Title,
  NavigateTo,
  DisableGoBack,
}) => (
  <Container
    style={{
      backgroundColor: '#FAFBFD',
      flex: 1,
    }}>
    <View
      style={{
        height: platform.getResponsiveHeight(15),
        width: platform.getResponsiveWidth(100),
      }}>
      <View style={{height: '80%'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LinearGradient
            colors={['#0EAED1', '#14D2B8']}
            start={{x: 0, y: 1}}
            end={{x: 0.9, y: 0}}
            style={{
              alignItems: 'center',
              width: platform.getResponsiveWidth(100) * 3,
              height: platform.getResponsiveWidth(100) * 3,
              borderRadius: platform.getResponsiveWidth(100) * 2,
              position: 'absolute',
              top: -platform.getResponsiveWidth(100) * 2.67,
            }}></LinearGradient>
        </View>
      </View>
    </View>
    <View
      style={{
        paddingLeft: platform.getResponsiveWidth(5),
        paddingRight: platform.getResponsiveWidth(5),
        width: '100%',
      }}>
      {children}
    </View>
  </Container>
);

const ViewWrapper = styled(Link)``;

export default Link;