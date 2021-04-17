
const exampleData = [{"id": 1, "Name": "Gran", "Score": 10}, {"id": 2, "Name": "Djeeta", "Score": 20}, {"id": 3, "Name": "Lulia", "Score": 30}];
const exampleNewData = [{"id": 4, "Name": "Vikala", "Score": 2020}, {"id": 5, "Name": "Catura", "Score": 2021}];

function examples() {
    const example1 = new EasyLeaderboard();
    example1.createLeaderboard("Example1", "Example1", "SampleLeaderboard", ["Name", "Score"], exampleData);
    
    const example2 = new EasyLeaderboard();
    example2.createLeaderboard("Example2", "Example2", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example2.insertRows(exampleNewData);
    const insertData = document.querySelector("#insertData");
    insertData.addEventListener('submit', insertRow);
    var count = 6;
    function insertRow(e) {
        e.preventDefault();
        const name = document.querySelector('#insertName').value;
        const score = document.querySelector('#insertScore').value;
        const newRow = [{"id": count, "Name": name, "Score": score}];
        count++;
        example2.insertRows(newRow);
    }

    const example3 = new EasyLeaderboard();
    example3.createLeaderboard("Example3", "Example3", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example3.insertRows(exampleNewData);
    example3.deleteRow(2);
    const deleteData = document.querySelector("#deleteData");
    deleteData.addEventListener('submit', deleteRow);
    function deleteRow(e) {
        e.preventDefault();
        const id = document.querySelector('#deleteUser').value;
        example3.deleteRow(parseInt(id));
    }

    const example4 = new EasyLeaderboard();
    example4.createLeaderboard("Example4", "Example4", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example4.insertRows(exampleNewData);
    example4.deleteRow(2);
    example4.deleteCategory("Name");

    const example5 = new EasyLeaderboard();
    example5.createLeaderboard("Example5", "Example5", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example5.insertRows(exampleNewData);
    const hideButton = document.createElement("BUTTON");
    hideButton.innerText = "Hide";
    hideButton.onclick = function() {example5.hideRow(2)};
    document.getElementById("Example5-Hide").append(hideButton);
    const showButton = document.createElement("BUTTON");
    showButton.innerText = "Show";
    showButton.onclick = function() {example5.showRow(2)};
    document.getElementById("Example5-Show").append(showButton);
    const hideData = document.querySelector("#hideData");
    hideData.addEventListener('submit', hideRow);
    function hideRow(e) {
        e.preventDefault();
        const id = document.querySelector('#hideUser').value;
        example5.hideRow(parseInt(id));
    }
    const showData = document.querySelector("#showData");
    showData.addEventListener('submit', showRow);
    function showRow(e) {
        e.preventDefault();
        const id = document.querySelector('#showUser').value;
        example5.showRow(parseInt(id));
    }

    const example6 = new EasyLeaderboard();
    example6.createLeaderboard("Example6", "Example6", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example6.insertRows(exampleNewData);
    const hideButton2 = document.createElement("BUTTON");
    hideButton2.innerText = "Hide";
    hideButton2.onclick = function() {example6.hideCategory("Score")};
    document.getElementById("Example6-Hide").append(hideButton2);
    const hideColumn = document.querySelector("#hideColumn");
    hideColumn.addEventListener('submit', hideCategory);
    function hideCategory(e) {
        e.preventDefault();
        const category = document.querySelector('#hideCategory').value;
        example6.hideCategory(category);
    }
    const recovery = document.querySelector("#recovery");
    recovery.addEventListener('submit', recoverAll);
    function recoverAll(e) {
        e.preventDefault();
        example6.recoverLeaderboard();
    }
    

    const example7 = new EasyLeaderboard();
    example7.createLeaderboard("Example7", "Example7", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example7.insertRows(exampleNewData);
    example7.setMaximumRow(3);
    const setMaximum = document.querySelector("#setMaximum");
    setMaximum.addEventListener('submit', setMax);
    function setMax(e) {
        e.preventDefault();
        const id = document.querySelector('#maximum').value;
        example7.setMaximumRow(parseInt(id));
    }

    const example8 = new EasyLeaderboard();
    example8.createLeaderboard("Example8", "Example8", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example8.insertRows(exampleNewData);
    example8.changeUserIcon(2, "test.jpg");

}

examples();
