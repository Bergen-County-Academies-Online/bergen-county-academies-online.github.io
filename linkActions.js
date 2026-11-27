function createShortcut(name, URL) {
    let shortcut = document.createElement("div");
    shortcut.className = "shortcut";
    shortcut.addEventListener("click", () => {
        location.href = URL;
    })
    shortcut.title = URL;

    let shortcutTitle = document.createElement("h2");
    shortcutTitle.innerText = name;
    shortcut.appendChild(shortcutTitle);

    let shortcutURL = document.createElement("a");
    shortcutURL.href = URL;
    shortcutURL.innerHTML = URL.replace("https://", "");
    shortcut.appendChild(shortcutURL);

    document.getElementById("shortcutsContainer").appendChild(shortcut);
}

const SHORTCUT_NAMES = ["Schoology", "PowerSchool"];
const SHORTCUT_LINK_PREFIXES = ["sc", "ps"];

for (let i = 0; i < SHORTCUT_NAMES.length; i++) {
    createShortcut(SHORTCUT_NAMES[i], "https://" + SHORTCUT_LINK_PREFIXES[i] + ".bergencountyacademies.com");
}