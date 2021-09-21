import Alunos from './queryAlunos.js';
document.getElementById("pesquisar").addEventListener('click', () =>{
    /*let cpf = document.getElementById('cpf').value
    console.log(document.getElementById('cpf').value)*/
    new Alunos(document.getElementById('cpf').value);
    
});



document.addEventListener('keydown', function(event) { 
    if(event.keyCode != 46 && event.keyCode != 8){
      var i = document.getElementById("cpf").value.length; 
      if (i === 3 || i === 7) 
        document.getElementById("cpf").value = document.getElementById("cpf").value + ".";
      else if (i === 11) 
        document.getElementById("cpf").value = document.getElementById("cpf").value + "-";
    }
  });
