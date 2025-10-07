const product = [
    {
        name: "Bakso",
        category: "makanan",
        price: 20000
    },
    {
        name: "Mia ayam",
        category: "makanan",
        price: 18000
    },
    {
        name: "Es Teh",
        category: "minuman",
        price: 5000
    },
    {
        name: "Es Jeruk",
        category: "minuman",
        price: 7000
    },
]


console.log (product);
console.log ('\n');
const namaProduk = product.map(item => item.name);
console.log("Nama produk:", namaProduk);
console.log ('\n');
const makanan = product.filter(item => item.category === "makanan");
console.log("kategori makanan:", makanan);
console.log ('\n');
const cari = product
  .filter(item => item.price > 10000)
  .map(item => item.name);

console.log("Produk dengan harga > 10k:", cari);
console.log ('\n');
const totalHarga = product.reduce((total, item) => total + item.price, 0);
console.log ('\n');
console.log("Total harga semua produk:", totalHarga);


//print product
//print nama product
//print product dengan kategory makanan
//print nama product dengan harga lebih dari 10k
//jumlahkan seluruh harga untuk setiap product