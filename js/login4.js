function view(){
    const input = document.getElementById('pass'),
          ico = document.getElementById('eye');

          if(input.type === 'password'){
            input.type = 'text';
            eye.classList.add('ri-eye-line');
            eye.classList.remove('ri-eye-off-line');
          }
          else{
            input.type = 'password';
 
            eye.classList.remove('ri-eye-line');
            eye.classList.add('ri-eye-off-line');
          }
}