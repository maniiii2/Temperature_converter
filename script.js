function convert() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    
    if (!isNaN(celsius)) {
      document.getElementById("fahrenheit").value = (celsius * 1.8 + 32).toFixed(2);
    } else if (!isNaN(fahrenheit)) {
      document.getElementById("celsius").value = ((fahrenheit - 32) / 1.8).toFixed(2);
    }
  }