document.getElementById('diabetesForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const gulaDarah = parseFloat(document.getElementById('gulaDarah').value);
    const usia = parseInt(document.getElementById('usia').value);
    const tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value);
    const beratBadan = parseFloat(document.getElementById('beratBadan').value);
    const lingkarPinggang = parseFloat(document.getElementById('lingkarPinggang').value);


    let risiko = '';


    const imt = beratBadan / ((tinggiBadan / 100) ** 2);


    if (gulaDarah > 140 || (usia > 45 && imt > 25) || lingkarPinggang > 90) {
        risiko = 'Anda berisiko tinggi terkena diabetes. Disarankan untuk berkonsultasi dengan dokter.';
    } else {
        risiko = 'Anda berada dalam kategori risiko rendah untuk diabetes. Tetap jaga pola hidup sehat!';
    }

    
    document.getElementById('hasil').innerText = risiko;
});