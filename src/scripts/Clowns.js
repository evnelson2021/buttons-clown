import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"

export const ClownBooking = () => {
    return `
        <h1>Buttons and Lollipop's Clown Services</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}