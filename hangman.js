
var secretWord;
var wrongGuess;
var playerLost;
var playerWon;
var usedLetters;
function startGame(){
   //performing initial checks
   if(playerWon){
      alert("You already won, click on start to play again");
   }else {
     if(playerLost){
       alert("You lost, click on start to play again");
     }else {
       m_output = document.getElementById("out").value;
       if(m_output==""){
         alert("Start the game before guessing");
       }else {
         m_guessed =document.getElementById("guess").value;
         if(m_guessed.length>1){
           alert("You can only guess one letter at a time!");
         }else {
           if(m_guessed==""){
           alert("Guess something, don't leave this blank!");
           }else {
             var found_it = compareInput(secretWord);
             if(found_it==true){
             changeOutput();
           }else {
             changeImage();
           }
           }
         }
       }
     }

   }

}
    createGame = () =>{
    m_word = "testing";
    selectWord();
    console.log("did it");
    m_output = document.getElementById("out");
    m_output.value="";
    m_message= document.getElementById("message");
    m_message.value="";
    playerLost=false;
    playerWon=false;
    usedLetters=[];
    for(let i=0;i<m_word.length;i++)
    {m_output.value += "-"};
    console.log(m_output.value);
    secretWord=m_word;
    wrongGuess=0;
    }

    compareInput = (m_word) =>{
      console.log(m_output.value);
      console.log(m_word);
      m_output = document.getElementById("out");
      m_guessed =document.getElementById("guess").value;
      console.log(m_guessed);
      var alreadyGuessed=false;
      for(let i = 0; i < usedLetters.length; i++) {
        if(usedLetters[i]==m_guessed){
          alreadyGuessed=true;
        }
      }
      usedLetters.push(m_guessed);
      let foundLetter = false;
      if(alreadyGuessed){
        alert("You already guessed this letter, try something else");
      }else {
        for(let i =0 ;i <m_word.length ; i++){
          if(m_guessed==m_word.charAt(i)){
            foundLetter = true;
            console.log(foundLetter);
            console.log(m_word.charAt(i));
            break;
          }else{
            foundLetter = false;
            console.log(foundLetter);
          }
        }
      if(!foundLetter){
      wrongGuess++;
      }
      }
      return foundLetter;
    }

    changeOutput = () => {
    console.log(m_output.value);
    m_output.value= document.getElementById("out").value;
    m_message.value = document.getElementById("message").value;
    console.log(m_output.value);
      for(let i=0;i<m_word.length;i++)
      {
        if(m_word.charAt(i)==m_guessed)
        {
          console.log(i);
          m_output.value= m_output.value.substr(0,i) + m_guessed + m_output.value.substr(i+1);
        }
      }
      console.log(m_output.value);
      if(m_output.value==secretWord){
        playerWon=true;
        m_message.value="YOU WON! to play again click on start";
      }
    }

    function changeImage()
    {
      theImage = document.getElementById("theImage");
      m_output.value= document.getElementById("out").value;
      m_message.value = document.getElementById("message").value;
      console.log(m_message.value);
      if(wrongGuess==1){
        theImage.src = "img4.jpg";
      }else if(wrongGuess==2) {
        theImage.src = "img3.jpg";
      }else if (wrongGuess==3) {
        theImage.src = "img2.jpg";
      }else if (wrongGuess==4) {
        theImage.src = "img1.jpg";
        m_output.value=secretWord;
        m_message.value="You lost! try again by clicking on start";
        playerLost=true;
      }else {
        console.log("we shouldnt be here");
      }
    }

    function selectWord()
    {
      console.log("the rand num is");
      var words = ["hello",
      "testing",
      "here",
      "vica"];
      var randNum = Math.floor((Math.random() * 3) + 0);

      console.log(words[randNum]);

    }
