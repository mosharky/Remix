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
