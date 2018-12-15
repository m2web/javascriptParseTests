//decode to string "id=7&name=Pablo+Matías&lastname=Gomez&githubUsername=pablomatiasgomez"
var decodedString = decodeURI("id=7&name=Mark+Mat%C3%ADas&lastname=McFadden&githubUsername=m2web");

//Next do the following with the decodedString
//Escape " (quotes): stays the same as there are no quotes
//Replace & (ampersand) with a , (comma): id=7,name=Mark+Matías,lastname=McFadden,githubUsername=m2web
//Replace = (equals) with a semicolon (:)  id:7,name:Mark+Matías,lastname=M:Fadden,githubUsername:m2web
//Suround with curly brakets and quotes: { id: '7', name: 'Mark+Matías', lastname: 'McFadden', githubUsername: 'm2web' }
var result = JSON.parse('{"' + decodedString.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"')  + '"}');
console.log(result);