class Polygon {
    constructor(integers) {
       this.sides = integers
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function(sum, side){return sum + side}, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if ((this.countSides === 3) && (this.sides[0] + this.sides[1] > this.sides[2]) && ((this.sides[0] + this.sides[2]) > this.sides[1]) && ((this.sides[2] + this.sides[1]) > this.sides[0]) ) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if ((this.countSides === 4) && (this.sides[0] === this.sides[1]) && (this.sides[1] === this.sides[2]) && (this.sides[2] === this.sides[3]) ) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}