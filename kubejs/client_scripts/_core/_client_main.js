// priority: -1
ItemEvents.modifyTooltips(e => {
    e.add('#kubejs:disabled', Text.red('DISABLED'))
})

RecipeViewerEvents.removeEntries('item', e => {
    hide_Core(e)
    hide_Quark(e)
})

RecipeViewerEvents.removeEntriesCompletely('item', e => {
    hideCompletely_Core(e)
})

RecipeViewerEvents.addInformation('item', e => {
})

ClientEvents.generateAssets('after_mods', e => {
    clientData_EMI(e)
    clientData_REMI(e)
    clientData_Quark(e)
})
