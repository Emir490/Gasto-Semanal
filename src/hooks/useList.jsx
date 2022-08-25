import { useContext } from "react"
import ListContext from "../content/ListProvider"

const useList = () => {
  return useContext(ListContext);
}

export default useList