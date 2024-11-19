import { useContext } from "react";
import { ConfigContext } from "../context/Config";

const useConfig = () => useContext(ConfigContext);
export default useConfig;
