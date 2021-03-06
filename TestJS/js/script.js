// Object literals and "this"
var literalCircle = {
    radius: 10,

    getArea: function() {
        console.log(this);
        var myself = this;

        var incRadius = function() {
            myself.radius = 20;
            console.log(myself);
        };
        incRadius();
        console.log(this);

        return Math.PI * Math.pow(this.radius, 2);
    },
};

console.log(literalCircle.getArea());