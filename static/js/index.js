// from data.js
// var tableData = data;

// Reference to the table body
var tbody = d3.select("tbody");

// Append UFO sighting data
function createTable() {
  data.forEach((ufoSightings) => {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  })
  })
}

// Create table
createTable(data);

// Select reference to the filtering button
var button = d3.select("#filter-button")

// Select eference to the input field
var inputfield = d3.select("#datetime")

// Select table reference 
var table = d3.selectAll("td")

// Create click function
function handleClick() {
  // stop page from refreshing
  d3.event.preventDefault()

  // Variable for datetime input
  var date = inputfield.property("value");
  console.log(date)

  // Remove existing data from table 
  table.remove()

  // Create date filtering function
  var newData = data.filter(d => d.datetime === date)

  // Render new table with filtered data
  function filteredTable() {
    newData.forEach((ufoSightings) => {
      var row = tbody.append("tr");
      Object.entries(ufoSightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      })
      })
  }
  console.log(newData)

  filteredTable(newData);
};

// On function for table filtering
button.on("click",handleClick);
