//speed detector

let speedlimit = 57
function speedDetector() {
  const demeritPoints = Math.floor((speedlimit - 70) / 5);
  if (speedlimit <= 70) {
    return "Ok"

  } else if(demeritPoints > 12){
      return "Licence suspended"

  }else{
    return demeritPoints
  }
  

}

console.log(speedDetector());
