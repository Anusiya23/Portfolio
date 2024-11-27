function toggleDescription(viewMoreElement) {
    // Find the description paragraph relative to the clicked button
    const description = viewMoreElement.previousElementSibling;

    if (description.classList.contains("expanded")) {
        description.classList.remove("expanded");
        viewMoreElement.textContent = "View More";
    } else {
        description.classList.add("expanded");
        viewMoreElement.textContent = "View Less";
    }
}