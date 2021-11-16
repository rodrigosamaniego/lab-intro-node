class SortedList {
  constructor(items, length) {
    items = this.items
    length = this.length
    this.items = [];
    this.length = this.items.length;
  }


  add(item) {
    this.items.push(item);
    this.length ++
    this.items.sort((a,b)=>a-b)

  }

  get(pos) {
    if (pos > this.items.length) throw new Error('OutOfBounds');
    let element
    element = this.items[(pos)];
    return element;
  }

  max() {
    if (this.items.length < 1) throw new Error('EmptySortedList');
    let maxNumber
    maxNumber =
    Math.max(...this.items)
    
 
    return maxNumber

  }


  min() {
    if (this.items.length < 1) throw new Error('EmptySortedList')
    let minNumber
    minNumber = 
    Math.min(...this.items)
    // this.items.reduce(function(a,b) {
    //   return Math.min(a, b);
    // }, 0);
 
    return minNumber

  }

  sum() {
    let suma = 0;
    for (let i = 0; i < this.items.length; i++) {
      suma += this.items[i];
    }
    return suma
      
  }
      

  

  avg() {
    if (this.items.length < 1) throw new Error('EmptySortedList')
    let suma = 0;
    for (let i = 0; i < this.items.length; i++) {
      suma += this.items[i];
    }
    return suma/this.items.length

  }
}

module.exports = SortedList;
