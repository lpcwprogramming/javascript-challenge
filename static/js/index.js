// Reference to the table body
var tbody = d3.select("tbody");

// Create table function
function createTable() {

    // Clear existing data
    tbody.html("");

    // Populate UFO table with full data
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

// Select table reference 
var table = d3.selectAll("td")

// Create click function
function handleClick() {
  // stop page from refreshing
  d3.event.preventDefault()

  // Variable for datetime input
  var date = d3.select("#datetime").property("value");
  console.log(date)

  // Remove existing data from table 
  // table.remove()

  // Create date filtering function
  var newData = data.filter(d => d.datetime === date)

  // Render new table with filtered data
  function filteredTable() {

    // Clearing Existing Data
    tbody.html("");

    // Populate table with filtered data
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
