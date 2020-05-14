(function () {
    var currentPlayer = "player1";

    $(".column").on("click", function (e) {
        var col = $(e.currentTarget);
        var slots = $(".slot");

        var slotsInCol = col.children();

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }
        var slotsInRow = $(".row" + i);

        if (i === -1) {
            return;
        }
        if (checkForVictory(slotsInCol)) {
            if (currentPlayer === "player1") {
                $(".dayoverlay").css({
                    visibility: "visible",
                });
                $("#sun").addClass("sun-animation");
                $("#dayvictory").addClass("victory-animation");
            } else {
                $(".nightoverlay").css({
                    visibility: "visible",
                });
                $("#moon").addClass("moon-animation");
                $("#nightvictory").addClass("victory-animation");
            }
        } else if (checkForVictory(slotsInRow)) {
            if (currentPlayer === "player1") {
                $(".dayoverlay").css({
                    visibility: "visible",
                });
                $("#sun").addClass("sun-animation");
                $("#dayvictory").addClass("victory-animation");
            } else {
                $(".nightoverlay").css({
                    visibility: "visible",
                });
                $("#moon").addClass("moon-animation");
                $("#nightvictory").addClass("victory-animation");
            }
        } else if (checkForDiagonals(slots)) {
            if (currentPlayer === "player1") {
                $(".dayoverlay").css({
                    visibility: "visible",
                });
                $("#sun").addClass("sun-animation");
                $("#dayvictory").addClass("victory-animation");
            } else {
                $(".nightoverlay").css({
                    visibility: "visible",
                });
                $("#moon").addClass("moon-animation");
                $("#nightvictory").addClass("victory-animation");
            }
        } else {
            switchPlayer();
            switchIcons();
        }

        var count = 0;
        for (var j = 0; j < slots.length; j++) {
            if (
                slots.eq(j).hasClass("player1") ||
                slots.eq(j).hasClass("player2")
            ) {
                count++;
            }
            if (count === 42) {
                $(".draw").css({
                    visibility: "visible",
                });
                $(".draw").addClass("draw-animation");
            }
        }
    });

    function checkForVictory(slots) {
        var slotsInRow = $(".row" + i);
        var count = 0;

        for (var i = 0; i < slots.length; i++) {
            if (
                slots.eq(i).hasClass(currentPlayer) ||
                slotsInRow.hasClass(currentPlayer)
            ) {
                count++;

                if (count === 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    function checkForDiagonals(slots) {
        var arrayOfArrays = [
            [3, 8, 13, 18],
            [4, 9, 14, 19],
            [9, 14, 19, 24],
            [5, 10, 15, 20],
            [10, 15, 20, 25],
            [15, 20, 25, 30],
            [11, 16, 21, 26],
            [16, 21, 26, 31],
            [21, 26, 31, 36],
            [17, 22, 27, 32],
            [22, 27, 32, 37],
            [23, 28, 33, 38],
            [2, 9, 16, 23],
            [8, 15, 22, 29],
            [1, 8, 15, 22],
            [14, 21, 28, 35],
            [7, 14, 21, 28],
            [0, 7, 14, 21],
            [20, 27, 34, 41],
            [13, 20, 27, 34],
            [6, 13, 20, 27],
            [19, 26, 33, 40],
            [12, 19, 26, 33],
            [18, 25, 32, 39],
        ];

        for (var i = 0; i < arrayOfArrays.length; i++) {
            var array = arrayOfArrays[i];
            for (var j = 0; j < arrayOfArrays[i].length; j++) {
                var index = arrayOfArrays[i][j];
                var count = 0;
                if (slots.eq(index).hasClass(currentPlayer)) {
                    for (var k = 0; k < array.length; k++) {
                        var every = array[k];
                        var slotsInArray = slots.eq(every);
                        if (slotsInArray.hasClass(currentPlayer)) {
                            count++;
                        }
                    }

                    if (count === 4) {
                        return true;
                    } else {
                        count = 0;
                    }
                }
            }
        }
    }

    function switchPlayer() {
        currentPlayer === "player1"
            ? (currentPlayer = "player2")
            : (currentPlayer = "player1");
    }

    function switchIcons() {
        if (currentPlayer === "player1") {
            $("#moon-icon").css({
                visibility: "hidden",
            });
            $("#sun-icon").css({
                visibility: "visible",
            });
        } else {
            $("#moon-icon").css({
                visibility: "visible",
            });
            $("#sun-icon").css({
                visibility: "hidden",
            });
            $(".hole").addClass("nighthole");
        }
    }

    $("button").on("click", function () {
        window.location.reload();
    });
})();
