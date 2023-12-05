import { useEffect } from "react";

const useOutsideClose = (clickFlag, refs, handler) => {
  
  useEffect(() => {
    const handleOutsideClose = (e) => {
      if (clickFlag && !refs.current.contains(e.target)) handler(e);
    };
    
    document.addEventListener("click", handleOutsideClose);
    
    return () => document.removeEventListener("click", handleOutsideClose);
  }, [refs, handler]);
  
};

export default useOutsideClose;