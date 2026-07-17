function removals_Naturalist() {
    global.REMOVALS.add([
        /naturalist:snail.*/,
        /naturalist:tortoise.*/,
        'naturalist:venison',
        'naturalist:cooked_venison',
        'naturalist:duck',
        'naturalist:cooked_duck',
    ])

    global.ITEM_SWAPPER.set('naturalist:snail_shell', 'spawn:snail_shell')
    global.ITEM_SWAPPER.set('naturalist:venison', 'nomansland:raw_venison')
    global.ITEM_SWAPPER.set('naturalist:cooked_venison', 'nomansland:cooked_venison')
    global.ITEM_SWAPPER.set('naturalist:duck', 'environmental:duck')
    global.ITEM_SWAPPER.set('naturalist:cooked_duck', 'environmental:cooked_duck')
}