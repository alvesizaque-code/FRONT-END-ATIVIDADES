async function imagemAPI(){

const retornoAPI = await fetch('https://dog.ceo/api/breeds/image/random');
const dadosAPI = await retornoAPI.json();
document.querySelector(".img-dog").src = dadosAPI.message;
console.log("retornoAPI");

}
imagemAPI()