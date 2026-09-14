let thisDiv = document.getElementById("navLinks");
let newItem = thisDiv.getAttribute('data-remove-item');

const links = [
    ["Home", "index.html"],
    ["Projects", "projects.html"],
    ["3D Models", "models.html"],
    ["About", "about.html"],
    ["Blog", "https://outboxgames.com/blog", "_blog"],
    ["Contact", "respContact.html"]
];

for (const [label, href, target] of links) {
    if (label === newItem) continue; // Skip the current link.
    const a = document.createElement("a");
    a.className = "header";
    a.href = href;
    if (target) a.target = target;
    a.textContent = label === "Contact" ? "Contact Me" : label;
    thisDiv.appendChild(a);
}
