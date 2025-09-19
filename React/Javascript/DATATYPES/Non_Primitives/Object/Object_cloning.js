// ^1.Iteration
const originalObject = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
};

const clonedObject = {};

for (const key in originalObject) {
  clonedObject[key] = originalObject[key];
}

console.log(clonedObject); // &Output: { name: 'John Doe', age: 30, address: { street: '123 Main St', city: 'Anytown', state: 'CA' } }

// ^ 2.SPREAD OPERATOR
const clonedObject2 = { ...originalObject };

// ^ 3.Assign ==>Object.assign()
const clonedObject3 = Object.assign({}, originalObject);

// *spread operator, Object.assign() creates a shallow copy.
