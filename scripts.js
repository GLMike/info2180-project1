window.addEventListener('load', function(){

    let button = document.querySelector('.newsletter button');
    let email = document.getElementById('email');
    let msg = document.querySelector('.message');

    button.addEventListener('click', function(){
        event.preventDefault();
        let val = email.value;
        
        if(val === ''){
            msg.textContent = ("Enter Valid Email Address");
        }
        
        else{
            msg.innerHTML = `Thank you! Your email address ${val} has been added.`;
        }
        
        email.value = '';
    });
});

