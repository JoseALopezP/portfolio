const ProjectsList = [{
    "pName":"J・oso",
    "Status":"In-progress",
    "Date":"Current",
    "pImg":"a",
    "pText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "pGit":"s",
    "pPage":"s"
 },
 {
    "pName":"RSVP Wedding I",
    "Status":"Sold",
    "Date":"Current",
    "pImg":"a",
    "pText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "pGit":"s",
    "pPage":"s"
 },
 {
    "pName":"RSVP Wedding II",
    "Status":"Sold",
    "Date":"Current",
    "pImg":"a",
    "pText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "pGit":"s",
    "pPage":"s"
 },
 {
    "pName":"Blockudoku",
    "Status":"In-progress",
    "Date":"Current",
    "pImg":"a",
    "pText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "pGit":"s",
    "pPage":"s"
 },
 {
    "pName":"Web Store II",
    "Status":"Finished",
    "Date":"Current",
    "pImg":"a",
    "pText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "pGit":"s",
    "pPage":"s"
 },
 {
    "pName":"Web Store I",
    "Status":"Finished",
    "Date":"Current",
    "pImg":"a",
    "pText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "pGit":"s",
    "pPage":"s"
 },
 {
    "pName":"Landing page I",
    "Status":"Finished",
    "Date":"Current",
    "pImg":"a",
    "pText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "pGit":"s",
    "pPage":"s"
 }]
export async function Projects() {
    return(
        <>
            {ProjectsList.map(({pName, pImg, pText, pGit, pPage}) =>(
                <p key={pName}>{pName}</p>
            ))}
        </>
    )
}