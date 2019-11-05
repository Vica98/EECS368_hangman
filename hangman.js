var m_guessed;
var m_word;
var m_output;
function saveInput()
{
m_word = "hello";
m_guessed = document.getElementById('guess').value;
m_output = document.getElementById("out");
for(let i=0;i<m_word.length;i++)
{m_output.value += "-"};
compareInput();
}

function compareInput()
{
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
if(foundLetter){
changeOutput();
}else{

}
}

function changeOutput()
{
  for(let i=0;i<m_word.length;i++)
  {
    if(m_word.charAt(i)==m_guessed)
    {
      m_output = setCharAt(m_output.value,i, m_guessed);
    }
  }
}
