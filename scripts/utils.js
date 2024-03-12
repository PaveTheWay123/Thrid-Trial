function showElement(element, displayType) {
    if (element)
        element.style.display = displayType === undefined ? "initial" : displayType;
}

function hideElement(element) {
    if (element)
        element.style.display = "none";
}

function toggleElement(element) {
    if (element.style.display === "none")
        showElement(element);
    else
        hideElement(element);
}

function isViewportDesktopSize() {
    return window.innerWidth > 1199;
}