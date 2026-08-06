/** @param {$RemoveEntriesKubeEvent} e  */
function hideItemCompletely_BountifulFares(e) {
    // because Bountiful Fares registers compat blocks under the other mods' namespace
    if (!Platform.isLoaded('natures_spirit')) e.remove(/natures_spirit:.*/)
    if (!Platform.isLoaded('arts_and_crafts')) e.remove(/arts_and_crafts:.*/)
    if (!Platform.isLoaded('dungeonsdelight')) e.remove(/dungeonsdelight:.*/)
}