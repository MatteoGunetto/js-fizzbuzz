// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

const contenitore = document.getElementById("contenitore");
console.log(contenitore);


for(let i = 1; i <= 100; i++)
{
    let text;
    if (i % 15 == 0){
        text="FizzBuzz";

    }
    else if (i % 3 == 0){
        text= "Fizz";
        fizz= "fizz";

    }else if (i % 5 == 0){
        text="Buzz";
    }
    else{
        text= i;
    }

    console.log(text)

    const numero =document.createElement("span");
    numero.classList.add("colore")
    numero.append(text)
    contenitore.append(numero)

   
    
}

