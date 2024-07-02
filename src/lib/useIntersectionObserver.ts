"use client";
import { useEffect, useRef } from "react";

interface EntryMap {
  [key: string]: IntersectionObserverEntry;
}

const useIntersectionObservation = (setActiveId: (id: string) => void) => {
  const contentRef = useRef<EntryMap>({});

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        contentRef.current[entry.target.id] = entry;
      });

      const visibleContents = Object.values(contentRef.current).filter(
        (entry) => entry.isIntersecting
      );

      if (visibleContents.length > 0) {
        setActiveId(visibleContents[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -50% 0px",
      threshold: 1,
    });

    const contents = Array.from(
      document.querySelectorAll<HTMLElement>(".content")
    );
    contents.forEach((content) => observer.observe(content));

    return () => observer.disconnect();
  }, [setActiveId]);
};

export default useIntersectionObservation;
