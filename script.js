function createShortcut(name, URL) {
    let shortcut = document.createElement("div");
    shortcut.className = "shortcut";
    shortcut.addEventListener("click", () => {
        location.href = URL;
    })

    let shortcutTitle = document.createElement("h2");
    shortcutTitle.innerText = name;
    shortcut.appendChild(shortcutTitle);

    let shortcutURL = document.createElement("a");
    shortcutURL.href = URL;
    shortcutURL.innerHTML = URL.replace("https://", "");
    shortcut.appendChild(shortcutURL);

    document.getElementById("shortcutsContainer").appendChild(shortcut);
}

createShortcut("Schoology", "https://sc.bergencountyacademies.com");