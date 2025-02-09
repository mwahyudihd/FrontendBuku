import { BukuServiceClient } from "./grpc/buku_grpc_web_pb";
import { Empty, BukuList } from "./grpc/buku_pb";
import { grpc } from "@improbable-eng/grpc-web";

// Koneksi ke server gRPC
const client = new BukuServiceClient("http://localhost:50051", {
  transport: grpc.WebsocketTransport(), // Gunakan WebSockets
});

/**
 * Fungsi untuk mengambil daftar buku dari server gRPC
 */
export const getBukuList = () => {
  return new Promise((resolve, reject) => {
    const request = new Empty();

    client.listBuku(request, {}, (err, response) => {
      if (err) {
        reject(err);
        return;
      }

      // Parsing data ke dalam bentuk array JSON
      const bukuList = response.getBukuList().map((buku) => ({
        idBuku: buku.getIdBuku(),
        judul: buku.getJudul(),
        penulis: buku.getPenulis(),
        penerbit: buku.getPenerbit(),
        tahunTerbit: buku.getTahunTerbit(),
        harga: buku.getHarga(),
        stok: buku.getStok(),
      }));

      resolve({ bukuList });
    });
  });
};
