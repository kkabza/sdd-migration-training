import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

const STORAGE_KEY = 'sdd-training-progress';

export function useMediaPosition(mediaId: string) {
  const [positions, setPositions] = useLocalStorage<Record<string, number>>(
    `${STORAGE_KEY}-media`,
    {},
  );

  const savedPosition = positions[mediaId] ?? 0;

  const savePosition = useCallback(
    (seconds: number) => {
      setPositions((prev) => ({ ...prev, [mediaId]: seconds }));
    },
    [mediaId, setPositions],
  );

  return { savedPosition, savePosition };
}
