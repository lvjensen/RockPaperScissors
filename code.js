let player_choice;

function rock() {

  document.getElementById('self').innerHTML = '<img src="images/rock.png">';
  player_choice = "rock";
  do_game()

}

function paper() {

  document.getElementById('self').innerHTML = '<img src="images/paper.png">';
  player_choice = "paper";
  do_game()

}

function scissors() {

  document.getElementById('self').innerHTML = '<img src="images/scissors.png">';
  player_choice = "scissors";
  do_game()

}

function do_game() {

  let computer_choice = Math.floor(Math.random() * 3);
  if (computer_choice == 0) {

    document.getElementById('opponent').innerHTML = '<img src="images/rock.png">';
    switch (player_choice) {
      case "rock":
        document.getElementById('end').innerHTML = "😑 It's a tie! 😲";
        break;
      case "paper":
        document.getElementById('end').innerHTML = "🎉 You're a Winner!!! 😆";
        break;
      case "scissors":
        document.getElementById('end').innerHTML = "🤬 You're a Loser!!! 😭";
        break;

    }
  } else if (computer_choice == 1) {

    document.getElementById('opponent').innerHTML = '<img src="images/paper.png">';
    switch (player_choice) {
      case "rock":
        document.getElementById('end').innerHTML = "🤬 You're a Loser!!! 😭";
        break;
      case "paper":
        document.getElementById('end').innerHTML = "😑 It's a tie! 😲";
        break;
      case "scissors":
        document.getElementById('end').innerHTML = "🎉 You're a Winner!!! 😆";
        break;

  }} else if (computer_choice == 2) {

    document.getElementById('opponent').innerHTML = '<img src="images/scissors.png">';
    switch (player_choice) {
      case "rock":
        document.getElementById('end').innerHTML = "🎉 You're a Winner!!! 😆";
        break;
      case "paper":
        document.getElementById('end').innerHTML = "🤬 You're a Loser!!! 😭";
        break;
      case "scissors":
        document.getElementById('end').innerHTML = "😑 It's a tie! 😲";
        break;

  }

}
}
