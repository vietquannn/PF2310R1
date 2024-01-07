function Tot(id) {
    var X = id.charAt(0);
    var Y = id.charAt(1);
    var iX = parseInt(X);
    var iY = parseInt(Y);

    var direction = isCoTrang(X, iY) ? 1 : -1;

    if ((iX + direction) >= 1 && (iX + direction) <= 8) {
        if (isRong(iX + direction, iY)) {
            doiMau(iX + direction, iY);
        }

        if (!isBien(iX + direction, iY - 1) && isCoDen(iX + direction, iY - 1)) {
            doiMau(iX + direction, iY - 1);
        }

        if (!isBien(iX + direction, iY + 1) && isCoDen(iX + direction, iY + 1)) {
            doiMau(iX + direction, iY + 1);
        }
    }

    if ((iX == 2 && direction == 1) || (iX == 7 && direction == -1)) {
        if (isRong(iX + 2 * direction, iY)) {
            doiMau(iX + 2 * direction, iY);
        }
    }
}