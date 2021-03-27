"use strict";

(function (global, document) {

    function EasyLeaderboard() {
        this.querySelector = undefined;
        this.id = undefined;
        this.title = undefined;
        this.category = [];
        this.numCategory = 0;
        this.data = [];
        this.numRow = 0;
        this.maxRow = 10;
        // Only for convenience
        this.tableId = undefined;
        this.categoryListId = undefined;
        this.tableHeadId = undefined;
        this.colGroupId = undefined;
    }

    // Helper function for showing Button Dropdown
    function showCategory(id) {
        document.getElementById(id).classList.toggle("show");
    }

    // Helper function for Sorting target Leaderboard by given Category
    function changeSorting(buttonId, text, tableId, categoryListId) {
        // Change Button Text
        document.getElementById(buttonId).textContent = text;
        // Change the order of Table Body
        var tableBody =  document.getElementById(tableId);
        var categoryList =  document.getElementById(categoryListId);
        var isSorting = true;
        var needSorting, rows, x, y, i, index;
        for (index = 0; index < categoryList.childElementCount; index++){
            if (categoryList.children[index].innerText == text){
                break;
            }
        }
        while (isSorting) {
            isSorting = false;
            rows = tableBody.rows;
            for (i = 0; i < rows.length - 1; i++){
                needSorting = false;
                x = rows[i].getElementsByTagName("TD")[index + 1];
                y = rows[i + 1].getElementsByTagName("TD")[index + 1];
                const xNum = parseFloat(x.innerHTML.toLowerCase());
                const yNum = parseFloat(y.innerHTML.toLowerCase());
                if (!isNaN(xNum) && !isNaN(yNum)){
                    if (xNum < yNum){
                        needSorting = true;
                        break;
                    }
                }
                else{
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                        needSorting = true;
                        break;
                    }
                }
            }
            if (needSorting){
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                isSorting = true;
            }
        }
        resetRanking(tableId);
    }

    // Helper function for reset the ranking of target Leaderboard
    function resetRanking(tableId) {
        var tableBody =  document.getElementById(tableId);
        var rows = tableBody.rows;
        for (var i = 0; i < rows.length; i++){
            rows[i].getElementsByTagName("TD")[0].innerText = i + 1;
        }
    }

    EasyLeaderboard.prototype = {

        // Create a Leaderboard
        createLeaderboard: function(querySelector, id, title, category, data){

            this.querySelector = querySelector;
            this.id = id;
            this.title = title;
            this.category = category;
            this.numCategory = this.category.length;
            this.data = data;
            this.numRow = this.data.length;

            const position = document.getElementById(querySelector);
            
            const newLeaderboard = document.createElement('div');
            newLeaderboard.className = "Leaderboard";
            newLeaderboard.setAttribute("id", "Leaderboard-" + id);
            
            // - Title
            // Maybe Better Style
            const titleContainer = document.createElement("h2");
            titleContainer.setAttribute("id", "Leaderboard-" + id + "-Title");
            const titleText = document.createTextNode(title);
            titleContainer.appendChild(titleText);
            newLeaderboard.appendChild(titleContainer);
            
            // - Category Bar
            // -- Prefix
            const categoryContainer = document.createElement('div');
            categoryContainer.className = "CategoryGroup";
            const categoryPrefix = document.createElement('strong');
            categoryPrefix.className = "CategoryPrefix";
            const categoryPrefixText = document.createTextNode("Ranked by");
            categoryPrefix.appendChild(categoryPrefixText);
            categoryContainer.appendChild(categoryPrefix);
            // -- Clickable Dropdown Button
            const categoryButtonContainer = document.createElement('div');
            categoryButtonContainer.className = "CategoryButtonGroup";
            const categoryButton = document.createElement('BUTTON');
            categoryButton.className = "CategoryButton";
            categoryButton.setAttribute("id", "Leaderboard-" + id + "-CategoryButton");
            var categoryButtonDefaultText = "Category";
            if (this.numCategory != 0)
            {
                categoryButtonDefaultText = document.createTextNode(this.category[0]);
            }
            categoryButton.appendChild(categoryButtonDefaultText);
            const categoryList = document.createElement('div');
            categoryList.className = "CategoryList";
            categoryList.setAttribute("id", "Leaderboard-" + id + "-CategoryList");
            this.categoryListId = "Leaderboard-" + id + "-CategoryList";
            for (var i = 0; i < category.length; i++) {
                const categoryName = document.createElement('a');
                categoryName.setAttribute("id", "Leaderboard-" + id + "-CategoryList-" + this.category[i]);
                const text = this.category[i]
                const index = i;
                categoryName.onclick = function() {changeSorting("Leaderboard-" + id + "-CategoryButton", text, "Leaderboard-" + id + "-Data", "Leaderboard-" + id + "-CategoryList")};
                const categoryText = document.createTextNode(category[i]);
                categoryName.appendChild(categoryText);
                categoryList.appendChild(categoryName);
            }
            categoryButton.onclick = function() {showCategory("Leaderboard-" + id + "-CategoryList")};
            categoryButtonContainer.appendChild(categoryButton);
            categoryButtonContainer.appendChild(categoryList);
            categoryContainer.appendChild(categoryButtonContainer);
            newLeaderboard.appendChild(categoryContainer);

            // - Ranking Table
            const scoreboard = document.createElement('table');
            scoreboard.className = "Scoreboard";
            // -- Column Group
            const columnGroup = document.createElement('colgroup');
            columnGroup.setAttribute("id", "Leaderboard-" + id + "-ColumnGroup");
            this.colGroupId = "Leaderboard-" + id + "-ColumnGroup";
            // --- Ranking
            const rankingCol = document.createElement('col');
            rankingCol.className = "RankingCol";
            columnGroup.appendChild(rankingCol);
            // --- Other Columns
            for (var numCol = 0; numCol < this.numCategory; numCol++){
                const newCol = document.createElement('col');
                newCol.setAttribute("id", "Leaderboard-" + id + "-ColumnGroup-" + this.category[numCol])
                columnGroup.appendChild(newCol);
            }

            scoreboard.appendChild(columnGroup);
            // -- Attributes (Attributes here are Categories)
            // --- Ranking
            const tableHead = document.createElement('thead');
            const attributes = document.createElement('tr');
            attributes.className = "Attributes";
            attributes.setAttribute("id", "Leaderboard-" + id + "-Attributes");
            this.tableHeadId = "Leaderboard-" + id + "-Attributes";
            const attributeRanking = document.createElement('th');
            attributeRanking.appendChild(document.createTextNode("Ranking"));
            attributes.appendChild(attributeRanking);
            // --- Customized Attributes
            for (var index = 0; index < this.numCategory; index++){
                const newAttribute = document.createElement('th');
                newAttribute.appendChild(document.createTextNode(this.category[index]));
                attributes.appendChild(newAttribute);
            }
            tableHead.appendChild(attributes);
            scoreboard.appendChild(tableHead);
            // -- Data
            const tableBody = document.createElement('tbody');
            tableBody.setAttribute("id", "Leaderboard-" + id + "-Data");
            this.tableId = "Leaderboard-" + id + "-Data";
            for (var row = 0; row < this.data.length; row++) {
                const newRow = document.createElement('tr');
                newRow.setAttribute("id", "Leaderboard-" + id + "-Data-" + this.data[row]["id"]);
                const newRanking = document.createElement('td');
                const rankingText = document.createTextNode(row + 1);
                newRanking.appendChild(rankingText);
                newRow.appendChild(newRanking);
                for (var col = 0; col < this.numCategory; col++) {
                    const newElement = document.createElement('td');
                    const elementText = document.createTextNode(this.data[row][this.category[col]]);
                    newElement.appendChild(elementText);
                    newRow.appendChild(newElement);
                }
                tableBody.appendChild(newRow);
            }
            scoreboard.appendChild(tableBody);

            newLeaderboard.appendChild(scoreboard);

            // Insert Leaderboard to html
            position.append(newLeaderboard);

        },

        // Insert new Rows with given Data in the last position
        insertRows: function(data){

            this.data = this.data.concat(data);
            var count = this.numRow + 1;
            this.numRow = this.data.length;

            var table = document.getElementById(this.tableId);
            for (var row = 0; row < data.length; row++){
                var newRow = table.insertRow();
                var newRanking = newRow.insertCell();
                newRanking.innerText = count;
                count++;
                for (var col = 0; col < this.numCategory; col++){
                    var newData = newRow.insertCell();
                    newData.innerHTML = data[row][this.category[col]];
                }
            }

        },

        // Delete Row with given id
        deleteRow: function(id){

            for (var i = 0; i < this.data.length; i++){
                if (this.data[i]["id"] == id){
                    this.data.splice(i, 1);
                }
            }

            this.numRow = this.data.length;
            var target = document.getElementById(this.tableId + "-" + id);
            target.remove();
            resetRanking(this.tableId);

        },

        // Delete Category with given name
        deleteCategory: function(category){

            var index;
            for (index = 0; index < this.category.length; index++){
                if (this.category[index] == category){
                    this.category.splice(index, 1);
                    break;
                }
            }
            this.numCategory = this.category.length;

            var target = document.getElementById(this.categoryListId + "-" + category);
            target.remove();

            var colGroup = document.getElementById(this.colGroupId + "-" + category);
            colGroup.remove();

            var tableHead = document.getElementById(this.tableHeadId);
            tableHead.deleteCell(index + 1);

            var table = document.getElementById(this.tableId);
            for (var row = 0; row < this.numRow; row++){
                table.rows[row].deleteCell(index + 1);
            }

        },

        // UpdateLeaderboard with current stored data
        updateLeaderboard: function(){

        },

        hideRow: function(){

        },

        hideCategory: function(){

        },

        setMaximumRow: function(){

        },

        setLink: function(){
            
        }

    }

    global.EasyLeaderboard = global.EasyLeaderboard || EasyLeaderboard;

})(window, window.document)

