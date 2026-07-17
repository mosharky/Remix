/** @param {$RecipesKubeEvent} e */
function environmentalRecipes(e) {
    // For Cattail thatch
    e.replaceInput({}, 'environmental:cattail', 'nomansland:cattail')
    e.replaceInput({}, 'environmental:duckweed', 'nomansland:duckweed')
}
