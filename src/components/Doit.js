import React from 'react'

function Doit() {
    function doit() { 
    document.querySelector('input[list]').addEventListener('input', function(e) {
        var input = e.target,
            list = input.getAttribute('list'),
            options = document.querySelectorAll('#' + list + ' option'),
            hiddenInput = document.getElementById(input.getAttribute('id') + '-hidden'),
            inputValue = input.value;
    
        hiddenInput.value = inputValue;
    
        for(var i = 0; i < options.length; i++) {
            var option = options[i];
    
            if(option.innerText === inputValue) {
                hiddenInput.value = option.getAttribute('key');
                break;
            }
        }
    }); }

   setTimeout(doit, 15000);
  return (
    <div>
      
    </div>
  )
}

export default Doit
