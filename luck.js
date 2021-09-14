const advice = [
    "Cannot predict now",
    "As I see it, yes",
    "You may rely on it",
    "Very doubtful",
    "Yes",
    "Nope",
    "Yes definitely",
    "Focus and ask again",
    "My reply is no",
    "Most likely",
    "It is certain",
    "Outlook not so good",
    "Better not tell you now"
];

function randomAdvice() {
	return Math.floor(Math.random()*advice.length);
};
