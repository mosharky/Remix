ClientEvents.lang('en_us', e => {
    function rename(id, name) {
        if (Item.of(id).getBlock() != null) e.renameBlock(id, name)
        else e.renameItem(id, name)
    }

    // Quark
    rename('quark:rope', 'Rigid Rope')

    // Farmer's Delight
    rename('farmersdelight:rope', 'Netting')
    rename('farmersdelight:wheat_dough', 'Dough')
    e.add('farmersdelight', 'farmersdelight.jei.cooking', 'Cooking')

    // Nature's Spirit
    /*
    rename('natures_spirit:lavender', 'Tall Lavender Bush')
    rename('natures_spirit:bluebell', 'Bluebell Bush')
    rename('natures_spirit:foxglove', 'Purple Foxglove')
    rename('natures_spirit:hibiscus', 'Lonely Hibiscus')
    rename('natures_spirit:lotus_flower', 'Aquatic Lotus Flower')
    rename('natures_spirit:lotus_stem', 'Aquatic Lotus Stem')
    rename('natures_spirit:oat_grass', 'Dry Oat Grass')
    rename('natures_spirit:tall_oat_grass', 'Tall Dry Oat Grass')
    */

    // Even Better Nether
    // rename('evenbetternether:barrel_cactus', 'Warped Barrel Cactus')

    // Collector's Reap
    // e.add('collectorsreap', 'item.collectorsreap.dragon_fruit_seeds', 'Pink Dragon Fruit Seeds')

    // AE2 missing lang
    // e.add('ae2', 'entity.minecraft.villager.fluix_researcher', 'Fluix Researcher')

    // More Minecarts missing lang
    // rename('moreminecarts:maglev_hologram_rail', 'Maglev Holograph Rail')
    // rename('moreminecarts:wooden_hologram_rail', 'Wooden Holograph Rail')
    // rename('moreminecarts:hologram_rail', 'Holograph Rail')

    // Bountiful Fares
    // rename('bountifulfares:plum_log', 'Fruitful Plum Log')
    // rename('bountifulfares:plum_wood', 'Fruitful Plum Wood')
    // rename('bountifulfares:stripped_plum_log', 'Stripped Fruitful Plum Log')
    // rename('bountifulfares:stripped_plum_wood', 'Stripped Fruitful Plum Wood')
    // rename('bountifulfares:plum_leaves', 'Fruitful Plum Leaves')
    // rename('bountifulfares:plum_sapling', 'Fruitful Plum Sapling')

    /*
    // No Man's Land
    for (const blockSet of Object.values(global.WOOD_TYPES.nomansland.pine)) {
        for (const block of Object.values(blockSet)) {
            let name = Item.of(block).displayName.string.replace('[', '').replace(']', '')
            if (block != undefined) rename(block, name.replace('Pine', 'Larch'))
        }
    }
    */


    // rename('nomansland:stripped_pine_palisade', 'Stripped Larch Palisade')
    // rename('nomansland:pine_palisade', 'Larch Palisade')
    // rename('nomansland:stripped_spiked_pine_palisade', 'Stripped Larch Palisade')
    // rename('nomansland:spiked_pine_palisade', 'Larch Palisade')
    // rename('nomansland:pine_seat', 'Larch Seat')

    rename('nomansland:pancake', 'Maple-Glazed Pancake')
})
