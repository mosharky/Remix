/** @param {$RemoveEntriesKubeEvent} e  */
function hide_Core(e) {
    // Hide all enchanted books that are not max level
    Registry.access().wrapRegistry('enchantment').getEntrySet().forEach(entry => {
        const enchant = entry.getValue()
        const maxLvl = entry.getValue().getMaxLevel()
        for (let level = 1; level < maxLvl; level++) {
            e.remove(Item.of('minecraft:enchanted_book').enchant(enchant, level))
        }
    })
}

/** @param {$RemoveEntriesKubeEvent} e  */
function hideCompletely_Core(e) {
    if (!global.DEBUG_MODE) {
        e.remove(global.REMOVALS.arr.concat([
            /excavated_variants:.*/,
        ]))
    }
}