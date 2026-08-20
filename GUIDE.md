# How 2 Remix
Remix is a WIP modpack!

## Getting Started

### Requirements
- [Prism Launcher](https://prismlauncher.org/download/) - Very flexible and future-proof launcher with minimal random bs
- [Packweave](https://packweave.com/) - Modpack dev tool for syncing our mods, managing the git repo, and in the future will be used for pack releases.
- [Visual Studio Code](https://code.visualstudio.com/) - You can technically use another IDE or text editor but I really recommend VSCode for this due to the extensions for modpack dev.
    - [JSON to JS converter](https://marketplace.visualstudio.com/items?itemName=renatorodrigues.json-to-js) - Very handy for converting JSON data into a JS object
    - [ProbeJS](https://marketplace.visualstudio.com/items?itemName=Prunoideae.probejs) - Integrates VSCode with KubeJS/ProbeJS
    - [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml)
    - [NBT Viewer](https://marketplace.visualstudio.com/items?itemName=Misodee.vscode-nbt)

### Setup
1. Launch Prism Launcher
    1. Create a new instance.
    2. Name it "Remix Dev", or whatever you'd prefer
    3. Set the Minecraft version to `1.21.1`
    4. Select `NeoForge` as the Mod Loader for version `21.1.248`
2. Launch Packweave
    1. Skip the tutorial if prompted
    2. Press 'Get Started' > 'Clone from Git' > `https://github.com/mosharky/Remix.git` > Choose a location. This can be anywhere you prefer.
    3. From the top-left navigation bar, go to 'Instance' > 'Link an instance...' > Select the Prism Launcher instance you made.
    4. Scroll all the way down > Press 'Push All' > 'Apply'. This will install all of the modpack's files, including mods, so this may take a few minutes.

### Workspace
- Use Prism Launcher to launch the modpack and add/remove/update mods
- Open the Prism modpack instance's `.minecraft` folder with VS Code to edit the modpack
- Use Packweave to pull/push changes to the modpack instance and source control (git)

***


## Ground Rules
- **ALWAYS pull before you commit or push!**
- Non-optional assets (things that we don't want users to disable) should be in `kubejs/assets/`
- Optional assets should be in `resourcepacks/`
- Datapack stuff should be in `kubejs/data`
    - Ideally, I want as many things as possible to be done in KubeJS scripts for organization and cleanliness' sake, so try to avoid doing stuff in JSON!
- Configs that might be personalized by the player, like Sodium settings, shouldn't be in the repo and should be ignored by Git in `.gitignore`. There's definitely exceptions to this.


***


## Links
- [Remix](https://github.com/mosharky/Remix)
- [RemixMods](https://github.com/mosharky/RemixMods)
- [RemixCore](https://github.com/mosharky/RemixCore)
- [Design/Todo Doc](https://docs.google.com/document/d/1hka_Jc9ERbga4rCrYldCqWPgjGGWzk_xVklEtIDDh74)