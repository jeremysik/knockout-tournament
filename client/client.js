var tournamentService = new TournamentService();

const startTournament = () => {
	let numberOfTeams = document.getElementById('numberOfTeams').value,
		teamsPerMatch = document.getElementById('teamsPerMatch').value;

	if(numberOfTeams < 1 || teamsPerMatch < 1 || !Number.isInteger(numberOfTeams) || !Number.isInteger(teamsPerMatch)) {
		alert('Please enter integers greater than 0');
	}
	console.log(numberOfTeams, teamsPerMatch);
}