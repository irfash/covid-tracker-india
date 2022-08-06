import { useEffect } from "react";

export const useLogger = (name) =>
  useEffect(() => {
    console.log(name);
  }, [name]);
