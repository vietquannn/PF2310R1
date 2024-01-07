function Tuong(id) {
    var X = parseInt(id.charAt(0));
    var Y = parseInt(id.charAt(1));

    function moveAndCheck(dx, dy, isWhite) {
        var iX = X;
        var iY = Y;

        while (!isBien(iX + dx, iY + dy)) {
            if (isWhite ? isCoDen(iX + dx, iY + dy) : isCoTrang(iX + dx, iY + dy)) {
                doiMau(iX + dx, iY + dy);
                break;
            }

            if (isWhite ? isCoTrang(iX + dx, iY + dy) : isCoDen(iX + dx, iY + dy)) {
                break;
            }

            doiMau(iX + dx, iY + dy);
            iX += dx;
            iY += dy;
        }
    }

    var isWhite = isCoTrang(X, Y);

    moveAndCheck(-1, 1, isWhite);
    moveAndCheck(-1, -1, isWhite);
    moveAndCheck(1, -1, isWhite);
    moveAndCheck(1, 1, isWhite);
}