export interface ZonePoint {
  x: number;
  y: number;
}

export interface CalibrationZone {
  id: string;
  label: string;
  points: ZonePoint[];
}

export function normalizeZone(zone: CalibrationZone): CalibrationZone {
  return {
    ...zone,
    points: zone.points.map((point) => ({
      x: Math.max(0, Math.min(1, point.x)),
      y: Math.max(0, Math.min(1, point.y))
    }))
  };
}

export function inferScoringZones() {
  throw new Error("Automatic zone inference requires private model assets and is not included here.");
}
