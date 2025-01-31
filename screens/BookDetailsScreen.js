import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookDetailsScreen = ({ route }) => {
    const { book } = route.params; // Mengambil data buku dari parameter
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.subtitle}>author: {book.author}</Text>
        <Text style={styles.subtitle}>Penerbit: {book.penerbit}</Text>
        <Text style={styles.subtitle}>Tahun Terbit: {book.tahun_terbit}</Text>
        <Text style={styles.subtitle}>Harga: {book.harga}</Text>
        <Text style={styles.subtitle}>Stok: {book.stok}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default BookDetailsScreen;
