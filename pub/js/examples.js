
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
}

examples();
