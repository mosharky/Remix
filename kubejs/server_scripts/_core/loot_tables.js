/** @param {$LootModifier$Builder} all */
function lootReplacements_Core(all) {
    global.COMMON_SWAPPER.forEach((value, key) => {
        if (value == 'minecraft:air') {
            all.removeLoot(key)
        } else {
            all.replaceLoot(key, value, true)
        }
    })

    global.REMOVALS.set.forEach(removal => {
        if (!global.COMMON_SWAPPER.has(removal)) {
            all.removeLoot(removal)
        }
    })
}

/** @param {$LootModificationEvent} e */
function lootTables_Core(e) {
    // e.addEntityModifier('minecraft:ravager').addLoot('kubejs:ravager_hide')
    // e.addEntityModifier('goety:ravager').addLoot('kubejs:ravager_hide')
    // e.addEntityModifier('goety:trampler').addLoot('kubejs:ravager_hide')
}
