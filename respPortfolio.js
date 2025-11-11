function getel(id) {
    return document.getElementById(id);
}
const projectRoutes = {
    "card1": "topiccreator_Proj.html?v=" + Date.now(),
    "card2": "spriteGrid_Proj.html?v=" + Date.now(),
    "card3": "booska_Proj.html?v=" + Date.now(),
    "card4": "blink_Proj.html?v=" + Date.now(),
    "card5": "respSite_Proj.html?v=" + Date.now(),
    "card6": "toy_Proj.html?v=" + Date.now(),
    "card7": "pc_Proj.html?v=" + Date.now()
};

Object.entries(projectRoutes).forEach(([cardId, url]) => {
    const currCard = document.getElementById(cardId);
    if (currCard) {
        currCard.addEventListener("click", () => {
            window.location.replace(url);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const modal      = document.getElementById("imgModal");
    const modalImg   = document.getElementById("modalImg");
    const modalBG    = modal?.querySelector(".modal-bg");
    const modalInner = modal?.querySelector(".modal-inner");

    if (!modal || !modalImg || !modalInner) return;

    const openModal = (src, alt, clickY) => {
        const vh = window.innerHeight;
        // Find a nice offset: center around click, clamped
        const offsetPx = Math.max(40, Math.min(clickY - vh * 0.4, vh * 0.3));

        modalInner.style.setProperty("--modal-offset", offsetPx + "px");

        modalImg.src = src;
        modalImg.alt = alt || "Expanded view";
        modal.style.display = "flex";
        document.body.classList.add("modal-open");
    };

    const closeModal = () => {
        modal.style.display = "none";
        modalImg.src = "";
        document.body.classList.remove("modal-open");
    };

    document.querySelectorAll(".image-gallery img").forEach(img => {
        img.addEventListener("click", (e) => {
            openModal(img.src, img.alt, e.clientY);
        });
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target === modalImg || e.target === modalBG) {
            closeModal();
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "flex") {
            closeModal();
        }
    });
});



/*document.querySelectorAll(".image-gallery img").forEach(img => {
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
    });*/


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
// Uses data-published to add the .is-new class so CSS can show the starburst.
    (function markNewProjects(daysFresh = 21) {
        const now = new Date();
        document.querySelectorAll('.project-card').forEach(card => {
            const iso = card.getAttribute('data-published');
            if (!iso) return;

            const published = new Date(iso + 'T00:00:00');
            const diffDays = Math.floor(
                (now - published) / (1000 * 60 * 60 * 24)
            );

            if (diffDays <= daysFresh) {
                card.classList.add('is-new');
            }
        });
    })();



});
