const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function klasifikasiUsia(usia) {
    if(usia >= 0 && usia <= 12){
        return 'Anak-Anak';
    } else if(usia >= 13 && usia <= 17){
        return 'Remaja';
    } else if(usia >= 18 && usia <= 59){
        return 'Dewasa';
    } else if(usia >= 60){
        return 'Lansia';
    } else{
        return 'Usia tidak valid.';
    };
};

let jumlahAnak = 0;
let jumlahRemaja = 0;
let jumlahDewasa = 0;
let jumlahLansia = 0;

let jumlahOrang = 0;
let counter = 0;

function inputOrang(){
    rl.question('Masukkan jumlah orang: ', (input) =>{
        jumlahOrang = parseInt(input);
        inputUsia();
    });
}

function inputUsia(){
    if (counter < jumlahOrang) {
        rl.question(`Masukkan usia orang ke-${counter+1}: `, (input) => {
            let usia = parseInt(input);
            let kategori = klasifikasiUsia(usia);

            if(kategori === "Anak-Anak"){
                jumlahAnak++;
            } else if(kategori === "Remaja"){
                jumlahRemaja++;
            } else if(kategori === "Dewasa"){
                jumlahDewasa++;
            } else if(kategori === "Lansia"){
                jumlahLansia++;
            }

            counter++;
            inputUsia();
        });
    }
        else {
            Hasil();
        }
    }


function Hasil() {
    console.log('\n ----- Hasil Klasifikasi Usia: -----');
    console.log(`Anak-Anak: ${jumlahAnak} orang`);
    console.log(`Remaja: ${jumlahRemaja} orang`);
    console.log(`Dewasa: ${jumlahDewasa} orang`);
    console.log(`Lansia: ${jumlahLansia} orang`);
    rl.close();
}

inputOrang();