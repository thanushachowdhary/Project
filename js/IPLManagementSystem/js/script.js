// Sample Data
let teams = [
  {name:"Mumbai Indians", captain:"Rohit Sharma", wins:9, matches:14},
  {name:"Chennai Super Kings", captain:"MS Dhoni", wins:10, matches:14}
];

let players = [
  {name:"Rohit Sharma", team:"Mumbai Indians", role:"Batsman"},
  {name:"Jasprit Bumrah", team:"Mumbai Indians", role:"Bowler"},
  {name:"MS Dhoni", team:"Chennai Super Kings", role:"Wicket-Keeper"}
];

let matches = [
  {date:"27 Feb 2026", team1:"Mumbai Indians", team2:"Chennai Super Kings", result:"TBD"},
  {date:"28 Feb 2026", team1:"RCB", team2:"KKR", result:"TBD"}
];

let points = [
  {team:"Mumbai Indians", matches:14, wins:9, losses:5, points:18},
  {team:"Chennai Super Kings", matches:14, wins:10, losses:4, points:20}
];

// Render Teams
function showTeams() {
  let container = document.getElementById("teamsContainer");
  if(!container) return;
  container.innerHTML = "";
  for(let t of teams) {
    container.innerHTML += `<div class="team-card">
      <h3>${t.name}</h3>
      <p>Captain: ${t.captain}</p>
      <p>Wins/Matches: ${t.wins}/${t.matches}</p>
    </div>`;
  }
}

// Render Players
function showPlayers() {
  let container = document.getElementById("playersContainer");
  if(!container) return;
  container.innerHTML = "";
  for(let p of players) {
    container.innerHTML += `<div class="player-card">
      <h3>${p.name}</h3>
      <p>Team: ${p.team}</p>
      <p>Role: ${p.role}</p>
    </div>`;
  }
}

// Render Matches
function showMatches() {
  let container = document.getElementById("matchesContainer");
  if(!container) return;
  container.innerHTML = "";
  for(let m of matches) {
    container.innerHTML += `<div class="match-card">
      <p>Date: ${m.date}</p>
      <p>${m.team1} vs ${m.team2}</p>
      <p>Result: ${m.result}</p>
    </div>`;
  }
}

// Render Points Table
function showPoints() {
  let tbody = document.getElementById("pointsBody");
  if(!tbody) return;
  tbody.innerHTML = "";
  for(let p of points) {
    tbody.innerHTML += `<tr>
      <td>${p.team}</td>
      <td>${p.matches}</td>
      <td>${p.wins}</td>
      <td>${p.losses}</td>
      <td>${p.points}</td>
    </tr>`;
  }
}

// Contact Form
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("message").value;
  if(name=="" || email=="" || msg=="") {
    alert("Please fill all fields");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}

// Run on page load
window.onload = function() {
  showTeams();
  showPlayers();
  showMatches();
  showPoints();
};