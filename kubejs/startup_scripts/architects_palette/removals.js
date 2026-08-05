function removals_ArchitectsPalette() {
    global.REMOVALS.add([
        /architects_palette:.*(board|nub|flint|basalt).*/,
        /architects_palette:.*(vertical_slab|ore_brick|scales|railing)/,
        'architects_palette:salmon_log',
        'architects_palette:cod_log',
        'architects_palette:charcoal_block',
    ])
}