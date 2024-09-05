import { useContext } from "react";
import { MittContext } from "../context/mitt.context";

export const useMitt = () => useContext(MittContext);
