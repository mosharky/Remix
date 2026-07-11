// priority: -1
ItemEvents.modifyTooltips(e => {
    e.add('#kubejs:disabled', Text.red('DISABLED'))
})

RecipeViewerEvents.removeCategories(e => {
    e.remove('woodworks:sawmill')
})

RecipeViewerEvents.addInformation('item', e => {
})

ClientEvents.generateAssets('after_mods', e => {
    // clientData_EMI(e)
    // clientData_Quark(e)
})
