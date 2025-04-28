const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function tambah(a,b){
    return(a+b);
};

function kurang(a,b){
    return(a-b);
};

function kali(a,b){
    return(a*b);
};

function bagi(a,b){
    if(b === 0){
        console.log('Tidak bisa melakukan pembagian dengan angka 0');
        return;
    }
    else{
        return(a/b);
    }
};

console.log('\n ----- Kalkulator Sederhana -----');
console.log('1. Penjumlahan');
console.log('2. Pengurangan');
console.log('3. Perkalian');
console.log('4. Pembagian \n');

rl.question('Pilih Operasi (1-4): ', (numSelect) => {
    if(!['1','2','3','4'].includes(numSelect)){
        console.log('Operasi perhitungan tidak tersedia.');
        return rl.close();
    };

    rl.question('Masukkan angka pertama: ', (a) => {
        rl.question('Masukkan angka kedua: ', (b) => {
            const angka1 = parseFloat(a);
            const angka2 = parseFloat(b);
            let hasil, operasi;

            switch(numSelect){
                case '1':
                    hasil = tambah(angka1,angka2);
                    operasi = 'Penjumlahan';
                    break;
                case '2':
                    hasil = kurang(angka1,angka2);
                    operasi = 'Pengurangan';
                    break;
                case '3':
                    hasil = kali(angka1,angka2);
                    operasi = 'Perkalian';
                    break;
                case '4':
                    hasil = bagi(angka1,angka2);
                    operasi = 'Pembagian';
                    break;
            }

            console.log(`\n ----- Hasil Kalkulasi -----`);
            console.log(`Operasi: ${operasi}`);
            console.log(`Angka 1: ${angka1}`);
            console.log(`Angka 2: ${angka2}`);
            console.log(`Hasil: ${hasil} \n`);
            rl.close();
        });
    });
});