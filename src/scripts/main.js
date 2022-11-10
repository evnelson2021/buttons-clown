import { fetchRequests } from "./dataAccess.js"
import { ClownBooking } from "./Clowns.js"
import { fetchClowns } from "./dataAccess.js"
import { fetchCompletions } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchClowns())
        .then(
            () => {
                mainContainer.innerHTML = ClownBooking()
            }
        )
        .then(() => fetchCompletions())
}

render()

mainContainer.addEventListener(
    "stateChanged",
    (customEvent) => {
        render()
    }
)