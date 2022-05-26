let firstName = document.querySelector('#firstName')
let surname = document.querySelector('#surname')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')
let observation = document.querySelector('#observation')
let checkIn = document.querySelector('#checkIn')
let checkOut = document.querySelector('#checkOut')
let room = document.querySelector('#room')
let firstNameOk = false
let surnameOk = false
let emailOk = false
let phoneOk = false
let checkInOk = false
let checkOutOk = false
let roomOk = false


function validatesFirstName() {
    let txtFirstName = document.querySelector("#txtFirstName");
    
    if (firstName.value.length < 3) {
        txtFirstName.innerHTML = "Invalid name";
        txtFirstName.style.color = "red";
    } else {
        txtFirstName.innerHTML = "Valid name";
        txtFirstName.style.color = "green";
        firstNameOk = true
    }
}

function validatesSurname() {
    let txtSurname = document.querySelector("#txtSurname");
    if (surname.value.length < 3) {
        txtSurname.innerHTML = "Invalid surname";
        txtSurname.style.color = "red";
    } else {
        txtSurname.innerHTML = "Valid surname";
        txtSurname.style.color = "green";
        surnameOk = true
    }
}

function validatesEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.co')==-1){
        txtEmail.innerHTML = 'Invalid email'
        txtEmail.style.color = 'red'
        
    } else {
        txtEmail.innerHTML = 'Valid email'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validatesPhone() {
    let txtPhone = document.querySelector("#txtPhone");
    if (phone.value.length == 11) {
        txtPhone.innerHTML = "Valid number";
        txtPhone.style.color = "green";
        phoneOk = true
    } else {
        txtPhone.innerHTML = "Invalid number";
        txtPhone.style.color = "red";
    }
}

function validatesCheckIn() {
    let txtCheckIn = document.querySelector("#txtCheckIn");
    if (!checkIn.value) {
        txtCheckIn.innerHTML = "Invalid date";
        txtCheckIn.style.color = "red";
    } else {
        txtCheckIn.innerHTML = "Valid date";
        txtCheckIn.style.color = "green";
        checkInOk = true
    }
}

function validatesCheckOut() {
    let txtCheckOut = document.querySelector("#txtCheckOut");
    if (!checkOut.value) {
        txtCheckOut.innerHTML = "Invalid date";
        txtCheckOut.style.color = "red";
    } else {
        txtCheckOut.innerHTML = "Valid date";
        txtCheckOut.style.color = "green";
        checkOutOk = true
    }
}

function validatesRoom() {
    let txtRoom = document.querySelector("#txtRoom");
    if (!room.value) {
        txtRoom.innerHTML = "You must selec an option";
        txtRoom.style.color = "red";
    } else {
        txtRoom.innerHTML = "Valid option";
        txtRoom.style.color = "green";
        roomOk = true
    }
}


function send(){
    if(firstNameOk == true && surnameOk==true && phoneOk==true && emailOk==true){
        alert('Form successfully submitted.')
    } else {
        alert('You forgot to fill some info. Please, check your form before sending it.')
    }
}