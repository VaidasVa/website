import icons from "/src/helpers/Icons.jsx"

export default function Technologies() {
    return (
        <section title={"Technology Stack"} className={"technologies innerMargin"}>
            <h2 style={{paddingBottom:"40px"}}>Technology stack</h2>
            <div className={"technologies-container"}>
                {icons.map(icon => (
                    <div className="techItemContainer" key={icon.id}>
                        {icon.icon}<h4>{icon.id}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}