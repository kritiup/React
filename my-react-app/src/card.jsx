import profilepic from "./assets/profile.jpg"
function card(){
    return(
        <div className="card">
            <img src={profilepic} alt="profile picture"></img>
            <h2>Kriti Upadhyay</h2>
            <p>Computer Engineering</p>
        </div>
    )
}
export default card