initNavbar();
generateEventsOnPage();

document.querySelectorAll("button.exit").forEach(exitButton => {
    exitButton.addEventListener("click", () => {
        const screenToCloseId = exitButton.getAttribute("data-screen-to-close-id");

        if (!screenToCloseId)
            throw new Error("Screen to close id not found!");

        const screenToClose = document.getElementById(screenToCloseId);

        if (!screenToClose)
            throw new Error("Screen to close not found!");

        hideElement(screenToClose);
    });
});

const volunteerFormButton = document.querySelector(".volunteer-form-button");

if (volunteerFormButton)
    volunteerFormButton.addEventListener("click", function () {
        window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLScZMMbG7ihLYMbPU1ft7UGBP1WcWJnbHmAOPYFaK86Ztro0OA/viewform?usp=sf_link",
            '_blank'
        ).focus();
    });

const donateNowButton = document.querySelector(".donate-now-button");

if (donateNowButton)
    donateNowButton.addEventListener("click", () => alert("Donations coming soon!"));

const storySections = document.querySelectorAll("#their-stories-section > .story-section");

if (storySections.length > 0)
    storySections.forEach(storySection => {
        storySection.addEventListener("click", () => {
            const storyTextElement = storySection.querySelector("p");

            if (storyTextElement)
                toggleElement(storyTextElement);
        });
    });