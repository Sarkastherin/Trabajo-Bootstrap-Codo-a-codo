// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        else{
            showCount(form)
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  //document.getElementById('resumen').addEventListener('submit',showCount)
  function showCount(form){
    event.preventDefault()
    var quantity = form.quantity.value;
    var category = form.category.value;
    var resumen = 200*quantity-(200*quantity*(category/100))
    document.getElementById('total').innerText = resumen
    console.log('Resumen: '+resumen)
  }
  function deleteForm(){
    document.getElementById('formulary').reset()
    document.getElementById('total').innerText = ''
  }