import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Task({ text }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({

});