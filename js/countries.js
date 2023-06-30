

function findInitialLetter(array) {
    const letterArrays = []
  const initials = array.reduce((countries, country) => {
    const initials = country[0]

    if(letterArrays.hasOwnProperty(initials)) {
        letterArrays[initials] += 1
    } else {letterArrays[initials] = 1}
    return countries
  })
  return letterArrays
  return initials
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Germany', 'France', 'Spain', 'Italy', 'Portugal', 'Netherlands', 'Belgium', 'Greece'];

const deneme = findInitialLetter(countries)

console.log(deneme)



