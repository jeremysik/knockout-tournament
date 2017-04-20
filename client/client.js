var tournamentService = new TournamentService();

const startTournament = () => {
	let numberOfTeams = parseInt(document.getElementById('numberOfTeams').value),
		teamsPerMatch = parseInt(document.getElementById('teamsPerMatch').value);

	if(!Number.isInteger(numberOfTeams) || !Number.isInteger(teamsPerMatch) || numberOfTeams < 1 || teamsPerMatch < 1) {
		alert('Please enter integers greater than 0');
	}
	
	tournamentService.createTournament(numberOfTeams, teamsPerMatch)
		.then((tournamentDetails) => {
			//tournamentService.getMatch(tournamentDetails.tournamentId, 0, )
		});
}