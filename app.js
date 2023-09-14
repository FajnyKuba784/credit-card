function zamiennumer(){
    const numer = document.getElementById("numeri").value
    document.getElementById("numertext").innerHTML = numer
    console.log(numer)
    


    
 
    const h2Element = document.getElementById("numertext");

   
    const tekst = h2Element.textContent;


    let nowyTekst = '';
    
  
    if(tekst.length<=13){
    for (let i = 0; i < tekst.length; i++) {
       
        nowyTekst += tekst[i];
        
        if ((i + 1) % 3 === 0 && i !== tekst.length - 1) {
            if(nowyTekst.length<=13){
            nowyTekst += ' ';}
        }
        
      
    }
    }
    
    
    h2Element.textContent = nowyTekst;


}