import {useEffect, useState} from "react"
const PopularSkills = () => {
    const [topSkills, setTopSkills] = useState([])

    useEffect(() => {
        const getSkills = async () => {
            const response = await fetch('https://job-search-project.2024-thomask.dev.io-academy.uk/skills')
            const data = await response.json()

            const sortedSkills = data.sort((a,b) => b.job_count - a.job_count)
            const topThree = sortedSkills.slice(0, 3)

            setTopSkills(topThree)
        }
        getSkills()
    }, [])

    return (
        topSkills.map(skill => {
            return (
                <span key={skill.id} className="badge text-bg-info text-light mx-1 d-none">{skill.skill}</span>
            )
        })
    )
}
export default PopularSkills