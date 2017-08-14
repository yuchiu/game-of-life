
function Conway(size) {
    this.size = size;
    this.grid = this.generateGrid(size);
    this.directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
    ];
}
Conway.prototype.generateGrid = function (size) {
    let grid = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(new Cell());
        }
        grid.push(row);
    }
    return grid;
};

Conway.prototype.renderGrid = function(){
    let $grid = $('#grid');
    for (let i = 0; i<this.size; i++){
        let $row = $('<div class= "row"></div>');

        for(let j = 0; j<this.size; j++){
            $row.append(this.grid[i][j].element)
        }
        $grid.append($row);
    }
};

Conway.prototype.underPopulated = function (r, c) {
    let cell = this.grid[r][c];
    return cell.neighbors < 2;
};

Conway.prototype.overPopulated = function (r, c) {
    let cell = this.grid[r][c];
    return cell.neighbors > 3;
};

Conway.prototype.resurrectable = function (r, c) {
    let cell = this.grid[r][c];
    return !cell.aliveOrNot() && cell.neighbors === 3;
};

Conway.prototype.isInBounds = function (r, c) {
    return r >= 0 && r < this.size && c >= 0 && c < this.size;
};

Conway.prototype.updateNeighborsForCell = function (r, c) {
    let cell = this.grid[r][c];
    cell.neighbors = 0;
    for (let i = 0; i < this.directions.length; i++) {
        let direction = this.directions[i];
        let dr = direction[0];
        let dc = direction[1];
        //check if different cell in bound, so cells on edge ll behave properly
        if (this.isInBounds(r+dr, c+dc)) {

            let neighbor = this.grid[r+dr][c+dc];
            if (neighbor.aliveOrNot()) {
                cell.neighbors++;
            }
        }
    }
};

Conway.prototype.updateNeighbors = function () {
    for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
            this.updateNeighborsForCell(i, j);
        }
    }
};

Conway.prototype.updateStateForCell = function (r, c) {
    let cell = this.grid[r][c];
    if (this.underPopulated(r, c) || this.overPopulated(r, c)) {
        cell.kill();
    } else if (this.resurrectable(r, c)) {
        cell.resurrect();
    }
};

Conway.prototype.updateState = function () {
    for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
            this.updateStateForCell(i, j);
        }
    }
};
