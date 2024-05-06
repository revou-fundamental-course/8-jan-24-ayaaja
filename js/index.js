document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen-elemen yang dibutuhkan dari DOM
    const squareSideInput = document.getElementById('squareSide');
    const countButton = document.getElementById('countButton');
    const resetButton = document.getElementById('resetButton');
    const resultOutput = document.getElementById('resultOutput');
    const countk = document.getElementById('countk');
    const resetButtonk = document.getElementById('resetButtonk');

    countButton.addEventListener('click', function () {
        // Mengambil nilai sisi dari input
        const squareSideValue = parseFloat(squareSideInput.value);

        // Memastikan nilai sisi adalah angka yang valid
        if (isNaN(squareSideValue) || squareSideValue <= 0) {
            alert('Masukkan nilai sisi persegi yang valid.');
            return;
        }

        // luas persegi
        const squareArea = squareSideValue * squareSideValue;

        // Menampilkan hasil di halaman web
        resultOutput.textContent = `Luas persegi dengan sisi ${squareSideValue} adalah ${squareArea}.`;
    });

    resetButton.addEventListener('click', function () {
        // Mengosongkan nilai input dan output ketika tombol reset diklik
        squareSideInput.value = '';
        resultOutput.textContent = '';
    });

    countk.addEventListener('click', function () {
        // Mengambil nilai sisi dari input
        const squareSidekValue = parseFloat(squareSideInput.value);

        // Memastikan nilai sisi adalah angka yang valid
        if (isNaN(squareSidekValue) || squareSidekValue <= 0) {
            alert('Masukkan nilai sisi persegi yang valid.');
            return;
        }

        // k persegi
        const squareArea2 = 4 * squareSidekValue;

        // Menampilkan hasil di halaman web
        resultOutput.textContent = `Luas persegi dengan sisi ${squareSidekValue} adalah ${squareArea2}.`;
    });

    resetButton.addEventListener('click', function () {
        // Mengosongkan nilai input dan output ketika tombol reset diklik
        squareSideInput.value = '';
        resultOutput.textContent = '';
    });
});
