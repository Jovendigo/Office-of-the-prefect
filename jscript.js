flatpickr("#date", {
    dateFormat: "Y/m/d",
    allowInput: true,
});
const {ipcRenderer} = require('electron');
let studentId = document.getElementById('studentId');
let violation = document.getElementById('violation');
let typeOfViolation = document.getElementById('typeOfViolation');
let csHours = document.getElementById('csHours');
let dateOccurred = document.getElementById('dateOccurred');
let contactNumber = document.getElementById('contactNumber');
let Submit = document.getElementById('submit');


Submit.addEventListener('click', () => {
    let data = '{' +
        '\\"studentId\\":\\"' + studentId.value + '\\",' +
        '\\"violation\\":\\"' + violation.value + '\\",' +
        '\\"typeOfViolation\\":\\"' + typeOfViolation.value + '\\",' +
        '\\"csHours\\":\\"' + csHours.value + '\\"' +
        '\\"dateOccurred\\":\\"' + dateOccurred.value + '\\"' +
        '\\"contactNumber\\":\\"' + contactNumber.value + '\\"' +
        '}';
    ipcRenderer.send('item-channel', data);
});