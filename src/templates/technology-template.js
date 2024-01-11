import Layout from "../components/layout"
import React, {useState} from "react"
import useTechnologyInformation from "../hooks/use-technologyInformation"

const TechnologyTemplate = (contentfulPage) => {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const technologyInformation = useTechnologyInformation()

    const cateroryList = ["All", ...new Set(technologyInformation.map(technology => technology.node.category))]
    return (
        <Layout>
            <h1>{contentfulPage.title}</h1>

            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {cateroryList.map((category, index) => {    
                    return <option key={index} value={category}>{category}</option>
                })} 
            </select>

            <ul>
                {technologyInformation.map((technology, index) => {
                    if (technology.node.category === selectedCategory || selectedCategory === "All") {
                        return <li key={index}>{technology.node.title}</li>
                    }
                    return null
                })}
            </ul>



            {/* {technologyInformation.map((technology, index) => {
                return (
                    <div key={index}>
                        <p>{technology.node.category}</p>
                        <h2>{technology.node.title}</h2>
                        <p>{technology.node.description.description}</p>
                    </div>
                )
            })} */}
        </Layout>
    )
}

export default TechnologyTemplate