module.exports = {

  first: function (array) {
    return array[0]
  },

  last: function (array) {
    // why the hell doesn't this work?
    // return array[-1]
    return array[array.length - 1]
  },

  empty: function (array) {
    return array.length === 0 ? true : false
  },

  first_n: function (array, desired_length) {
    if(array.length === 0) {
      return []
    } else {
      return array.slice(0, desired_length)
    }
  },

  last_n: function(array, desired_length) {
    var starting_index = array.length - desired_length;
    return array.slice(starting_index, array.length)
  },

  last_n_fucked_up: function(array, desired_length) {
    if(desired_length >= array.length)
      return array;
    } else {
      return array.slice()
    }

  //
  // last_n([1,2,3,4], 2) ==> starting_index is 4 - 2, index 2 which holds 3 because fuck computers;
  // length is not 0;
  // [1,2,3,4].slice from index 2 to end

}
