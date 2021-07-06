/* alert("async estudos");
function soma(x){
return new Promise((resolve, reject)=> {
        setTimeout(()=> {
        resolve(x + 5000);
            },3000);  
})
}
soma(230)
.then((resultado)=> {
console.log(`Resolvido, Resultado: ${resultado}`);
    })
     promises*/

    function sum(x){
return new Promise((resolve, reject) => {
    if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
        reject('Ta de Brincadeira comigo Node')
    }
 setTimeout(()=> { resolve(x + 6000);                     
 },3000);  
  })      
 }       
         async function main (){    
try {
    const resultado = await sum("#");
    console.log( `Resultado com Async/Await: ${resultado}` );
} catch (error) {
    console.log( `Temos Problemas: ${error}` )
    console.log(Date)
}
 }
  main();      