// Load external JSON using fetch
fetch("data.json")
  .then(response => response.json()) // Convert response to JS object
  .then(data => {
    console.log("Data loaded from external JSON file:", data);
    // Access data
    console.log("Name:", data.name);
    console.log("City:", data.address.city);
  })
  .catch(error => console.error("Error loading JSON:", error));
