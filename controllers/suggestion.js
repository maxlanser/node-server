const { getSuggestions, getSuggestion, addSuggestion } = require('../models/suggestion');

const suggestions = getSuggestions();


function showSuggestions(req, res) {
    res.render("suggestions", {
		suggestions
	});
}

function showSuggestion(req, res) {
    const suggestion = getSuggestion(req.params.id);
    res.render("suggestion", {
        suggestion
    });
}

function createSuggestion(req, res) {
    const title = req.body.title;

    addSuggestion(title);

    req.session.message = "Предложение принято";

    res.redirect("/suggestions");
}

function toggleVote(req, res) {
    const username = req.username;
    const suggestion = getSuggestion(req.params.id);

    if (suggestion.voters.has(username)) {
      suggestion.voters.delete(username);
      req.session.message = 'голос отменен';
    } else {
      suggestion.voters.add(username);
      req.session.message = 'Голос принят';
    }

    res.redirect(`back`);
}


module.exports = {
	showSuggestion,
	showSuggestions,
	createSuggestion,
	toggleVote
}