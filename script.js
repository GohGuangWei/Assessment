const csv_file = document.getElementById("csvFile");
const messageDisplay = document.getElementById("message");
const alpha = document.getElementById("alphaResult");
const beta = document.getElementById("betaResult");
const charlie = document.getElementById("charlieResult");
csv_file.addEventListener("change", readFile);


//Reads file to be used for calculation
function readFile(event){
    // Gets the first file that is selected
    const file = event.target.files[0];

    // Error handling
    if ((!file) && (!file.type.startsWith("csv"))){
        window.alert("Error reading file. Please select CSV file.");
        return;
    }

    const reader = new FileReader();

    // Split data to rows and remove header row
    reader.onload = () => {
        var text = reader.result.trim().split('\n'); // Split data into rows
        const dataRows = text.slice(1); // Removes first line
        calc(dataRows); //Calculates results based on data
    }

    // Reads file
    reader.readAsText(file);
}

// Calculates results based of data
function calc(result){
    const dataObjects = {}; // Array for objects

    // Data stored as object with a key and value for easier calculation
    result.forEach(row => {
        const [key, value] = row.split(','); // Each row would be an object
        dataObjects[key.trim()] = parseInt(value.trim()); // Key assigned to value as object
    })


    // Calcluation
    const alphaResult = dataObjects['A5'] + dataObjects['A20'];
    const betaResult = dataObjects['A15'] / dataObjects['A7'];
    const charlieResult = dataObjects['A13'] * dataObjects['A12'];

    // Result displayed to table
    alpha.textContent = alphaResult; 
    beta.textContent = betaResult; 
    charlie.textContent = charlieResult; 

}

