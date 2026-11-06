import * as api from '@lp-labs/segment-intersection';
import { intersectSegments } from '@lp-labs/segment-intersection';
console.log(intersectSegments({ x: 0, y: 0 }, { x: 2, y: 2 }, { x: 0, y: 2 }, { x: 2, y: 0 }));
// @ts-expect-error invalid argument must be rejected by declarations
api.intersectSegments({ x: 0, y: 0 }, { x: 1, y: '1' }, { x: 0, y: 1 }, { x: 1, y: 0 });
