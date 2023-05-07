predictionsArray = [
  "IT IS CERTAIN",
  "IT IS DECIDEDLY SO",
  "WITHOUT A DOUBT",
  "YES - DEFINITELY",
  "YOU MAY RELY ON IT",
  "AS I SEE IT YES",
  "MOST LIKELY",
  "OUTLOOK GOOD",
  "YES",
  "SIGNS POINT TO YES",

  "REPLY HAZY, TRY AGAIN",
  "ASK AGAIN LATER",
  "BETTER NOT TELL YOU NOW",
  "CANNOT PREDICT NOW",
  "CONCENTRATE AND ASK AGAIN",

  "DON'T COUNT ON IT",
  "MY REPLY IS NO",
  "MY SOURCES SAY NO",
  "OUTLOOK NOT SO GOOD",
  "VERY DOUBTFUL"
]

let eight = document.querySelector('#eight')
let eightStyle = document.getElementById('eight')
let display = document.querySelector('.innerdiv')
let displayStyle = document.getElementsByClassName('innerdiv')
let eightBall = document.querySelector('#eight-ball')
let eightBallStyle = document.getElementById('eight-ball')

shakeCount = 0


predictionDisplay = () => {
  display.style.background = "#0e0320"
  eight.remove()

  let randomPrediction = predictionsArray[Math.floor(Math.random() * predictionsArray.length)];

  var responseDiv = document.createElement("div");
  responseDiv.setAttribute("id", "response");
  display.appendChild(responseDiv)
  

  var prediction = document.createElement("p")
  prediction.setAttribute("id", "prediction")
  display.appendChild(prediction)
  prediction.innerText = (randomPrediction)

}

changeDisplay = () => {
  changeResponseDiv = document.getElementById("response")
  changeResponseDiv.remove()

  changePredictionText = document.getElementById("prediction")
  changePredictionText.remove()
}


eightBall.addEventListener("click", () =>{
  if(shakeCount > 0){
    changeDisplay()
  }

  ('eight-ball');
  eightBallStyle.classList.add('shake');

  stopShake = () => {
    eightBallStyle.classList.remove('shake');
  }
  setTimeout(stopShake, 1300);

  setTimeout(predictionDisplay, 1100);


  console.log(shakeCount)

  shakeCount++



})
