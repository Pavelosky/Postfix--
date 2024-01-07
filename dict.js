// Define the Dictionary class
class Dictionary {
    constructor() {
    this.dictionary = []; // Using an array to store keys
    this.variables = []; // Using an array to store values
  }
  
  // Method to add a key-value pair
  add(key, value) {
    if (!this.isValidKey(key)) {
        console.log("Invalid key! Please use keys from A-Z.");
        return;
      }
    this.dictionary.push(key); // Add key to array
    const index = this.getIndex(key);
    this.variables[index] = value; // Add value to array
  };
  
  // Method to get a value by key
  get(key) {
    if (!this.isValidKey(key)) {
        console.log("Invalid key! Please use keys from A-Z.");
        return;
      }
    const index = this.getIndex(key);
    if (index !== -1) {
      return this.variables[index]; // Return value if key exists
    }
    return undefined; // Return undefined if key does not exist
  };
  
  // Helper method to get index of a key
  getIndex(key) {
    if (!this.isValidKey(key)) {
        console.log("Invalid key! Please use keys from A-Z.");
        return;
      }
    for (let i = 0; i < this.dictionary.length; i++) {
      if (this.dictionary[i] === key) {
        return i; // Return index if key exists
      }
    }
    return false; // Return false if key does not exist
  };

  isValidKey(key) {
    return /^[A-Z]$/.test(key);
  };

}
  
  // Test the Dictionary implementation
  const myDictionary = new Dictionary();
  
  myDictionary.add('f', 6);
  myDictionary.add('B', 5);
  myDictionary.add('G', 7);
  myDictionary.add('J', 19);
  console.log(myDictionary.get('A')* myDictionary.get('J')); // Output: A*B 
  console.log(myDictionary.dictionary); // Output: G*J
  console.log(myDictionary.variables); // Output: G*J