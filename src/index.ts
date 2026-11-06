export interface Point {
  readonly x: number;
  readonly y: number;
}
export function intersectSegments(a: Point, b: Point, c: Point, d: Point): Point | null {
  const points = [a, b, c, d];
  if (points.some((p) => !p || !Number.isFinite(p.x) || !Number.isFinite(p.y)))
    throw new TypeError('Expected finite points');
  const rx = b.x - a.x,
    ry = b.y - a.y,
    sx = d.x - c.x,
    sy = d.y - c.y,
    den = rx * sy - ry * sx,
    qx = c.x - a.x,
    qy = c.y - a.y;
  if (Math.abs(den) < 1e-12) return null;
  const t = (qx * sy - qy * sx) / den,
    u = (qx * ry - qy * rx) / den;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1 ? { x: a.x + t * rx, y: a.y + t * ry } : null;
}
