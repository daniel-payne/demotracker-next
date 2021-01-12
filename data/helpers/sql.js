// HACK to allow sql formatting in VS code not to throw an error in node compilation
export default function sql(literals, ...substitutions) {
  let returnString = literals.reduce((stringsJoined, currentString, i) => {
    return stringsJoined + currentString + (substitutions[i] || '')
  }, '')

  return returnString
}
