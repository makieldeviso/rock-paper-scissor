# rock-paper-scissor

## About
A rock paper scissor game with a cute and refreshing japanese theme.

## Motivation
This is a personal project created to showcase skill in creating structured web app though HTML, styling through CSS and adding interactivity though javascript.

This project covers the foundation of javascript such as variables, data types, conditionals and functions to programmatically solve problems.

This project also encouraged me to make use of javascript developer tools (Chrome Dev Tool). Which helped me view the DOM, simulate screen sizes, and debug my JS code. The dev tool, with its features allowed me to ease styling the DOM by viewing CSS pseudostate, arranged properties, and the box model of my project.

Understanding errors is also a takeaway on this project. By figuring out what went wrong in the code and grasping what kind of error it is, it becomes easier to solve and debug problems. Also, finding where the error originates, initiates the mind how to solve the problem. Meanwhile, I've also learned how to research solutions for errors. In addition, error messages and the debugger is your best friend.

## For the users
1. The page starts up with a screen that includes a START button. Clicking the button officially starts the game. Note: a music also starts playing so check your volume.

2. The bottom right side of the UI shows the computer character with a dialog. This dialog also informs the user with the current gameplay sequence and results to the user's actions. 

3. The player is given 3 action buttons 'rock', 'paper', and 'scissors' to choose action from and a lock-in button to finalize action. The player can switch between the 3 action buttons while an action is NOT YET LOCKED-IN. The computer with (...) dialog awaits the player to lock in action.

4. Once the action is locked-in, the players will show their hands. In typical rock, paper, scissor game fashion, paper beats rock, scissor beats paper and rock beats scissor.

5. The computer character's dialog will announce the round result. The round counter will increment and a point will be added to the winning side's scoreboard. 

6. After a while, a new round will start. The player's buttons will reappear on the UI. Meanwhile, a last hand icon will appear above the VS icon, indicating the players' previous actions.

7. The game progresses until a player reach 5 points. Then, a winner is announced.

8. A reset button will appear on the UI. Clicking this will restart the game.

## For the programmers
Most of the script in the project emphasizes DOM manipulation.

The START button on page load is assigned to an eventListener that adds a round banner, moves the character sprites to position then adds a for loop script to check score requirements.

The for loop is combined with an async function. Such that it pauses the loop while it awaits the user action. If the score requirements are not yet met, the loop reiterates and pauses again while it wait for the next user input.

Said async function is the playRound function, wherein a Promise is resolved when a user clicks an action button, the computer randomly picks a hand, then a script calculates the game logic.

The loop force ends on the 100th round when there is no winner yet and announces a game draw. A reset button however shows up when a winning score is met.

The reset button reloads the page to restart the game.

## Live Preview
This project can be viewed on [rock-paper-scissor](https://makieldeviso.github.io/rock-paper-scissor/)


## Asset used
[Dummy Dojo](https://giphy.com/dummydojo) - [gif src](https://media1.giphy.com/media/SwD8zjSqnkz7mv6PtR/giphy.gif?cid=790b761136704740194c668196176ac072e4effd45f3bbb0&rid=giphy.gif&ct=s)

[ProfessorLightWAV](https://giphy.com/professorlightwav) - [gif src](https://media1.giphy.com/media/xV723nBI0NPa4V8kjg/giphy.gif?cid=ecf05e47sbvv633e91no51uajbk2l2rxfmlitzeia1ujsv8f&rid=giphy.gif&ct=s)

[Chris](https://giphy.com/chris/) - [gif src](https://media4.giphy.com/media/xT9IgMgdur6larNA1a/giphy.gif?cid=ecf05e47fm71y0kax4vrmjnwbh3fxey2hompkh7i4prrn0e9&rid=giphy.gif&ct=s)

[adidas](https://giphy.com/channel/adidas) - [gif src](https://giphy.com/gifs/adidas-high-school-football-fns-friday-night-stripes-Q8TlZx35X6xDdJidvT?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=)


[gif src](https://media3.giphy.com/media/5umDcAQsdJT9e/giphy.gif?cid=ecf05e47s6v1yqza0u8v1fmlm9uxz8ezozumizinov3d9q67&rid=giphy.gif&ct=s)


Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=17882">Pixabay</a>


Dead 8bit - Daleonfire
Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=41400">Pixabay</a>


8bit Music for Game - annoyedCactus
Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=68698">Pixabay</a>


suits you - classicgames
Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=69233">Pixabay</a>

Children Logo - Music For Videos
Sound Effect by <a href="https://pixabay.com/users/music_for_videos-26992513/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=116101">Music_For_Videos</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=116101">Pixabay</a>

Cork - FrankyBoomer
Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=85200">Pixabay</a>


select sound - u 2fbuaev0zn
Sound Effect by <a href="https://pixabay.com/users/u_2fbuaev0zn-30247713/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=121244">u_2fbuaev0zn</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=121244">Pixabay</a>


healpop - shyguy014
Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=46004">Pixabay</a>

Wrong Answer - Universfield
Sound Effect by <a href="https://pixabay.com/users/universfield-28281460/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=126515">Universfield</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=126515">Pixabay</a>

Woosh SFX - jhyland
Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=95844">Pixabay</a>


Beeping Robot or Machine - Jofae
Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=102595">Pixabay</a>