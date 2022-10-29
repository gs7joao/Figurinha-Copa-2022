let isIgnite = false;
function changeCard(event) {
    console.log(event.currentTarget)
    const card = event.currentTarget;
    const backgroundImage = isIgnite ?  "url(./assets/bg-explorer.svg)" : "url(./assets/bg-ignite.svg)";
    isIgnite = !isIgnite;
    card.style.backgroundImage = backgroundImage;
}