// Data produk awal
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 7500000
    },
    {
        id: 2,
        name: "Mouse",
        price: 150000
    },
    {
        id: 3,
        name: "Keyboard",
        price: 350000
    },
    {
        id: 4,
        name: "Headset",
        price: 250000
    },
    {
        id: 5,
        name: "Monitor",
        price: 1800000
    }
];

// Mengambil elemen HTML berdasarkan ID
const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");

// Fungsi untuk menampilkan produk
function displayProducts(...productData) {
    productList.innerHTML = "";

    productData.forEach((product) => {

        // Destructuring object
        const { id, name, price } = product;

        const productElement = document.createElement("div");

        productElement.innerHTML = `
            <p>
                <strong>${name}</strong><br>
                Harga: Rp${price.toLocaleString("id-ID")}
            </p>

            <button onclick="deleteProduct(${id})">
                Hapus
            </button>

            <hr>
        `;

        productList.appendChild(productElement);
    });
}

// Fungsi untuk menambahkan produk
function addProduct(name, price) {

    const newProduct = {
        id: products.length > 0
            ? products[products.length - 1].id + 1
            : 1,
        name,
        price
    };

    // Spread Operator
    products = [...products, newProduct];

    displayProducts(...products);
}

// Fungsi untuk menghapus produk
function deleteProduct(id) {

    products = products.filter((product) => product.id !== id);

    displayProducts(...products);
}

// Event Listener pada form
productForm.addEventListener("submit", function (event) {

    // Mencegah perilaku default form
    event.preventDefault();

    const productName =
        document.getElementById("productName").value;

    const productPrice =
        Number(document.getElementById("productPrice").value);

    addProduct(productName, productPrice);

    productForm.reset();
});

// Menampilkan produk saat halaman dibuka
displayProducts(...products);