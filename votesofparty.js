function showComparisonScores() {
		
	
	var totalVotes = Number(document.getElementById("votes").value);
	var candidates = Number(document.getElementById("candidates").value);
	var outputText =""
	
	for (var i = 1; i <= candidates; i++) {
		var nom = totalVotes / i
		outputText += i+". candidate: "+ nom.toFixed(0)+'<br>';
		document.getElementById("answer").innerHTML = outputText;
	}		
}
		
