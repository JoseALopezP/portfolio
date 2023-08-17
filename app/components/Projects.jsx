const ProjectsList = [{
    pName:"J・oso",
    status:"In-progress",
    Date:"Current",
    pImg:"a",
    pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    pGit:"s",
    pPage:"s"
 },
 {
    pName:"RSVP Wedding I",
    status:"Sold",
    Date:"Current",
    pImg:"a",
    pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    pGit:"s",
    pPage:"s"
 },
 {
    pName:"RSVP Wedding II",
    status:"Sold",
    Date:"Current",
    pImg:"a",
    pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    pGit:"s",
    pPage:"s"
 },
 {
    pName:"Blockudoku",
    status:"In-progress",
    Date:"Current",
    pImg:"a",
    pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    pGit:"s",
    pPage:"s"
 },
 {
    pName:"Web Store II",
    status:"Finished",
    Date:"Current",
    pImg:"a",
    pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    pGit:"s",
    pPage:"s"
 },
 {
    pName:"Web Store I",
    status:"Finished",
    Date:"Current",
    pImg:"a",
    pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    pGit:"s",
    pPage:"s"
 },
 {
    pName:"Landing page I",
    status:"Finished",
    Date:"Current",
    pImg:"a",
    pText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    pGit:"s",
    pPage:"s"
 }]
function sliceIntoChunks(arr, chunkSize) {
    const aux = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        aux.push(chunk);
    }
    console.log(aux)
    return aux;
}

export async function Projects() {
    return(
        <>
            {sliceIntoChunks(ProjectsList, 4).map((ProjectsListPart, i) =>(
                <div key={i}>
                    {ProjectsListPart}
                </div>
            ))}
        </>
    )
}