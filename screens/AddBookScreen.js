import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddBookScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [penerbit, setPenerbit] = useState('');
  const [tahun_terbit, setTahunTerbit] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');

  const addBook = () => {
    // Logika untuk menambahkan buku
    console.log('Book added:', title, author);
    setTitle('');
    setAuthor('');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        style={styles.input}
        placeholder="Penerbit"
        value={penerbit}
        onChangeText={setPenerbit}
      />
      <TextInput
        style={styles.input}
        placeholder="Tahun Terbit"
        value={tahun_terbit}
        onChangeText={setTahunTerbit}
      />
      <TextInput
        style={styles.input}
        placeholder="Harga"
        value={harga}
        onChangeText={setHarga}
      />
      <TextInput
        style={styles.input}
        placeholder="Stok"
        value={stok}
        onChangeText={setStok}
      />
      <Button title="Add Book" onPress={addBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default AddBookScreen; // Pastikan ini adalah ekspor default