import { useEffect, useRef } from "react";

export function useMediaSwap() {
  const reSize = useRef();
  useEffect(() => {
    window.addEventListener("resize");
    return window.removeEventListener("resize");
  });
}
