let firstname = document.getElementById('fname')
let password = document.getElementById('pass')
let moblile = document.getElementById('mobile')
let gmail = document.getElementById('gmail')
let subject = document.getElementById('subject')
let add = document.getElementById('add')
let flag = 1

function validateform() {
    
    if (firstname.value == "") {
        document.getElementById('usernameerror').innerHTML = 'enter user name'
        flag = 0

    } else if (firstname.value.length < 4) {
        document.getElementById('usernameerror').innerHTML = "enter maximum four carector"
        flag = 0
    }
    else {
        document.getElementById("usernameerror").innerHTML = ""
        flag = 1
    }


    if (password.value == '') {
        document.getElementById('passworderror').innerHTML = 'enter your password'
        flag = 0
    }



    else if (password.value.length < 4) {
        document.getElementById('passworderror').innerHTML = 'enter more than four'
        flag = 0


    }
    else {
        document.getElementById('passworderror').innerHTML = ""
        flag = 1
    }


    if (mobile.value == "") {
        document.getElementById('mobileerror').innerHTML = 'enter mobile no'
        flag = 0

    } else if (mobile.value.length<10 || mobile.value.length >10) {
        document.getElementById('mobileerror').innerHTML = "enter ten number"
        flag = 0

    }
    else {
        document.getElementById("mobileerror").innerHTML = ""
        flag = 1

    }

    if (gmail.value == "") {
        document.getElementById('gmailerror').innerHTML = 'enter gmail'
        flag = 0
    } else if (gmail.value == gmail) {
        document.getElementById('gmailerror').innerHTML = "enter maximum four carector"
        flag = 0
    }


    else {
        document.getElementById("gmailerror").innerHTML = ""
        flag = 1

    } if (subject.value == "") {
        document.getElementById('subjecterror').innerHTML = 'enter user name'
        flag = 0

    } else if (subject.value.length < 4) {
        document.getElementById('subjecterror').innerHTML = "enter maximum four carector"
        flag = 0

    }


    else {
        document.getElementById("subjecterror").innerHTML = ""
        flag = 1

    } if (add.value == "") {
        document.getElementById('adderror').innerHTML = 'enter user name'
        flag = 0

    } else if (add.value.length < 4) {
        document.getElementById('adderror').innerHTML = "enter maximum four carector"
        flag = 0

    }


    else {
        document.getElementById("adderror").innerHTML = ""
        flag = 1

    }

    if (flag) {
        return true

    }
    else {
        return false
    }


}
