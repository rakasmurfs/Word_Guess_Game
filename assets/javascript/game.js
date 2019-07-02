var newSpan = "<span>";
var wrongLetters=[];
var guesses = 5; //guesses remaining
var selectedWordArr = [];
        //Letters pressed variable
var wins = 0;
var presses = [];
var blankSelectedWordArr = [];                       
        //pull a word
var words = ["peterang", "megcopter", "petercopter", "peterdactyl", "hindenpeter", "popemobile"]
var selectedWord = words[Math.floor(Math.random() * words.length)];
var wordComplete = false;


function newGame()  //start anew!
    {
        guesses = 5;
        presses = []
        document.getElementById("wordGuess").innerHTML = "";
        document.getElementById("wrongLetters").innerHTML = "";
        document.getElementById("guessesLeft").innerHTML = guesses;
        document.getElementById("winCount").innerHTML = wins;
        blankSelectedWordArr = []
        selectedWordArr = []
        selectedWord = words[Math.floor(Math.random() * words.length)];
        document.getElementById("winCount").innerHTML = wins;

        for (i=0; i < selectedWord.length; i++)
        {
            var x = selectedWord.charAt(i);
            selectedWordArr.push(x);
        }
        for (let i = 0; i < selectedWordArr.length; i++) 
            {
                blankSelectedWordArr.push("_ ");
                document.getElementById("wordGuess").append(blankSelectedWordArr[i]) ;
            }
    }
function restartGame()  //start anew!
    {
        wins=0
        guesses = 5;
        presses = []
        document.getElementById("wordGuess").innerHTML = "";
        document.getElementById("wrongLetters").innerHTML = "";
        document.getElementById("guessesLeft").innerHTML = guesses;
        document.getElementById("winCount").innerHTML = wins;
        blankSelectedWordArr = []
        selectedWordArr = []
        selectedWord = words[Math.floor(Math.random() * words.length)];
        document.getElementById("winCount").innerHTML = wins;
    
        for (i=0; i < selectedWord.length; i++)
        {
            var x = selectedWord.charAt(i);
            selectedWordArr.push(x);
        }
        for (let i = 0; i < selectedWordArr.length; i++) 
            {
                blankSelectedWordArr.push("_ ");
                document.getElementById("wordGuess").append(blankSelectedWordArr[i]) ;
            }
    }
function getItem()
    {


        //push selected word characters into an array
 
     //   for (i=0; i < selectedWord.length; i++)
       //     {
         //       var x = selectedWord.charAt(i);
           //     selectedWordArr.push(x);
          //  }


         // display as "_"
       // for (let i = 0; i < selectedWordArr.length; i++) 
         //   {
           //     blankSelectedWordArr.push("_ ");
            //    document.getElementById("wordGuess").append(blankSelectedWordArr[i]) ;
           // }



        document.onkeypress = function(keyPressed)
            { //reads key that is pressed and stores it in lettersHit
                var lettersHit="";
                var keyPressed = keyPressed || window.event, charCode = keyPressed.keyCode || keyPressed.which, lettersHit = String.fromCharCode(charCode);
                    if(guesses > 0) //prevents any actions if you have no guesses left after pressing a key
                        {
                            
                        //Adds Displays incorrect key presses to your screen
                        //Decreases guesses by 1 if you press incorrect key
                            if(presses.includes(lettersHit) == false)
                                {
                                presses.push(lettersHit);
                                wrongLetters.push(lettersHit)
                                if(selectedWordArr.includes(lettersHit)==false)
                                    {
                                    document.getElementById("wrongLetters").append(lettersHit)   
                                    guesses--
                                // wins++   THIS WAS A TEST
                                    //document.getElementById("winCount").innerHTML = wins;
                                    document.getElementById("guessesLeft").innerHTML = guesses;
                                    console.log(guesses)
                                    if(guesses == 0)
                                        {
                                           // document.location.reload(); //restarts the page if you are out of guesses
                                            newGame()
                                        }
                                    }
                                }
                            //replace blank space with correct letter
                            if(selectedWordArr.includes(lettersHit))
                                {
                                    for (q=0; q<selectedWordArr.length; q++)
                                        {
                                            if(lettersHit == selectedWordArr[q])
                                                {
                                                    blankSelectedWordArr[q] = selectedWordArr[q];
                                                    document.getElementById("wordGuess").innerHTML = "";

                                                    for(w=0;w<blankSelectedWordArr.length;w++)
                                                        {
                                                            document.getElementById("wordGuess").append(blankSelectedWordArr[w]);
                                                        }
                                                
                                                    
                                                }
                                        }
                                }
                                //checks if word has been completely guessed by seeing if there are no more blank spaces in array after key press
                            if(blankSelectedWordArr.indexOf("_ ") == -1)
                                 {
                                            wins++
                                            newGame()

                                }


                        }
                
            }



            
    }

    
newGame();
getItem();

document.getElementById("restart").onclick=function(){restartGame()};