// What is the output?
var hero = {
    name: 'Captain Awesome',
    getSecretIdentity: function(){
        return this.name;
    }
};

var stolenSecretIdentity = hero.getSecretIdentity//.bind(hero) //hero must be binded when assigning a new variable

console.log(stolenSecretIdentity());
console.log(hero.getSecretIdentity());