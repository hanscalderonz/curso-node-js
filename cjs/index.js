// globalThis apunta a global en node, y a window en react. Por ende siempre es mejor usar la variable globalThis en lugar de window/global.
console.log("hola, mundo");

// CommonJs require import
const { sum } = require('./sum');
console.log(sum(1, 2));