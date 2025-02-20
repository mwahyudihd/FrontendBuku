import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

const EditBookScreen = ({ route, navigation }) => {
  const { book } = route.params;

  // State untuk menyimpan data buku yang akan diedit
  const [judul, setJudul] = useState(book.judul);
  const [penulis, setPenulis] = useState(book.penulis);
  const [penerbit, setPenerbit] = useState(book.penerbit);
  const [tahunTerbit, setTahunTerbit] = useState(book.tahunTerbit.toString());
  const [harga, setHarga] = useState(book.harga.toString());
  const [stok, setStok] = useState(book.stok.toString());

  const updateBook = () => {
    if (!judul || !penulis || !penerbit || !tahunTerbit || !harga || !stok) {
      Alert.alert('Error', 'Semua bidang harus diisi!');
      return;
    }

    const updatedBook = {
      judul,
      penulis,
      penerbit,
      tahunTerbit: parseInt(tahunTerbit),
      harga: parseFloat(harga),
      stok: parseInt(stok),
    };

    fetch(`https://grpc.tech-ai.my.id/buku/${book.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedBook),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Gagal mengupdate buku');
        }
        return response.json();
      })
      .then(data => {
        Alert.alert('Sukses', `Buku "${data.judul}" berhasil diperbarui`);
        navigation.navigate('Home', { refresh: true }); // Kembali ke Home & refresh data
      })
      .catch(error => {
        console.error('Error updating book:', error);
        Alert.alert('Error', 'Gagal mengupdate buku');
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Buku</Text>

      <TextInput style={styles.input} placeholder="Judul" value={judul} onChangeText={setJudul} />
      <TextInput style={styles.input} placeholder="Penulis" value={penulis} onChangeText={setPenulis} />
      <TextInput style={styles.input} placeholder="Penerbit" value={penerbit} onChangeText={setPenerbit} />
      <TextInput style={styles.input} placeholder="Tahun Terbit" keyboardType="numeric" value={tahunTerbit} onChangeText={setTahunTerbit} />
      <TextInput style={styles.input} placeholder="Harga" keyboardType="numeric" value={harga} onChangeText={setHarga} />
      <TextInput style={styles.input} placeholder="Stok" keyboardType="numeric" value={stok} onChangeText={setStok} />

      <TouchableOpacity style={styles.saveButton} onPress={updateBook}>
        <Text style={styles.saveButtonText}>💾 Simpan Perubahan</Text>
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
  saveButton: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditBookScreen;
