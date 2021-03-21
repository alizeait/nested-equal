# nested-equal ![Check](https://github.com/alizeait/nested-equal/workflows/Check/badge.svg) ![Coverage](https://img.shields.io/codecov/c/github/alizeait/nested-equal)

> A tiny (~239B) and [super fast](#benchmarks) deep/nested equality utility.

Takes 2 values and returns a boolean deciding if they are equal by traversing recursively. 
Supports Objects, Arrays, numbers, strings, null, undefined, NaN, functions. Other types like Map, Set, Date use reference equality instead of value equality.

Key order within objects _does not_ matter while value order within arrays _does_ matter.


## Installation

```bash
$ npm install nested-equal 
```

## Usage

```js
import { nestedEqual } from "nested-equal";

nestedEqual({},{}); // true
nestedEqual({a:1},{a:1}); // true
nestedEqual([1,2],[1,3]); // false 
nestedEqual(NaN,NaN); // true 
nestedEqual([1,2,3],[1,2,3]); // true 
nestedEqual([
  {a:'value',b:'value'},
  {a:'value',b:'value'},
],[
  {a:'value',b:'value'},
  {a:'value',b:'value'},
]) // true
nestedEqual(5,'5'); // false
nestedEqual(null,null); // true 
nestedEqual(null,undefined); // false 
```

## Benchmarks
Claiming a library is fast without looking into the data structure is naive at best, since the data structure
largely impacts performance as no algorithm can handle all the different data structures.

```
Benchmark 1
  lodash.isequal               x 66,593 ops/sec ±0.43% (92 runs sampled)
  deep-equal                   x 772 ops/sec ±4.45% (43 runs sampled)
  nested-equal                 x 458,818 ops/sec ±0.40% (91 runs sampled)
  dequal                       x 431,045 ops/sec ±0.23% (95 runs sampled)
  nano-equal                   x 284,753 ops/sec ±0.37% (89 runs sampled)

Benchmark 2
  lodash.isequal               x 853,636 ops/sec ±0.67% (91 runs sampled)
  deep-equal                   x 2,172 ops/sec ±1.83% (75 runs sampled)
  nested-equal                 x 6,034,107 ops/sec ±0.72% (93 runs sampled)
  dequal                       x 5,302,918 ops/sec ±0.70% (95 runs sampled)
  nano-equal                   x 3,542,214 ops/sec ±0.24% (93 runs sampled)

Benchmark 3
  lodash.isequal               x 14,347,632 ops/sec ±0.89% (91 runs sampled)
  deep-equal                   x 4,502 ops/sec ±1.76% (72 runs sampled)
  nested-equal                 x 21,252,686 ops/sec ±0.31% (93 runs sampled)
  dequal                       x 21,489,939 ops/sec ±0.32% (94 runs sampled)
  nano-equal                   x 28,915,716 ops/sec ±0.49% (94 runs sampled)

Benchmark 4
  lodash.isequal               x 63,600 ops/sec ±1.16% (64 runs sampled)
  deep-equal                   x 1,420 ops/sec ±0.64% (88 runs sampled)
  nested-equal                 x 2,909,724 ops/sec ±0.22% (91 runs sampled)
  dequal                       x 4,138,053 ops/sec ±0.25% (94 runs sampled)
  nano-equal                   x 1,662,534 ops/sec ±2.92% (90 runs sampled)

Benchmark 5
  lodash.isequal               x 70,076 ops/sec ±0.93% (90 runs sampled)
  deep-equal                   x 2,113 ops/sec ±0.54% (88 runs sampled)
  nested-equal                 x 7,432,844 ops/sec ±0.22% (93 runs sampled)
  dequal                       x 7,161,662 ops/sec ±0.61% (94 runs sampled)
  nano-equal                   x 4,496,048 ops/sec ±0.59% (94 runs sampled)
```

> Running on Node.js v12.13.0, 64-bit OS, Intel(R) Core(TM) i5-6600K CPU @ 3.50GHz, 16.0 GB RAM

## API

### nestedEqual(value1:any,value2:any)

Returns: `Boolean`

Returns true or false indicating if the two values are equal or not.
