# Uncommon React Bug: useEffect Infinite Loop

This repository demonstrates a common yet subtle bug in React's `useEffect` hook that can lead to an infinite rendering loop. The issue arises from omitting a necessary dependency in the `useEffect`'s dependency array.  This omission causes the effect to re-run after every render, triggering a chain reaction that results in infinite re-renders.