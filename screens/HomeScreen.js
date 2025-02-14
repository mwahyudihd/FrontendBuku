import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, NativeModules } from 'react-native';

const { GrpcModule } = NativeModules;

const HomeScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    GrpcModule.listBuku()
      .then(response => {
        setBooks(response);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Daftar Buku</Text>
      <FlatList
        data={books}
        keyExtractor={item => item.id_buku.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ padding: 20, backgroundColor: '#ddd', marginBottom: 10 }}>
            <Text style={{ fontSize: 18 }}>{item.judul}</Text>
            <Text>{item.penulis}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;