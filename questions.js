var languagesArrayCreation = function () {
  // var languages = ["Html", "CSS", "Java", "PHP"];// [] sert a créer un tableau
  var languages = [];
  languages.push("Html", "CSS", "Java", "PHP");
  return languages;

}

var numbersArrayCreation = function () {
  // var nombres = [0, 1, 2, 3, 4, 5];
  var nombres = [];
  nombres.push(0, 1, 2, 3, 4, 5)
    return nombres;
}

var ElementReplacement = function (languages) {
  // languages.splice(2, 1, 'Javascript');
  // return languages;
  languages[2]='Javascript';
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby', 'Python');// .push() sert à ajouter des nouveaux élements a la fin d'un tableau
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2, -1);// .unshift() sert à ajouter des élements au début d'un tableau (ARRAY)
  // var array = [0, 1, 2, 3, 4, 5];
  // array.splice(0, 0, -2, -1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift();// .shift() sert à supprimer le premier élement d'un tableau
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop();//.pop() sert à supprimer le dernière élement d'un tableau
  return languages;
}

var stringToArray = function (socialMediaInString) {
  var reseaux = socialMediaInString.split(',');// .split() sert à convertir une chaîne de caractère en tableau
  return reseaux;
}

var arrayToString = function (languages) {
  var languages = languages.toString();// .toString() convertie un tableau en chaîne de caractères et retourne le résultat
  return languages;
}

var arraySort = function (socialMedia) {
socialMedia = socialMedia.sort();// .sort() sert à trier un tableau par ordre alphabétique lorsque des paramètres ne sont pas renseigné.
  return socialMedia;
}

var arrayInvert = function (languages){
var languages = languages.reverse();// .reverse() sert à inverser les élements d'un tableau
  return languages;
}
