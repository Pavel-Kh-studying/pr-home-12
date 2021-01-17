'use strict';

class RangeValidator{
  constructor(from, to) {
    this._from = from;
    this._to = to; 
  }

  get from() {
    return this._from;
  }

  set from(from) {
    if (typeof from === 'number') {
      this._from = from;
      return;
    }
    throw new TypeError('Argument is not a Number');
  }

  get to() {
    return this._to;
  }
    
  set to(to) {
    if (typeof to === 'number') {
      this._to = to;
      return;
    }
    throw new TypeError('Argument is not a Number');
  }

  get range() {
    return [this._from, this._to];
  }

  set range(from, to) {
    if (from <= to) {
      this._from = from;
      this._to = to;
      return;
    }
    throw new RangeError('"to" can not be less than "from"');
  }

  validate(number) {
    if (number >= this._from && number <= this._to) {
      return number;
    }
    throw new RangeError('Number is out of range');
  }
}

const q = new RangeValidator(1, 10);