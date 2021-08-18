document.getElementById('login-submit').addEventListener('click',function(){
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;
    
    // password fild 
    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;

    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        window.location.href = 'banking.html'
    }
    else{
        console.log('roang email and password');
    }
})

