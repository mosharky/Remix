function removals_Spawn() {
    global.REMOVALS.add([
        /spawn:.*snail.*/
    ])

    global.ENTITY_REMOVALS.push(
        'spawn:snail',
    )

    global.ITEM_SWAPPER.set('spawn:snail_shell', 'autumnity:snail_shell_piece')
}