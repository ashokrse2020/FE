//https://www.patterns.dev/posts/proxy-pattern
//https://javascriptpatterns.vercel.app/patterns/design-patterns/proxy-pattern
let person = {
  name: 'Ashok',
  age: 29,
  nationality: 'india'
}

const personProxy = new Proxy(person, {
  get: (obj, path) => {
    return Reflect.get(obj, 'path');
  },
  set: (obj, path, value) => {
    return Reflect.set(obj, path, value);
  }
})

person.name = 'inspire';
person.age = 24;
console.log("Person Name is", person.name);
console.log("Person age is", person.age);
console.log("Person nationality is", person.nationality);

export default function App(){

  return (
  <div>
    <p>{`Person Name is ${person.name}`}</p>
    <p>{`Person age is ${person.age}`}</p>
    <p>{`Person nationality is ${person.nationality}`}</p>
  </div>
  );
}