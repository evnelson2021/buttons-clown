import {sendRequest} from "./dataAccess.js"
export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numChildren">Number of Children</label>
            <input type="number" name="numChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Party Date</label>
            <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyLength">Length of Party (in hours)</label>
            <input type="number" name="partyLength" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
} 

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userChildCount = document.querySelector("input[name='numChildren']").value
        const userAddress = document.querySelector("input[name='partyAddress']").value
        const userDate = document.querySelector("input[name='partyDate']").value
        const userNumHours = document.querySelector("input[name='partyLength']").value
        

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numChildren: userChildCount,
            partyAddress: userAddress,
            partyDate: userDate,
            lengthofParty: userNumHours
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})