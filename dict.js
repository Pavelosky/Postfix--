// Define the Dictionary class
class Dictionary {
    constructor() {
    this.dictionary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // Using an array to store keys
    this.variables = []; // Using an array to store values
  }
  
  // Method to add a key-value pair
  add(key, value) {
    const index = this.getIndex(key);
    this.variables[index] = value; // Add value to array
  };
  
  // Method to get a value by key
  get(key) {
    const index = this.getIndex(key);
    if (index !== -1) {
      return this.variables[index]; // Return value if key exists
    }
    return undefined; // Return undefined if key does not exist
  };
  
  // Helper method to get index of a key
  getIndex(key) {
    for (let i = 0; i < this.dictionary.length; i++) {
      if (this.dictionary[i] === key) {
        return i; // Return index if key exists
      }
    }
    return false; // Return false if key does not exist
  };

}
  
  // Test the Dictionary implementation
  const myDictionary = new Dictionary();
  
  myDictionary.add('A', 6);
  myDictionary.add('B', 5);
  myDictionary.add('G', 7);
  myDictionary.add('J', 19);
  console.log(myDictionary.get('A')* myDictionary.get('J')); // Output: A*B 