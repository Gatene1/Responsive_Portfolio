function getel(id) {
    return document.getElementById(id);
}
const projectRoutes = {
    "card1": "toy_Proj.html?v=" + Date.now(),
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


// === Spruce's Category Filter ===
// Adds click filtering for data-group categories on projects.html

window.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const cards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update button state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selected = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const group = card.dataset.group;
                // Show all if 'all' is clicked, otherwise match groups
                if (selected === 'all' || group === selected) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
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


    // === Spruce: Auto "NEW" badge for recent projects ===
// Shows a starburst on cards published within the last N days.
    (function markNewProjects(daysFresh = 21){
        const now = new Date();
        document.querySelectorAll('.project-card').forEach(card => {
            const iso = card.getAttribute('data-published');
            if (!iso) return;
            const published = new Date(iso + 'T00:00:00');
            const diffDays = Math.floor((now - published) / (1000*60*60*24));
            if (diffDays <= daysFresh) {
                if (!card.querySelector('.burst-new')) {
                    const badge = document.createElement('span');
                    badge.className = 'burst-new';
                    badge.setAttribute('aria-label','New project');
                    badge.setAttribute('title','New');
                    card.appendChild(badge);
                }
            }
        });
    })();



});
