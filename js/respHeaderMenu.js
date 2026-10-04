let thisDiv = document.getElementById("navLinks");
let newItem = thisDiv.getAttribute('data-remove-item');

// For Webpages that exist in a subfolder, this variable will hold the "../" or "../../" prefixes
// so the links below still work.
const root = document.body.dataset.root || '';

const links = [
    ["Home", "index.html"],
    ["Projects", "projects.html"],
    ["3D Models", "models.html"],
    ["About", "about.html"],
    ["Blog", "https://outboxgames.com/blog", "_blog"],
    ["Contact", "respContact.html"],
    ["Showcases", "showcase.html"],
];

for (const [label, href, target] of links) {
    if (label === newItem) continue; // Skip the current link.
    const a = document.createElement("a");
    a.className = "header";
    a.href = root + href;
    if (target) a.target = target;
    a.textContent = label === "Contact" ? "Contact Me" : label;
    thisDiv.appendChild(a);
}
