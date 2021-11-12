var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for(var i = 0; i < num.length; i++){
    console.log(num[i])
}

for(var i = num.length; i >= 0; i--){
    console.log(num[i])
}

var fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}



var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var array = [ ]
for(var i = 0; i <= num.length; i++){
    array.push(num[i])
    console.log (array)
}

for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
}

var eoFruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(var i = 0; i <eoFruit.length; i+=2){
    console.log(eoFruit[i])
}



var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  for(var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
  }

  namesArray = [ ]
  for(var i = 0; i < peopleArray.length; i++){
    namesArray.push(peopleArray[i].name)
    console.log(namesArray)
  }

  occupationsArray = [ ]
  for(var i = 0; i < peopleArray.length; i++){
      occupationsArray.push(peopleArray[i].occupation)
      console.log(occupationsArray)
  }

  eonamesArray = [ ]
  for(var i = 0; i < peopleArray.length; i+=2){
    eonamesArray.push(peopleArray[i].name)
    console.log(eonamesArray)
  }
  
  eooccupationsArray = [ ]
  for(var i = 1; i < peopleArray.length; i+=2){
      eooccupationsArray.push(peopleArray[i].occupation)
      console.log(eooccupationsArray)
  }

// Not sure how to do the goldmedal one
 

