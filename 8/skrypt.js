let idZamowienia = 0;

document.addEventListener('DOMContentLoaded', zaznaczBraki);

function zaznaczBraki() {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const ilosc = parseInt(row.cells[2].textContent);
        if (ilosc === 0) {
            row.cells[2].style.backgroundColor = 'red';
        } else if (ilosc > 0 && ilosc <= 5) {
            row.cells[2].style.backgroundColor = 'yellow';
        } else {
            row.cells[2].style.backgroundColor = 'Honeydew';
        }
    });
}

function aktualizuj(button) {
    const row = button.parentElement.parentElement;
    const nowaIlosc = prompt('Podaj nową ilość:');
    if (nowaIlosc !== null) {
        row.cells[2].textContent = nowaIlosc;
        zaznaczBraki();
    }
}

function zamow(button) {
    idZamowienia++;
    const row = button.parentElement.parentElement;
    const produkt = row.cells[0].textContent;
    alert(`Zamówienie nr: ${idZamowienia} Produkt: ${produkt}`);
}