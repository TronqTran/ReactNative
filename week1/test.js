//Coding Challenge #1
var Mark = {
    weight: 78,
    height: 1.69,
    BMI: function() {
        return this.weight / this.height ** 2;
    }
}

var John = {
    weight: 92,
    height: 1.95,
    BMI: function() {
        return this.weight / this.height ** 2;
    }
}

var Mark = {
    weight: 95,
    height: 1.88,
    BMI: function() {
        return this.weight / this.height ** 2;
    }
}

var John = {
    weight: 85,
    height: 1.76,
    BMI: function() {
        return this.weight / this.height ** 2;
    }
}

//Coding Challenge #2
if (Mark.BMI() > John.BMI()) {
    console.log('Marks BMI is higher than Johns!');
} else {
    console.log('Johns BMI is higher than Marks!');
}

if (Mark.BMI() > John.BMI()) {
    console.log('Marks BMI (' + Mark.BMI() + ') is higher than Johns (' + John.BMI() + ')!');
} else {
    console.log('Johns BMI (' + John.BMI() + ') is higher than Marks (' + Mark.BMI() + ')!');
}