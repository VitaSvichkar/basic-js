const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let names = [];
  for (let i = 0; i < members.length; i += 1) {
    if(typeof members[i] === 'string')
    names.push(members[i].trim().at(0).toUpperCase());
  }
  names = names.sort().join('');
    return names;
}
createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']);

module.exports = {
  createDreamTeam
};
