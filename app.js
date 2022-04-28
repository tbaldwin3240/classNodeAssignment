const importedAddZs = require("./names");
const importedNames = require("./zzz");

importedNames.forEach(function(currentName) {
    importedAddZs(currentName);
});