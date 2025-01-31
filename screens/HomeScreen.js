import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [books, setBooks] = useState([
    { id: '1', title: '1984', author: 'George Orwell', penerbit: 'Gramedia', tahun_terbit: '2000', harga: 'Rp 100.000', stok: '10' },
    { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', penerbit: 'Gramedia', tahun_terbit: '2020', harga: 'Rp 50.000', stok: '10' },
    { id: '3', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', penerbit: 'Gramedia', tahun_terbit: '2021', harga: 'Rp 50.000', stok: '10' },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('BookDetailsScreen', { book: item })} // Pastikan nama ini sesuai
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.author}</Text>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    height: 50,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
  },
  content: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#333',
    marginBottom: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
  },
});

export default HomeScreen;
