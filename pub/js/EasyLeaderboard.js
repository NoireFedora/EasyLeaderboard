"use strict";

(function (global, document) {

    function EasyLeaderboard() {
        this.querySelector = undefined
        this.id = undefined;
        this.title = undefined;
        this.category = [];
        this.numCategory = 0;
        //this.numRow = 0;
        //this.type = undefined;
    }

    function showCategory(id) {
        document.getElementById(id).classList.toggle("show");
    }

    function changeText(id, text) {
        document.getElementById(id).textContent = text;
    }

    EasyLeaderboard.prototype = {

        // Create a Leaderboard
        createLeaderboard: function(querySelector, id, title, category){

            this.querySelector = querySelector;
            this.id = id;
            this.title = title;
            this.category = category;
            this.numCategory = category.length;

            const position = document.getElementById(querySelector);
            
            const newLeaderboard = document.createElement('div');
            newLeaderboard.className = "Leaderboard";
            newLeaderboard.setAttribute("id", id);
            
            // - Title
            // Maybe Better Style
            const titleContainer = document.createElement("h2");
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
            categoryButton.setAttribute("id", "CategoryButton");
            var categoryButtonDefaultText = "Category";
            if (category.length != 0)
            {
                categoryButtonDefaultText = document.createTextNode(this.category[0]);
            }
            categoryButton.appendChild(categoryButtonDefaultText);
            const categoryList = document.createElement('div');
            categoryList.className = "CategoryList";
            categoryList.setAttribute("id", "CategoryList");
            for (var i=0; i < category.length; i++) {
                const categoryName = document.createElement('a');
                const text = this.category[i];
                categoryName.onclick = function() {changeText("CategoryButton", text)};
                const categoryText = document.createTextNode(category[i]);
                categoryName.appendChild(categoryText);
                categoryList.appendChild(categoryName);
            }
            categoryButton.onclick = function() {showCategory("CategoryList")};
            categoryButtonContainer.appendChild(categoryButton);
            categoryButtonContainer.appendChild(categoryList);
            categoryContainer.appendChild(categoryButtonContainer);
            newLeaderboard.appendChild(categoryContainer);

            // - Ranking Table
            const scoreboard = document.createElement('table');
            scoreboard.className = "Scoreboard";
            // Maybe More Attributes
            const attributes = document.createElement('tr');
            attributes.className = "Attributes";
            const attributeName = document.createElement('th');
            attributeName.appendChild(document.createTextNode("Name"));
            const attributeScore = document.createElement('th');
            attributeScore.appendChild(document.createTextNode("Score"));
            attributes.appendChild(attributeName);
            attributes.appendChild(attributeScore);
            scoreboard.appendChild(attributes);
            newLeaderboard.appendChild(scoreboard);

            // Insert Leaderboard to html
            position.append(newLeaderboard);

        }


    }

    3
    global.EasyLeaderboard = global.EasyLeaderboard || EasyLeaderboard;

})(window, window.document)

