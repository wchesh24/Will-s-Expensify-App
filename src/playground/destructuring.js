
// Object Destruction

//const person = {
    //name: 'William',
    //age: '26',
    //location: {
      //  city: 'Medellin',
    //    temp: 92
  //  }
//};

//const { name: firstName = 'Anonymous', age } = person;

//const name = person.name;
//const age = person.age;

//console.log(`${firstName} is ${age}.`);

//const { city, temp: temperature } = person.location;
//if (city && temperature) {
  //  console.log(`It's ${temperature} in ${city}.`);
//}

//const book = {
  //  title: 'Ego is the Enemy',
    //author: 'Ryan Holiday',
    //publisher: {
      //  name: 'Penguin'
    //}
//};

//const { title, author } = book;
//const { name: publisherName = 'Self-Published' } = book.publisher;

  //  console.log(`${title} and the author is ${author} published by ${publisherName}.`);



//console.log(publisherName);

// Array destructuring

//const address = ['1299 S Juniper Street', 'Medellin', 'Colombia', '19147'];

//const [, city, state = 'Seattle'] = address;

//console.log(`You are in ${city} ${state}.`);

const item = ['Coffee', '$2.00', '6.50', '$2.75'];

const [drink, , mediumPrice, ] = item;

console.log(`A medium ${drink} (hot) costs ${mediumPrice}`);