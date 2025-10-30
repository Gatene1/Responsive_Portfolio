function getel(id) {
    return document.getElementById(id);
}
const projectRoutes = {
    "card1": "topiccreator_Proj.html?v=" + Date.now(),
    "card2": "spriteGrid_Proj.html?v=" + Date.now(),
    "card3": "booska_Proj.html?v=" + Date.now(),
    "card4": "blink_Proj.html?v=" + Date.now(),
    "card5": "respSite_Proj.html?v=" + Date.now()
};

Object.entries(projectRoutes).forEach(([cardId, url]) => {
    const currCard = document.getElementById(cardId);
    if (currCard) {
        currCard.addEventListener("click", () => {
            window.location.replace(url);
        });
    }
});

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const modalBG = document.querySelector(".modal-bg");

document.querySelectorAll(".image-gallery img").forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.style.display = "flex";
    });
});
if (modalBG)
    modalBG.addEventListener("click", () => {
        modal.style.display = "none";
    });

if (modalImg)
    modalImg.addEventListener("click", () => {
        modal.style.display = "none";
    });

window.addEventListener("DOMContentLoaded", () => {
    const versionTag = `v=${Date.now()}`;

    // Update all image srcs
    document.querySelectorAll("img").forEach(img => {
        const src = img.getAttribute("src");
        if (src && !src.includes("?")) {
            img.setAttribute("src", `${src}?${versionTag}`);
        }
    });

    // Optional: Update anchor hrefs (only if you want links to be cache-busted too)
    document.querySelectorAll("a").forEach(link => {
        const href = link.getAttribute("href");
        if (
            href &&
            !href.startsWith("#") &&
            !href.includes("?") &&
            !href.includes("mailto") &&
            !href.includes("youtu.be")
        ) {
            link.setAttribute("href", `${href}?${versionTag}`);
        }
    });
});
