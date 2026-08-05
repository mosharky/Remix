/** @param {$KubeAssetGenerator} e */
function clientData_EMI(e) {
    e.json('emi:category/properties/emi', {
        'emi:info':                     { order: -1001 },
        'minecraft:crafting':           { order: -1000 },
        'minecraft:smelting':           { order: -950 },
        'minecraft:blasting':           { order: -940 },
        'minecraft:smoking':            { order: -930 },
        'minecraft:campfire_cooking':   { order: -920 },
        'minecraft:stonecutting':       { order: -800 },
        'emi:world_interaction':        { order: -600 },
        'minecraft:smithing':           { order: -625 },
        'minecraft:brewing':            { order: -650 },
        // After JEI
        'emi:anvil_repairing':          { order: 951 },
        'emi:grinding':                 { order: 952 },
        'emi:fuel':                     { order: 953 },
        'emi:composting':               { order: 954 },
        'emi:tag':                      { order: 1000 }
    })
}


// Reliable EMI (REMI)
/** @param {$KubeAssetGenerator} e */
function clientData_REMI(e) {
    function createTagGroup(tag) {
        e.json(`kubejs:stack_groups/${tag.split(':')[1]}`, {
            type: 'remi:tag',
            tag: tag
        })
    }

    function createItemGroup(itemsArray) {
        let obj = { 
            type: 'remi:group', 
            contents: [] 
        }
        itemsArray.forEach(item => {
            let contentObj = { type: '', id: '' } 
            if (item.charAt(0) == '#') contentObj.type = 'tag'  // idk if this would even work
            else contentObj.type = 'item'
            contentObj.id = item
            obj.contents.push(contentObj)
        })

        e.json(`kubejs:stack_groups/${itemsArray[0].split(':')[1]}`, obj)
    }

    /*
    createTagGroup('quark:vertical_slabs')
    createTagGroup('quark:hollow_logs')
    createTagGroup('quark:hedges')
    createTagGroup('quark:posts')
    createTagGroup('forge:ladders')
    createTagGroup('forge:chests/wooden')
    createTagGroup('blueprint:wooden_beehives')
    createTagGroup('blueprint:wooden_bookshelves')
    createTagGroup('blueprint:wooden_chiseled_bookshelves')
    createTagGroup('suppsquared:item_shelves')
    createTagGroup('supplementaries:sign_posts')
    createTagGroup('snowyspirit:sleds')
    createTagGroup('immersive_weathering:bark')
    createTagGroup('decorative_blocks:seats')
    createTagGroup('decorative_blocks:supports')
    createTagGroup('decorative_blocks:palisades')
    createTagGroup('another_furniture:flower_boxes')
    createTagGroup('another_furniture:shutters')
    createTagGroup('another_furniture:tables')
    createTagGroup('another_furniture:chairs')
    createTagGroup('another_furniture:shelves')
    createTagGroup('another_furniture:drawers')
    createTagGroup('another_furniture:bench')
    createTagGroup('dramaticdoors:short_wooden_doors')
    createTagGroup('dramaticdoors:tall_wooden_doors')
    */
    // Items
    createItemGroup(['caverns_and_chasms:trail_potion'])
    createItemGroup(['caverns_and_chasms:tether_potion'])
    createItemGroup(['caverns_and_chasms:impact_potion'])
    // createItemGroup(['aetherworks:potion_gem'])
    createItemGroup(['quark:seed_pouch'])
    createItemGroup(['supplementaries:bamboo_spikes'])
}
