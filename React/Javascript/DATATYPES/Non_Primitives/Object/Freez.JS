
// ^Object.freeze makes an object immutable by preventing the addition of new properties, the removal of existing properties, and the modi  cation of the enumerability, con  gurability, and writability of existing properties.
var obj = {
  name: "Arif",
  foo: 'foo',
  age: 12,
  sex: "Male",
};

Object.freeze(obj); // Cannot add new properties

obj.newProperty = true;
// Cannot modify existing values or their descriptors

obj.foo = "not foo";
Object.defineProperty(obj, "foo", {
  writable: true,
}); 
// Cannot delete existing properties

delete obj.foo;

// Nested objects are not frozen
obj.bar.push(4);
obj.baz.foo = "new foo";
