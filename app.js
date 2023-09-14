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

function nazw(){
    const name = document.getElementById("imiei").value
    document.getElementById("imiet").innerHTML = name
    console.log(name)

 
}
function date(){
    const dates = document.getElementById("datai").value
    const date = new Date(dates);

const year = date.getFullYear();
const month = date.getMonth() + 1;
const yeare = year[0] 
var twoDigitYear = year.toString().substr(-2);
console.log(yeare)


const withSlashes = [month, twoDigitYear].join('/');
console.log(withSlashes)
document.getElementById("datat").innerHTML = withSlashes


}


function img(id){
   
    console.log(id)
    if(id==1){
        document.getElementById("karta").style.backgroundImage ="url('R.jfif')"
    }
    else if(id==2){
        document.getElementById("karta").style.backgroundImage ="url('th.jfif')"
    }
    

else{
    document.getElementById("karta").style.backgroundImage ="url('pobierz.jfif')"
    

}
}














/* Store the element in el */
let el = document.getElementById('karta')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = 20 * ((xVal - width / 2) / width)
  
  /* Calculate the rotation along the X-axis */
  const xRotation = -20 * ((yVal - height / 2) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})