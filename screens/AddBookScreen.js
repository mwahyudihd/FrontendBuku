import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

const AddBookScreen = ({ navigation }) => {
  const [judul, setJudul] = useState('');
  const [penulis, setPenulis] = useState('');
  const [penerbit, setPenerbit] = useState('');
  const [tahunTerbit, setTahunTerbit] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');

  const addBook = () => {
    if (!judul || !penulis || !penerbit || !tahunTerbit || !harga || !stok) {
      Alert.alert('Error', 'Semua bidang harus diisi!');
      return;
    }

    const newBook = { 
      judul, 
      penulis, 
      penerbit, 
      tahunTerbit: parseInt(tahunTerbit), 
      harga: parseFloat(harga), 
      stok: parseInt(stok) 
    };

    fetch('https://grpc.tech-ai.my.id/buku', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Gagal menambahkan buku');
        }
        return response.json();
      })
      .then(data => {
        Alert.alert('Sukses', `Buku "${data.judul}" berhasil ditambahkan`);
        
        // Reset input setelah berhasil menambahkan buku
        setJudul('');
        setPenulis('');
        setPenerbit('');
        setTahunTerbit('');
        setHarga('');
        setStok('');

        // Kembali ke Home dan refresh data
        navigation.navigate('Home', { refresh: true });
      })
      .catch(error => {
        console.error('Error adding book:', error);
        Alert.alert('Error', 'Gagal menambahkan buku');
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tambah Buku Baru</Text>

      <TextInput style={styles.input} placeholder="Judul" value={judul} onChangeText={setJudul} />
      <TextInput style={styles.input} placeholder="Penulis" value={penulis} onChangeText={setPenulis} />
      <TextInput style={styles.input} placeholder="Penerbit" value={penerbit} onChangeText={setPenerbit} />
      <TextInput style={styles.input} placeholder="Tahun Terbit" keyboardType="numeric" value={tahunTerbit} onChangeText={setTahunTerbit} />
      <TextInput style={styles.input} placeholder="Harga" keyboardType="numeric" value={harga} onChangeText={setHarga} />
      <TextInput style={styles.input} placeholder="Stok" keyboardType="numeric" value={stok} onChangeText={setStok} />

      <TouchableOpacity style={styles.addButton} onPress={addBook}>
        <Text style={styles.addButtonText}>➕ Tambah Buku</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  addButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddBookScreen;
