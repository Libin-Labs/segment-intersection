import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('finds crossing diagonals', () => {
  assert.deepEqual(
    api.intersectSegments({ x: 0, y: 0 }, { x: 2, y: 2 }, { x: 0, y: 2 }, { x: 2, y: 0 }),
    { x: 1, y: 1 },
  );
});
test('returns null for disjoint segments', () => {
  assert.equal(
    api.intersectSegments({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: -1 }, { x: 2, y: 1 }),
    null,
  );
});
test('finds shared endpoint', () => {
  assert.deepEqual(
    api.intersectSegments({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 0 }),
    { x: 1, y: 1 },
  );
});
test('returns null for parallel segments', () => {
  assert.equal(
    api.intersectSegments({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }),
    null,
  );
});
test('returns null for collinear overlap', () => {
  assert.equal(
    api.intersectSegments({ x: 0, y: 0 }, { x: 3, y: 0 }, { x: 1, y: 0 }, { x: 4, y: 0 }),
    null,
  );
});
test('rejects malformed point', () => {
  assert.throws(
    () =>
      api.intersectSegments({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 1, y: Infinity }),
    TypeError,
  );
});
