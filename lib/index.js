module.exports = function (actName, proName) {
    require('./' + actName + '.js')(...proName)
}
