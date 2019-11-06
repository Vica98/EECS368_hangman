
//function start all over when called, figure out how to save data...maybe call change output with string and return changed string
var secretWord;
var wrongGuess;
function startGame(){
   //performing initial checks
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
    createGame = () =>{
    m_word = "hello";
    console.log("did it");
    m_output = document.getElementById("out");
    m_output.value="";
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
      let foundLetter = false;
      for(let i=0;i<m_word.length;i++){
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
    return foundLetter;
    }

    changeOutput = () => {
    console.log(m_output.value);
    m_output.value= document.getElementById("out").value;
    console.log(m_output.value);
      var left_side_word;
      var right_side_word;
      for(let i=0;i<m_word.length;i++)
      {
        if(m_word.charAt(i)==m_guessed)
        {
          console.log(i);
          m_output.value= m_output.value.substr(0,i) + m_guessed + m_output.value.substr(i+1);
        }
      }
      console.log(m_output.value);
    }

    function changeImage()
    {
      console.log("chagning imageeeeeeeeeee");
    }
