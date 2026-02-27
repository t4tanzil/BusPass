const stations = [
"Aldershot GO",
"Allandale Waterfront GO",
"Appleby GO",
"Aurora GO",
"Barrie South GO",
"Bradford GO",
"Bramalea GO",
"Brampton GO",
"Burlington GO",
"Centennial GO",
"Clarkson GO",
"Cooksville GO",
"Danforth GO",
"Dixie GO",
"Downsview Park GO",
"Durham College Oshawa GO",
"Eglinton GO",
"Erindale GO",
"Etobicoke North GO",
"Exhibition GO",
"Georgetown GO",
"Gormley GO",
"Guildwood GO",
"Hamilton GO Centre",
"Kennedy GO",
"Kipling GO",
"Kitchener GO",
"Lakeshore East GO",
"Lakeshore West GO",
"Langstaff GO",
"Lincolnville GO",
"Long Branch GO",
"Malton GO",
"Maple GO",
"Markham GO",
"Meadowvale GO",
"Mimico GO",
"Milton GO",
"Mount Joy GO",
"Mount Pleasant GO",
"Newmarket GO",
"Niagara Falls GO",
"Oakville GO",
"Oshawa GO",
"Pickering GO",
"Port Credit GO",
"Rexdale GO",
"Richmond Hill GO",
"Rutherford GO",
"Scarborough GO",
"St. Catharines GO",
"Stouffville GO",
"Stratford GO",
"Union Station GO",
"Uxbridge GO",
"Vaughan Metropolitan Centre GO",
"Whitby GO",
"York University GO"
];
function populateStations() {
    const fromSelect = document.getElementById("from");
    const toSelect = document.getElementById("to");

    stations.forEach((station, index) => {
        const option1 = document.createElement("option");
        option1.value = index + 1;
        option1.textContent = station;
        fromSelect.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = index + 1;
        option2.textContent = station;
        toSelect.appendChild(option2);
    });
}

function goToTicket() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    if (from === to) {
        alert("From and To cannot be the same station.");
        return;
    }

    window.location.href = `index.html?from=${from}&to=${to}`;
}

populateStations();