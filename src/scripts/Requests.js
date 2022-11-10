import { getRequests, saveCompletion } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
import { getClowns} from "./dataAccess.js"


const requestHTML = (request) => {
    const clowns = getClowns()
        return `
        <li>
            ${request.partyDate}: ${request.parentName} has requested a party for ${request.childName}.
            <select class="clowns" id="clowns">
                <option value="">Choose</option>
                ${
                    clowns.map(
                        clown => {
                            return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
                        }
                    ).join("")
                }
            </select>
            <button class="request__delete"
                    id="request--${request.id}">
                Delete
            </button>
        </li>
    `

}


export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(requestHTML).join("")
            }
        </ul>
    `

    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")
            const request = (parseInt(requestId))
            const clown = (parseInt(clownId))
            /*
                This object should have 3 properties
                   1. requestId
                   2. clownId
                   3. date_created
            */
            const completion = {requestId: request, clownId: clown, date_created: new Date().toLocaleDateString() }

            saveCompletion(completion)
            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)