import { useContext } from "react"
import AppContext from "../context/index"

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
}