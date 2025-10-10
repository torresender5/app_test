import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import  theme, { useAppTheme }  from '../../index';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => (
  <Text style={styles.header}>{children}</Text>
);


  
const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: '#600EE6',
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

export default Header;