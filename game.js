game = {
	playerChosen: false,
	aiChosen: false,
	battleMode: false,
	player: {
		hp : 0,
		batk: 0,
		atk: 0,
		ctk: 0
	},
	ai: {
		hp: 0,
		atk: 0,
		ctk: 0
	},
	characters: [ {
		name: "skywalker",
		avatar: "http://66.media.tumblr.com/58745472300705702d6b6d3c98098f72/tumblr_inline_nu379kwOEq1sk47ji_100.jpg",
		hp: 100,
		atk: 5,
		batk: 5,
		ctk: 10
	},
	{
		name: "chewbacca",
		avatar: "http://images6.fanpop.com/image/photos/32800000/Chewbacca-miabear1998-32833718-118-148.jpg",
		hp: 120,
		atk: 1,
		batk: 1,
		ctk: 1
	},
	{
		name: "Darth Vader",
		avatar: "http://images5.fanpop.com/image/photos/27400000/Anakin-anakin-skywalker-27449141-100-100.jpg",
		hp: 150,
		atk: 7,
		batk: 7,
		ctk: 10
	}],

	battle: function() {
		// while (player.hp > 0 || ai.hp > 0) {
			this.ai.hp -= this.player.atk;
			this.player.hp -= this.ai.ctk;
			this.player.atk = this.player.atk + this.player.batk;
		// }
	},

	
}
var charDiv = $('#characters');

for (i in game.characters) {
	btn = $('<img>');
	btn.attr('data-person',i);
	btn.attr('class',"charIcon img-responsive");
	btn.attr("src",game.characters[i].avatar);
	charDiv.append(btn);


}



$('.charIcon').on("click", function(){
	if (game.playerChosen === false) {
	game.player = game.characters[$(this).data('person')];
	$('#playerBattle').attr('src', game.player.avatar);
	//add name & hp
	$('#playerName').html('Name: '+game.player.name);
	$('#playerHp').html('Health: '+game.player.hp);
	$('#gameMsg').html('Choose Your Opponent');
	game.playerChosen = true;
	$(this).remove();
} else if (game.aiChosen === false) {
	game.ai = game.characters[$(this).data('person')];
	//add pic
	$('#aiBattle').attr('src', game.ai.avatar);
	//add name & hp
	$('#aiName').html('Name: '+game.ai.name);
	$('#aiHp').html('Health: '+game.ai.hp);
	$('#gameMsg').html('Use Attack Command to Fight!');
	$(this).remove();
	game.aiChosen = true;
	game.battleMode = true;
};
});



//game loop should be player select, ai selct, battle until hp = 0 then if enemies remain ai select then battle until hp = 0, else win
$('#attackBtn').on("click", function() {
	if (game.battleMode) {
		game.battle();
		$('#aiHp').html('Health: '+game.ai.hp);
		$('#playerHp').html('Health: '+game.player.hp);
		if (game.player.hp < 0) {
			console.log("you lost");
			$('#gameMsg').html("You've Been Defeated");
		} else if (game.ai.hp < 0) {
			game.aiChosen = false;
			game.battleMode = false;
			$('#gameMsg').html('Choose Your Next Opponent');
		};
	};
	
});