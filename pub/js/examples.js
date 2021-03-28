
const exampleData = [{"id": 1, "Name": "Gran", "Score": 10}, {"id": 2, "Name": "Djeeta", "Score": 20}, {"id": 3, "Name": "Lulia", "Score": 30}];
const exampleNewData = [{"id": 4, "Name": "Vikala", "Score": 2020}, {"id": 5, "Name": "Catura", "Score": 2021}];

function examples() {
    const example1 = new EasyLeaderboard();
    example1.createLeaderboard("Example1", "Example1", "SampleLeaderboard", ["Name", "Score"], exampleData);
    
    const example2 = new EasyLeaderboard();
    example2.createLeaderboard("Example2", "Example2", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example2.insertRows(exampleNewData);

    const example3 = new EasyLeaderboard();
    example3.createLeaderboard("Example3", "Example3", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example3.insertRows(exampleNewData);
    example3.deleteRow(2);

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

    const example6 = new EasyLeaderboard();
    example6.createLeaderboard("Example6", "Example6", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example6.insertRows(exampleNewData);
    const hideButton2 = document.createElement("BUTTON");
    hideButton2.innerText = "Hide";
    hideButton2.onclick = function() {example6.hideCategory("Score")};
    document.getElementById("Example6-Hide").append(hideButton2);
    const showButton2 = document.createElement("BUTTON");
    showButton2.innerText = "Show";
    showButton2.onclick = function() {example6.showCategory("Score")};
    document.getElementById("Example6-Show").append(showButton2);

    const example7 = new EasyLeaderboard();
    example7.createLeaderboard("Example7", "Example7", "SampleLeaderboard", ["Name", "Score"], exampleData);
    example7.insertRows(exampleNewData);
    example7.setMaximumRow(3);

}

examples();
