// Iteration 1: Names and Input
//

let hacker1 = "Juan";
console.log (`El nombre del conductor es ${hacker1}`);

let hacker2 = "Jose"; 
console.log (`El nombre del navegante es ${hacker2}`);

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
  console.log (`El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres`)
}
else if (hacker1.length < hacker2.length) {
  console.log (`Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres`)
}
else {
    console.log (`¡Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres`)
}

// Iteration 3: Loops

let Uppername = "";


for (let index = 0; 
    index < hacker1.length;
    index++)
    {
    Uppername += hacker1 [index].toUpperCase() + " ";
    }

    console.log(Uppername)

// Nombre del Navegador en ordern inverso

let reverseName = ""; 

for (let index = hacker2.length -1 ;
    index >= 0;
    index--)

    {
        reverseName += hacker2[index];
    }

    console.log (reverseName);

// orden lexicográfico

let lexiorder = [ hacker1 , hacker2];

console.log (lexiorder.sort());


  if (hacker1 === hacker2) {
         console.log ('¿Qué? Los dos tienen el mismo nombre');
    }
    else if (hacker1 < hacker2)
    {
         console.log ('El nombre del conductor va primero')
    }
    else { 
         console.log ( {hacker2}, 'el navegador va primero')
       
    }

