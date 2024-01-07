function Xe(id) {
    var X = id.charAt(0);
    var Y = id.charAt(1);
    var iX = parseInt(X);
    var iY = parseInt(Y);

    var moveDirections = [
        { dx: -1, dy: 0 },
        { dx: 1, dy: 0 },
        { dx: 0, dy: -1 },
        { dx: 0, dy: 1 }
    ];

    for (var direction of moveDirections) {
        var { dx, dy } = direction;
        var newX = iX + dx;
        var newY = iY + dy;

        while (!isBien(newX, newY) && !(isCoTrang(X, Y) ? isCoTrang(newX, newY) : isCoDen(newX, newY))) {
            doiMau(newX, newY);
            if (isCoTrang(newX, newY) || isCoDen(newX, newY)) {
                break;
            }
            newX += dx;
            newY += dy;
        }
    }
}