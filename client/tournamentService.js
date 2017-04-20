class TournamentService {

	createTournament(numberOfTeams, teamsPerMatch) {
		let data = `numberOfTeams=${numberOfTeams}&teamsPerMatch=${teamsPerMatch}`;

		return this._call('POST', '/tournament', data)
			.catch((error) => {
				console.log('catch', error);
			});
	}

	getTeam(tournamentId, teamId) {

		this._call('GET', `/team?tournamentId=${tournamentId}&teamId=${teamId}`)
			.then((response) => {
				console.log('response', response);
			})
			.catch((error) => {
				console.log('catch', error);
			});

	}

	getMatch(tournamentId, round, match) {

		this._call('GET', `/match?tournamentId=${tournamentId}&round=${round}&match=${match}`)
			.then((response) => {
				console.log('response', response);
			})
			.catch((error) => {
				console.log('catch', error);
			});

	}

	getWinner(tournamentId, teamScores, matchScore) {

	}

	_call(method, path, data = {}) {
		let options = {
			method: 'GET'
		};

		if(method == 'POST') {
			options = {  
			    method: 'post',  
			    headers: {  
			      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
			    },  
			    body: data
			}
		}

		return fetch(path, options)  
			.then(function(response) {  
				if (response.status !== 200) {  
					// Reject promise
			   		throw(response);
				}

			  	// Get the response
			  	return response.json();  
			});
	}

}