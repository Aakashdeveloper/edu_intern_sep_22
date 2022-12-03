const validateFname = () => {
    let fname = document.getElementById('fname');
    let fout = document.getElementById('fout');
    let fdiv = document.getElementById('fdiv');

    if(fname.value.trim().length == 0 ){
        fout.innerText="Please Enter First Name"
        fdiv.classList.add('has-error')
    }else{
        fout.innerText=""
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
        let data = fname.value.trim()
        fname.value = data.charAt(0).toUpperCase()+data.slice(1).toLowerCase()
    }
}


function validateEmail(){
    let email = document.getElementById('email').value;
    if(email.trim().length == 0){
        document.getElementById('eout').innerText = "Please enter email"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            document.getElementById('eout').innerText = "Please Enter Valid Email"
        }else{
            document.getElementById('eout').innerText = ""
        }
    }
}

const validatePassword = () => {
    let pwd = document.getElementById('pwd').value;
    let pout = document.getElementById('pout');
    let ppout = document.getElementById('ppout');
    if(pwd.trim().length<15){
        if(pwd.trim().length<8){
            pout.innerText="Min length of password is 8";
            ppout.style.display = "block";
            ppout.style.backgroundColor = "red";
        }else if(pwd.trim().length<11){
            pout.innerText="";
            ppout.style.backgroundColor = "orange";
        }
    }else{
        ppout.style.backgroundColor = "green";
    }
}

const showPassword= () => {
    let pwd = document.getElementById('pwd');
    if(pwd.type == 'password'){
        pwd.type = 'text'
    }else{
        pwd.type = 'password'
    }
}

const getCountry= () => {
    let country = document.getElementById('country').value;
    document.getElementsByTagName('span')[1].innerText=`You have selected ${country}`
}