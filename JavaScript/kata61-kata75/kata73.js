// // TODO: complete this object/class

// // The constructor takes in an array of items and a integer indicating how many
// // items fit within a single page
// function PaginationHelper(collection, itemsPerPage) {
//   this.collection = collection;
//   this.itemsPerPage = itemsPerPage;

// }

// // returns the number of items within the entire collection
// PaginationHelper.prototype.itemCount = function () {
//   return this.collection.length
// }

// // returns the number of pages
// PaginationHelper.prototype.pageCount = function () {
//   return Math.ceil(this.itemCount() / this.itemsPerPage);
// }

// // returns the number of items on the current page. page_index is zero based.
// // this method should return -1 for pageIndex values that are out of range
// PaginationHelper.prototype.pageItemCount = function (pageIndex) {
//   let itemsPerPage = this.itemsPerPage,
//     itemCount = this.itemCount(),
//     pageCount = this.pageCount();
//   if (pageIndex >= pageCount || pageIndex < 0) return -1;
//   return this.items.slice(pageIndex * itemsPerPage, itemCount).splice(0, itemsPerPage).length;

// }
// // determines what page an item is on. Zero based indexes
// // this method should return -1 for itemIndex values that are out of range
// PaginationHelper.prototype.pageIndex = function (itemIndex) {
//   if (this.itemCount() === 0
//     || itemIndex < 0
//     || itemIndex > this.itemCount()) return -1;
//   if (itemIndex === 0
//     || itemIndex / this.itemsPerPage === 1) return 0;

//   return Math.floor((itemIndex / this.itemsPerPage));
// }

// http://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.items = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.items.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.itemCount() / this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  var itemsPerPage = this.itemsPerPage,
    itemCount = this.itemCount(),
    pageCount = this.pageCount();

  if (pageIndex >= pageCount || pageIndex < 0) return -1;
  return this.items.slice(pageIndex * itemsPerPage, itemCount).splice(0, itemsPerPage).length;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (this.itemCount() === 0
    || itemIndex < 0
    || itemIndex > this.itemCount()) return -1;
  if (itemIndex === 0
    || itemIndex / this.itemsPerPage === 1) return 0;

  return Math.floor((itemIndex / this.itemsPerPage));
}


class PaginationHelper {
  constructor(collection, itemsPerPage) {
    Object.assign(this, { collection, itemsPerPage });
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    return pageIndex < 0 || pageIndex >= this.pageCount() ? -1 : pageIndex < this.pageCount() - 1 ? this.itemsPerPage : this.itemCount() % this.itemsPerPage;
  }

  pageIndex(itemIndex) {
    return itemIndex < 0 || itemIndex >= this.itemCount() ? -1 : itemIndex / this.itemsPerPage ^ 0;
  }
}



function PaginationHelper(collection, itemsPerPage) {
  this.len = collection.length;
  this.ipp = itemsPerPage;
  this.pc = Math.ceil(this.len / this.ipp);
}
PaginationHelper.prototype.itemCount = function () { return this.len; }
PaginationHelper.prototype.pageCount = function () { return this.pc; }
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  return pageIndex < 0 || pageIndex >= this.pc ? -1
    : this.pc - 1 === pageIndex ? this.len % this.ipp
      : this.ipp
}
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  return itemIndex < 0 || itemIndex >= this.len ? -1 : Math.floor(itemIndex / this.ipp)
}


let helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

console.log(helper.pageCount());