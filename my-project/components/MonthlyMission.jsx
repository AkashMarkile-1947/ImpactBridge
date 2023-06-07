import './tailwind.css';

const MonthlyMission = () => {

    return (
        <>
            <h1 className="text-4xl text-center section-heading">Monthly Giving Missions</h1>
            <div className="missions flex flex-col md:flex-row justify-content items-center p-y-4">
                <MissionCard />
                <MissionCard />
                <MissionCard />
            </div>
        </>
    );

}

const MissionCard = ({Mission, supporters, action}) => {

    return  ( 
        <div className="mission-card border rounded-lg">
            <img src="/child-hunger.png" alt="child-hunger.png"/>
            <div className="mission-stats p-4 pb-2">
                <h2 className="card-name share-text">{Mission ? Mission: "Mission: Child Hunger" }</h2>
                <p className="subtext">{supporters ? supporters : 0} Monthly Supports</p>
                <button type="button" className="focus:outline-none text-white focus:ring-4 focus:ring-green-300 w-full font-medium rounded-md  text-sm px-5 py-2.5" style={{backgroundColor: "#c2410c", marginBlock: "1rem", fontSize: "1.1rem"}}><i className="fa-solid fa-heart"></i>&nbsp; {action ? action : "Donate"}</button>
            </div>
        </div>
    )
}

export default MonthlyMission;