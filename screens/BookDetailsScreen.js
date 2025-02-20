import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const BookDetailsScreen = ({ route, navigation }) => {
  const { book } = route.params;

  const deleteBook = () => {
    Alert.alert(
      "Konfirmasi Hapus",
      `Apakah Anda yakin ingin menghapus buku "${book.judul}"?`,
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Hapus",
          style: "destructive",
          onPress: () => {
            fetch(`https://grpc.tech-ai.my.id/buku/${book.id}`, {
              method: 'DELETE',
            })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Gagal menghapus buku');
                }
                Alert.alert("Sukses", "Buku berhasil dihapus");
                navigation.navigate('Home', { refresh: true });
              })
              .catch(error => {
                console.error('Error deleting book:', error);
                Alert.alert("Error", "Gagal menghapus buku");
              });
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{book.judul}</Text>
        <Text style={styles.subtitle}>📖 Penulis: <Text style={styles.textHighlight}>{book.penulis}</Text></Text>
        <Text style={styles.subtitle}>🏢 Penerbit: <Text style={styles.textHighlight}>{book.penerbit}</Text></Text>
        <Text style={styles.subtitle}>📅 Tahun Terbit: <Text style={styles.textHighlight}>{book.tahunTerbit}</Text></Text>
        <Text style={styles.subtitle}>💰 Harga: <Text style={styles.textHighlight}>Rp {book.harga}</Text></Text>
        <Text style={styles.subtitle}>📦 Stok: <Text style={styles.textHighlight}>{book.stok} pcs</Text></Text>
      </View>

      {/* Tombol Edit */}
      <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditBookScreen', { book })}>
        <Text style={styles.editButtonText}>✏️ Edit Buku</Text>
      </TouchableOpacity>

      {/* Tombol Delete */}
      <TouchableOpacity style={styles.deleteButton} onPress={deleteBook}>
        <Text style={styles.deleteButtonText}>🗑 Hapus Buku</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  textHighlight: {
    fontWeight: 'bold',
    color: '#6200ea',
  },
  editButton: {
    backgroundColor: '#6200ea',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#d32f2f',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookDetailsScreen;
