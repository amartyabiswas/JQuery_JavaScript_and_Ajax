var obj={
  Name : "Amartya Biswas",
  Age: '18 Years',
  Sex: 'Male',

    Intro: function() {
        console.log(this.Name);
        console.log(this.Age);
        console.log(this.Sex);
}
};

//obj.Intro();


//Sorting of numbers
var arr = [40, 100, 1, 5, 25, 10];
//debugger;
arr.sort(function(a, b){return a - b});
console.log(arr);

//Deleting an object
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
delete person.age;   // or delete person["age"];


//Function..

var myFunction=function (a,b) {
  return a+b;
};
console.log(myFunction(2,5));



//Calling an object using an object...

var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
var myObject = {
    firstName:"Mary",
    lastName: "Doe"
};
x = person.fullName.call(myObject);


//Query Selectors
var m = document.querySelectorAll("p");
console.log(m);

//Accessing the form
var y = document.forms["frm"];
var text = "";
var i;
for (i = 0; i < y.length; i++) {
    text += y.elements[i].value + "<br>";
}
document.getElementById("textBox").innerHTML = text;


//Adding CSS, We need to specify the index while accessing by tagName
document.getElementsByTagName('h2')[0].style.color='blue';

//Add Event Listeners
document.getElementsByTagName('h3')[0].style.cursor='pointer';
document.getElementsByTagName('h3')[0].addEventListener('click',function () {
    alert('Hello Amartya')
});