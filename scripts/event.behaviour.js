function popUpEventModal(eventItemData) {
    const popUpEventScreen = document.querySelector("#pop-up-event-screen");

    if (!popUpEventScreen)
        throw new Error("Pop up event screen not found!");

    const nameElement = popUpEventScreen.querySelector(".name");

    if (nameElement)
        nameElement.textContent = eventItemData.name;

    const dateElement = popUpEventScreen.querySelector(".date");

    if (dateElement)
        dateElement.textContent = eventItemData.dateString;

    const descriptionElement = popUpEventScreen.querySelector(".description");

    if (descriptionElement)
        descriptionElement.textContent = eventItemData.description;

    const imageElement = popUpEventScreen.querySelector("img");

    if (imageElement)
        imageElement.src = eventItemData.src;

    showElement(popUpEventScreen);
}

function createEventItem(eventItemData) {
    const eventItem = document.createElement("article");

    eventItem.classList.add("events-item");
    eventItem.setAttribute("data-event-index", eventItemData.index);

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = eventItemData.src;

    figure.appendChild(img);

    eventItem.appendChild(
        figure
    );

    const name = document.createElement("h3");
    name.textContent = eventItemData.name;

    eventItem.appendChild(name);

    const date = document.createElement("p");
    date.textContent = eventItemData.dateString;

    eventItem.appendChild(date);

    eventItem.addEventListener("click", () => {
        popUpEventModal(eventItemData);
    });

    return eventItem;
}

function generateEventsOnPage() {
    const EVENTS_PER_LINE = 5;

    const eventsSection = document.querySelector("#events-section");

    if (eventsSection === null)
        throw new Error("Cannot find events section on page!");

    const eventItemSectionCount = Math.floor(EVENT_DATA.length / EVENTS_PER_LINE) + 1;

    let currentItemIndex = 0;

    for (let i = 0; i < eventItemSectionCount; i++) {
        const eventItemSection = document.createElement("section");

        eventItemSection.classList.add("events-list-section");

        for (let i = 0; i < EVENTS_PER_LINE; i++) {
            const eventItemData = EVENT_DATA[currentItemIndex];

            if (eventItemData)
                eventItemSection.appendChild(
                    createEventItem(new EventItemData(eventItemData, currentItemIndex++))
                );
            else {
                const eventItem = document.createElement("article");

                eventItem.classList.add("events-item");

                eventItemSection.appendChild(
                    eventItem
                );
            }
        }

        eventsSection.appendChild(eventItemSection);
    }
}