// What will the following code output?

const myPrecious = {
    firstName: "Joan",
    func: function() {
        const self = this;
        console.log("Name: " + this.firstName);
        console.log("Name: " + self.firstName);
        (function() {
            console.log("Name: " + this.firstName);
            console.log("Name: " + self.firstName);
        }());
    }
};
myPrecious.func();