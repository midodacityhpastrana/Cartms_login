let Photo = document.getElementById('result');
let file = document.getElementById('demo');

Photo.addEventListener('click', () => {
  file.click();
});

function readFile() {
  var reader = new FileReader();
  var file = document.getElementById('demo').files[0];

  reader.onload = function(e) {
    document.getElementById('result').src = e.target.result;
    
  }
  reader.readAsDataURL(file);
}

function Mostrar() {
      document.getElementById('img').style.display = 'block';
        
    }
    function voltar() {
      document.getElementById('img').style.display = 'none';
    }