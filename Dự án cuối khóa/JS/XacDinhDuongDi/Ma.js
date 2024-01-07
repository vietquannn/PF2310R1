function Ma(id) {
    var X = id.charAt(0);
    var Y = id.charAt(1);
    var iX = parseInt(X), iY = parseInt(Y);

    var moves = [
        { dx: -2, dy: -1 },
        { dx: -1, dy: -2 },
        { dx: 1, dy: -2 },
        { dx: -1, dy: -2 },
        { dx: 2, dy: -1 },
        { dx: 2, dy: 1 },
        { dx: 1, dy: 2 },
        { dx: -1, dy: 2 },
        { dx: -2, dy: 1 }
    ];

    for (var move of moves) {
        var newX = iX + move.dx;
        var newY = iY + move.dy;

        if (!isBien(newX, newY) && !(isCoTrang(X, Y) ? isCoTrang(newX, newY) : isCoDen(newX, newY))) {
            doiMau(newX, newY);
        }
    }
}