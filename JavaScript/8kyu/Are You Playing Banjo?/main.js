const areYouPlayingBanjo = (name) => name + (name.toLowerCase()[0] == "r" ? " plays " : " does not play ") + "banjo"

console.log(areYouPlayingBanjo("Martin"), "Martin does not play banjo");
console.log(areYouPlayingBanjo("Rikke"), "Rikke plays banjo");