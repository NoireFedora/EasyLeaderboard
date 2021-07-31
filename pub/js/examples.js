
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

    const example9 = new EasyLeaderboard();
    example9.createLeaderboard("Example9", "Example9", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example9.insertRows(exampleNewData);
    example9.changeUserIcon(2, "test.jpg");
    example9.setLinkOnIcon(2, "https://easyleaderboard.herokuapp.com/documentation.html");

    const example10 = new EasyLeaderboard();
    example10.createLeaderboard("Example10", "Example10", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example10.insertRows(exampleNewData);
    example10.changeUserIcon(2, "test.jpg");
    example10.setLinkOnIcon(2, "https://easyleaderboard.herokuapp.com/documentation.html");
    example10.changeColorLeaderboard("green");
    const colorLeaderboard = document.querySelector("#ColorLeaderboard");
    colorLeaderboard.addEventListener('submit', setLeaderboardColor);
    function setLeaderboardColor(e) {
        e.preventDefault();
        const color = document.querySelector('#newColorLeaderboard').value;
        example10.changeColorLeaderboard(color);
    }

    const example11 = new EasyLeaderboard();
    example11.createLeaderboard("Example11", "Example11", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example11.insertRows(exampleNewData);
    example11.changeUserIcon(2, "test.jpg");
    example11.setLinkOnIcon(2, "https://easyleaderboard.herokuapp.com/documentation.html");
    example11.changeColorCategory("blue");
    const colorCategory = document.querySelector("#ColorCategory");
    colorCategory.addEventListener('submit', setCategoryColor);
    function setCategoryColor(e) {
        e.preventDefault();
        const color = document.querySelector('#newColorCategory').value;
        example11.changeColorCategory(color);
    }

    const example12 = new EasyLeaderboard();
    example12.createLeaderboard("Example12", "Example12", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example12.insertRows(exampleNewData);
    example12.changeUserIcon(2, "test.jpg");
    example12.setLinkOnIcon(2, "https://easyleaderboard.herokuapp.com/documentation.html");
    example12.changeColorTableHead("yellow");
    const colorTableHead = document.querySelector("#ColorTableHead");
    colorTableHead.addEventListener('submit', setTableHeadColor);
    function setTableHeadColor(e) {
        e.preventDefault();
        const color = document.querySelector('#newColorTableHead').value;
        example12.changeColorTableHead(color);
    }

    const example13 = new EasyLeaderboard();
    example13.createLeaderboard("Example13", "Example13", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example13.insertRows(exampleNewData);
    example13.changeUserIcon(2, "test.jpg");
    example13.setLinkOnIcon(2, "https://easyleaderboard.herokuapp.com/documentation.html");
    example13.changeColorTableHead("yellow");
    const colorTableBody = document.querySelector("#ColorTableBody");
    colorTableBody.addEventListener('submit', setTableBodyColor);
    function setTableBodyColor(e) {
        e.preventDefault();
        const color = document.querySelector('#newColorTableBody').value;
        example13.changeColorTableBody(color);
    }

}

examples();
