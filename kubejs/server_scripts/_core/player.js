global.COMMON_SWAPPER.forEach((replaceWith, toReplace) => {
    PlayerEvents.inventoryChanged(toReplace, e => {
        const slot = e.player.inventory.find(toReplace)
        const stack = e.player.inventory.getStackInSlot(slot)
        if (!global.DEBUG_MODE) {
            e.player.inventory.setStackInSlot(slot, Item.of(replaceWith, stack.count))
            e.player.tell([
                Text.gray('An item in your inventory, '),
                Text.red(prettyItem(toReplace)),
                Text.gray(' has been replaced with '),
                Text.green(prettyItem(replaceWith)),
                Text.gray('!')
            ])
        }
    })
})

PlayerEvents.loggedIn(e => {
    if (!e.player.stages.has('starter_items')) {
        e.player.stages.add('starter_items')
        // e.player.addItem(AKASHIC_TOME)
    }
})