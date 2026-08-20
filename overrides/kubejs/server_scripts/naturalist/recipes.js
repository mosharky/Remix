/** @param {$RecipesKubeEvent} e */
function recipes_Naturalist(e) {
    e.replaceInput({}, 'naturalist:snail_shell', 'autumnity:snail_shell_piece')
    e.remove({ id: 'naturalist:pumpkin_pie' })
    e.remove({ id: 'naturalist:cake' })
}