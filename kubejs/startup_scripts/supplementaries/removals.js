function removals_Supplementaries() {
    global.REMOVALS.add([
        'supplementaries:candy',
        'supplementaries:sconce',
        'supplementaries:sconce_soul',
    ])

    global.ITEM_SWAPPER.set('supplementaries:candy', 'cobblemon:rare_candy')

    global.BLOCK_SWAPPER.set('supplementaries:sconce', 'nomansland:sconce_torch')
    global.BLOCK_SWAPPER.set('supplementaries:sconce_soul', 'nomansland:sconce_soul_torch')
    global.BLOCK_SWAPPER.set('supplementaries:sconce_wall', 'nomansland:sconce_wall_torch')
    global.BLOCK_SWAPPER.set('supplementaries:sconce_wall_soul', 'nomansland:sconce_soul_wall_torch')
}
