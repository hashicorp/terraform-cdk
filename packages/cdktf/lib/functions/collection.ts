import {
  terraformFunction,
  listOf,
  anyValue,
  numericValue,
  mapValue,
} from "./_internals";

export const Collection = {
  /**
   * {@link https://www.terraform.io/docs/language/functions/anytrue.html anytrue} returns true if all elements in a given collection are true or "true"
   * @param {Array} value
   */
  alltrue: terraformFunction("alltrue", [listOf(anyValue)]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/anytrue.html anytrue} returns true if any element in a given collection is true or "true"
   * @param {Array} value
   */
  anytrue: terraformFunction("anytrue", [listOf(anyValue)]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/chunklist.html chunklist} splits a single list into fixed-size chunks, returning a list of lists.
   * @param {Array} value
   * @param {number} chunk_size
   */
  chunklist: terraformFunction("chunklist", [listOf(anyValue), numericValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/coalesce.html coalesce} takes any number of arguments and returns the first one that isn't null or an empty string.
   * @param {...any} value
   */
  coalesce: terraformFunction("coalesce", listOf(anyValue)),

  /**
   * {@link https://www.terraform.io/docs/language/functions/coalescelist.html coalescelist} takes any number of list arguments and returns the first one that isn't empty.
   * @param {...Array} value
   */
  coalescelist: terraformFunction("coalescelist", listOf(anyValue)),

  /**
   * {@link https://www.terraform.io/docs/language/functions/compact.html compact} takes a list of strings and returns a new list with any empty string elements removed.
   * @param {Array} value
   */
  compact: terraformFunction("compact", [listOf(anyValue)]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/concat.html concat} takes two or more lists and combines them into a single list.
   * @param {...Array} value
   */
  concat: terraformFunction("concat", listOf(anyValue)),

  /**
   * {@link https://www.terraform.io/docs/language/functions/contains.html contains} determines whether a given list or set contains a given single value as one of its elements.
   * @param {Array} list
   * @param {any} value
   */
  contains: terraformFunction("contains", [listOf(anyValue), anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/distinct.html distinct} takes a list and returns a new list with any duplicate elements removed.
   * @param {Array} list
   */
  distinct: terraformFunction("distinct", [listOf(anyValue)]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/element.html element} retrieves a single element from a list.
   * @param {Array} list
   * @param {number} index
   */
  element: terraformFunction("element", [listOf(anyValue), numericValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/flatten.html flatten} takes a list and replaces any elements that are lists with a flattened sequence of the list contents.
   * @param {Array} list
   */
  flatten: terraformFunction("flatten", [listOf(anyValue)]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/index.html index} finds the element index for a given value in a list.
   * @param {Array} list
   * @param {any} value
   */
  index: terraformFunction("index", [listOf(anyValue), anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/keys.html keys} takes a map and returns a list containing the keys from that map.
   * @param {Object} map
   */
  keys: terraformFunction("keys", [mapValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/length.html length} determines the length of a given list, map, or string.
   * @param {Object|Array|string} value
   */
  length: terraformFunction("length", [anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/matchkeys.html lookup} retrieves the value of a single element from a map, given its key. If the given key does not exist, the given default value is returned instead.
   * @param {Object} value
   * @param {any} key
   * @param {any} default
   */
  lookup: terraformFunction("lookup", [anyValue, anyValue, anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/matchkeys.html matchkeys} constructs a new list by taking a subset of elements from one list whose indexes match the corresponding indexes of values in another list.
   * @param {Array} valueslist
   * @param {Array} keyslist
   * @param {Array} searchset
   */
  matchkeys: terraformFunction("matchkeys", [anyValue, anyValue, anyValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/merge.html merge} takes an arbitrary number of maps or objects, and returns a single map or object that contains a merged set of elements from all arguments.
   * @param {...(Array|Object)} values
   */
  merge: terraformFunction("merge", [listOf(anyValue)]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/one.html one} takes a list, set, or tuple value with either zero or one elements.
   * @param {Array} list
   */
  one: terraformFunction("one", listOf(anyValue)),

  /**
   * {@link https://www.terraform.io/docs/language/functions/range.html range} generates a list of numbers using a start value, a limit value, and a step value.
   * @param {number} start - max if only argument, start otherwise
   * @param {number} limit
   * @param {number=1} step
   */
  range: terraformFunction("range", listOf(anyValue)),

  /**
   * {@link https://www.terraform.io/docs/language/functions/reverse.html reverse} takes a sequence and produces a new sequence of the same length with all of the same elements as the given sequence but in reverse order.
   * @param {Array} values
   */
  reverse: terraformFunction("reverse", [listOf(anyValue)]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/setintersection.html setintersection} function takes multiple sets and produces a single set containing only the elements that all of the given sets have in common
   * @param {...Array} values
   */
  setintersection: terraformFunction("setintersection", listOf(anyValue)),

  /**
   * {@link https://www.terraform.io/docs/language/functions/setproduct.html setproduct} function finds all of the possible combinations of elements from all of the given sets by computing the Cartesian product.
   * @param {...Array} values
   */
  setproduct: terraformFunction("setproduct", listOf(anyValue)),

  /**
   * {@link https://www.terraform.io/docs/language/functions/slice.html setsubtract} function returns a new set containing the elements from the first set that are not present in the second set.
   * @param {Array} minuend
   * @param {Array} subtrahend
   */
  setsubtract: terraformFunction("setsubtract", [
    listOf(anyValue),
    listOf(anyValue),
  ]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/setunion.html setunion} function takes multiple sets and produces a single set containing the elements from all of the given sets.
   * @param {...Array} values
   */
  setunion: terraformFunction("setunion", listOf(anyValue)),

  /**
   * {@link https://www.terraform.io/docs/language/functions/slice.html slice} extracts some consecutive elements from within a list.
   * @param {Array} list
   * @param {number} startindex
   * @param {number} endindex
   */
  slice: terraformFunction("slice", [
    listOf(anyValue),
    numericValue,
    numericValue,
  ]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/sort.html sort} takes a list of strings and returns a new list with those strings sorted lexicographically.
   * @param {Array} list
   */
  sort: terraformFunction("sort", [listOf(anyValue)]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/sum.html sum} takes a list or set of numbers and returns the sum of those numbers.
   * @param {Array} list
   */
  sum: terraformFunction("sum", [listOf(anyValue)]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/transpose.html transpose} takes a map of lists of strings and swaps the keys and values to produce a new map of lists of strings.
   * @param {Object} value
   */
  transpose: terraformFunction("transpose", [mapValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/values.html values} takes a map and returns a list containing the values of the elements in that map.
   * @param {Object} value
   */
  values: terraformFunction("values", [mapValue]),

  /**
   * {@link https://www.terraform.io/docs/language/functions/zipmap.html zipmap} constructs a map from a list of keys and a corresponding list of values.
   * @param {Array} keyslist
   * @param {Array} valueslist
   */
  zipmap: terraformFunction("zipmap", [mapValue]),
};
