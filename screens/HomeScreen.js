import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getBukuList } from '../grpcClient';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBukuList()
      .then((data) => {
        console.log(data);
        
        setBooks(data.bukuList || []);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('BookDetailsScreen', { book: item })}
    >
      <Text style={styles.title}>{item.judul}</Text>
      <Text>{item.penulis}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item.idBuku.toString()}
        />
      </View>
    </View>
  );
};

// Styles tetap sama
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
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
});

export default HomeScreen;