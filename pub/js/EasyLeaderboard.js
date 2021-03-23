"use strict";

(function (global, document) {

    function EasyLeaderboard() {
        this.querySelector = undefined
        this.id = undefined;
        this.title = undefined;
        this.category = [];
        //this.numRow = 0;
        //this.type = undefined;
    }

    EasyLeaderboard.prototype = {

        createLeaderboard: function(querySelector, id, title, category){

            this.querySelector = querySelector;
            this.title = title;
            this.id = id;
            this.category = category;

            const place = document.getElementById(querySelector);
            
            const newLeaderboard = document.createElement('div');
            newLeaderboard.setAttribute("id", id);
            
            // Title
            const titleContainer = document.createElement("h1");
            const titleText = document.createTextNode(title);
            titleContainer.appendChild(titleText);
            newLeaderboard.appendChild(titleContainer);
            
            // Category Bar
            const categoryContainer = document.createElement('div');
            const categoryButton = document.createElement('BUTTON');
            categoryContainer.appendChild(categoryButton);
            newLeaderboard.appendChild(categoryContainer);

            const Leaderboard = document.createElement('table');

            place.append(newLeaderboard);

        }


    }

    3
    global.EasyLeaderboard = global.EasyLeaderboard || EasyLeaderboard;

})(window, window.document)

