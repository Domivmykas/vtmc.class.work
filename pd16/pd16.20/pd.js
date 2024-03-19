function findLongestCountryName(countries) {
    return countries.reduce((longest, country) => country.length > longest.length ? country : longest, '');
}