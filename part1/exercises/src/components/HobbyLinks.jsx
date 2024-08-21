export default function HobbyLinks() {
    let HobbyLinks = ["https://www.aquariumcoop.com/", "https://www.jacksongalaxy.com/"];

    return ( 
        <div>
            <h3>Links to my Hobbies</h3>
            <a href={HobbyLinks[0]}>Aquarium Co-op</a><br />
            <a href={HobbyLinks[1]}>Jackson Galaxy</a>
        </div>
    );
}