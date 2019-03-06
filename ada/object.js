var object = {
    _name: 'Amy Pond',
    savedValue: function (){
        return this._name;
    }
};

var copiedSavedValue = object.savedValue;

console.log(copiedSavedValue());
console.log(object.savedValue());