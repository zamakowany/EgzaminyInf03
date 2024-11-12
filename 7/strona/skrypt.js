function pokazBlok2() {
    document.getElementById('blok1').style.visibility = 'hidden';
    document.getElementById('blok2').style.visibility = 'visible';
}

function pokazBlok3() {
    document.getElementById('blok2').style.visibility = 'hidden';
    document.getElementById('blok3').style.visibility = 'visible';
}

function zatwierdz() {
    const haslo1 = document.getElementById("haslo1").value;
    const haslo2 = document.getElementById("haslo2").value;
    if (haslo1 !== haslo2) {
        alert('Podane hasła różnią się');
    } else {
        const imie = document.getElementById("imie").value;
        const nazwisko = document.getElementById("nazwisko").value;
        console.log(`Witaj ${imie} ${nazwisko}`);
    }
}