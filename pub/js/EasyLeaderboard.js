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
    }

    function showCategory(id) {
        document.getElementById(id).classList.toggle("show");
    }

    function changeText(id, text) {
        document.getElementById(id).textContent = text;
    }

    EasyLeaderboard.prototype = {

        // Create a Leaderboard
        createLeaderboard: function(querySelector, id, title, category, data){

            this.querySelector = querySelector;
            this.id = id;
            this.title = title;
            this.category = category;
            this.numCategory = category.length;
            this.data = data;
            this.numRow = data.length;

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
            for (var i = 0; i < category.length; i++) {
                const categoryName = document.createElement('a');
                const text = this.category[i]
                // changeText will be changeSorting in the future
                categoryName.onclick = function() {changeText("Leaderboard-" + id + "-CategoryButton", text)};
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
            // --- Ranking
            const rankingCol = document.createElement('col');
            rankingCol.className = "RankingCol";
            columnGroup.appendChild(rankingCol);
            // --- Other Columns
            for (var numCol = 0; numCol < this.numCategory; numCol++){
                const newCol = document.createElement('col');
                columnGroup.appendChild(newCol);
            }

            scoreboard.appendChild(columnGroup);
            // -- Attributes (Attributes here are Categories)
            // --- Ranking
            const tableHead = document.createElement('thead');
            const attributes = document.createElement('tr');
            attributes.className = "Attributes";
            attributes.setAttribute("id", "Leaderboard-" + id + "-Attributes");
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
            for (var row = 0; row < this.data.length; row++) {
                const newRow = document.createElement('tr');
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
        }





    }

    global.EasyLeaderboard = global.EasyLeaderboard || EasyLeaderboard;

})(window, window.document)

