var randNo1=Math.floor(Math.random()*6)+1;
var randNo2=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randNo1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randNo2+".png");
if(randNo1>randNo2){
  document.querySelector("h1").textContent="🚩Player 1 wins";
}else if (randNo1==randNo2) {
  document.querySelector("h1").textContent="draw!";
}else{
  document.querySelector("h1").textContent="Player 2 wins🚩";
}
