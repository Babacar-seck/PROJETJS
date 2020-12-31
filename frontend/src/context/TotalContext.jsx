import { createContext } from "react"

const TotalContext = createContext({
	total: 0,
	setTotal: () => {},
})
export default TotalContext
