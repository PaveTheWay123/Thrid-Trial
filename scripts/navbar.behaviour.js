const HAMBURGER_ACTIVE_CLASS = "is-active";

const anchorSectionMobile = document.querySelector("#anchor-section-mobile");
const hamburgerButton = document.querySelector("#hamburger-section-mobile > button.hamburger");

if (!anchorSectionMobile === null)
    throw new Error("Mobile anchor section is missing!");

if (hamburgerButton === null)
    throw new Error("Mobile hamburger button not found!");

function assignAnchorScrollFunctionality() {
    const navbarButtonAnchorSectionDesktopAndMobileChildren = document.querySelectorAll(
        "#anchor-section > a, #anchor-section-mobile > a"
    );

    Array.from(navbarButtonAnchorSectionDesktopAndMobileChildren).forEach((anchor, index) => {
        anchor.addEventListener("click", () => {
            let scrollToElementId = anchor.getAttribute("data-scroll-to");

            if (!scrollToElementId) return;

            if (scrollToElementId[0] === "#")
                scrollToElementId = scrollToElementId.slice(1);

            const scrollToElement = document.getElementById(scrollToElementId);

            if (scrollToElement) {
                window.scrollTo({
                    top: scrollToElement.getBoundingClientRect().top + window.pageYOffset - 100,
                    left: window.scrollX,
                    behavior: "smooth"
                });

                hideMobileMenu();
            }
        });
    });
}

function handleMobileHamburgerIconState() {
    hamburgerButton.addEventListener("click", () => {
        const isActive = hamburgerButton.classList.contains(HAMBURGER_ACTIVE_CLASS);

        if (isActive) {
            hideMobileMenu();
        } else {
            showMobileMenu();
        }
    });
}

function showMobileMenu() {
    hamburgerButton.classList.add(HAMBURGER_ACTIVE_CLASS);
    showElement(anchorSectionMobile, "flex");
}

function hideMobileMenu() {
    hamburgerButton.classList.remove(HAMBURGER_ACTIVE_CLASS);
    hideElement(anchorSectionMobile);
}

function initNavbar() {
    assignAnchorScrollFunctionality();
    handleMobileHamburgerIconState();
}