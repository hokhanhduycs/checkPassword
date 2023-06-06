let pswrd = document.getElementById('pswrd'),
    toggleBtn = document.getElementById('toggleBtn')

let lowerCase = document.getElementById('lower'),
    upperCase = document.getElementById('upper'),
    digit = document.getElementById('number'),
    specialChar = document.getElementById('special'),
    minLength = document.getElementById('length')

//show hide password
toggleBtn.onclick = function(){
    if(pswrd.type === 'password'){
        pswrd.setAttribute('type', 'text')
        toggleBtn.classList.add('hide')
    }else{
        pswrd.setAttribute('type', 'password')
        toggleBtn.classList.remove('hide')
    }
}

function checkPassword(data){
    //javascript regular expression pattern
    const lower = new RegExp('(?=.*[a-z])'),
          upper = new RegExp('(?=.*[A-Z])'),
          number = new RegExp('(?=.*[0-9])'),
          special = new RegExp('(?=.*[!@#\$\^&\*%])'),
          length = new RegExp('(?=.{8,})')
    
    // lower case validation check
    if(lower.test(data)){
        lowerCase.classList.add('valid')
    }else{
        lowerCase.classList.remove('valis')
    }

    if(upper.test(data)){
        upperCase.classList.add('valid')
    }else{
        upperCase.classList.remove('valid')
    }

    if(number.test(data)){
        digit.classList.add('valid')
    }else{
        digit.classList.remove('valid')
    }

    if(special.test(data)){
        specialChar.classList.add('valid')
    }else{
        specialChar.classList.remove('valid')
    }

    if(length.test(data)){
        minLength.classList.add('valid')
    }else{
        minLength.classList.remove('valid')
    }
}