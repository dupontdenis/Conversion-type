let calcul = function(radius) {
    return radius + radius ;
  };
  
  document.getElementById('calcBtn').addEventListener('click', function() {
    let radius = document.getElementById("radius").value; //recuperation de la valeur entrée
  
    let diameter = calcul (radius);
    
    document.getElementById("surface").innerHTML = ` </br>
    Diameter is ${diameter}cm 🤡`;
  });
  