const suggestions = [
    {
        id: '1',
        title: "ReactJS за неделю",
        voters: new Set()
    },
    {   
        id:'2',
        title: "vue.js основы",
        voters: new Set()
    }
];

function getSuggestions(){
    return suggestions;
};

function getSuggestion(id) {
    return suggestions.find(suggestion => suggestion.id == id);
};

function addSuggestion(title) {
    const id = Date.now();

    suggestions.push({
        title,
        id,
        voters: new Set()
    })
};

module.exports = {
    getSuggestions,
    getSuggestion,
    addSuggestion
};