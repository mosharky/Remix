// priority: -1
ItemEvents.modifyTooltips(e => {
    e.add('#kubejs:disabled', Text.red('DISABLED'))
})

RecipeViewerEvents.removeEntries('item', e => {
    // Hide all enchanted books that are not max level
    Registry.access().wrapRegistry('enchantment').getEntrySet().forEach(entry => {
        const enchant = entry.getValue()
        const maxLvl = entry.getValue().getMaxLevel()
        for (let level = 1; level < maxLvl; level++) {
            e.remove(Item.of('minecraft:enchanted_book').enchant(enchant, level))
        }
    })
})

RecipeViewerEvents.addInformation('item', e => {
})

ClientEvents.generateAssets('after_mods', e => {
    clientData_EMI(e)
    clientData_Quark(e)
})
