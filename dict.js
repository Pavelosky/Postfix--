// Define the Dictionary class
class Dictionary {
    constructor() {
    this.dictionary = []; // Using an array to store key-value pairs
  }
  
  // Method to add a key-value pair
  add(key, value) {
    if (!this.isValidKey(key)) {
      console.log("Invalid key! Please use keys from A-Z.");
      return;
    }
    const index = this.getIndex(key);
    if (index !== -1) {
      this.dictionary[index].value = value; // Update value if key exists
    } else {
      this.dictionary.push({ key, value }); // Add new key-value pair
    }
  };
  
  // Method to get a value by key
  get(key) {
    if (!this.isValidKey(key)) {
      console.log("Invalid key! Please use keys from A-Z.");
      return undefined;
    }
    const index = this.getIndex(key);
    if (index !== -1) {
      return this.dictionary[index].value; // Return value if key exists
    }
    return undefined; // Return undefined if key does not exist
  };
  
  // Method to remove a key-value pair by key
  remove(key) {
    if (!this.isValidKey(key)) {
      console.log("Invalid key! Please use keys from A-Z.");
      return;
    }
    const index = this.getIndex(key);
    if (index !== -1) {
      this.dictionary.splice(index, 1); // Remove key-value pair
    }
  };
  
  // Method to check if a key exists
  containsKey(key) {
    if (!this.isValidKey(key)) {
      console.log("Invalid key! Please use keys from A-Z.");
      return false;
    }
    return this.getIndex(key) !== -1;
  };
  
  // Helper method to get index of a key
  getIndex(key) {
    for (let i = 0; i < this.dictionary.length; i++) {
      if (this.dictionary[i].key === key) {
        return i; // Return index if key exists
      }
    }
    return -1; // Return -1 if key does not exist
  };
  
  // Helper method to validate key (A-Z)
  isValidKey(key) {
    return /^[A-Z]$/.test(key);
  };

}
  
  // Test the Dictionary implementation
  const myDictionary = new Dictionary();
  
  myDictionary.add("A", 6);
  myDictionary.add("B", 5);
  console.log(myDictionary.get("A") * myDictionary.get("B")); // Output: A*B 
  
  
  