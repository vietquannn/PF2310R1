function Vua(id) {
    var X = id.toString().charAt(0);
    var Y = id.toString().charAt(1);

    var X_ = parseInt(X);
    var Y_ = parseInt(Y);

    var moveOffsets = [
        { dx: -1, dy: 0 },
        { dx: -1, dy: 1 },
        { dx: -1, dy: -1 },
        { dx: 1, dy: 0 },
        { dx: 1, dy: 1 },
        { dx: 1, dy: -1 },
        { dx: 0, dy: -1 },
        { dx: 0, dy: 1 }
    ];

    for (var offset of moveOffsets) {
        var { dx, dy } = offset;
        var newX = X_ + dx;
        var newY = Y_ + dy;

        if (!isBien(newX, newY) && !(isCoTrang(X, Y) ? isCoTrang(newX, newY) : isCoDen(newX, newY))) {
            doiMau(newX, newY);
        }
    }
}