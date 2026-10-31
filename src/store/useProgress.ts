"use client";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  xp: number;
  completed: string[];
  completeLesson: (id: string, gain: number) => void;
};

export const useProgress = create<State>()(
  persist(
    (set) => ({
      xp: 0,
      completed: [],
      completeLesson: (id, gain) =>
        set((s) => {
          return {
            xp: s.xp + gain,
            completed: s.completed.includes(id)
              ? s.completed
              : [...s.completed, id],
          };
        }),
    }),
    { name: "belajar-mandarin" },
  ),
);

// Mencegah error hydration karena data dibaca dari localStorage
export function useHydrated() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    setOk(true);
  }, []);
  return ok;
}
