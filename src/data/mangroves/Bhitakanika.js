const Bhitakanika_species_headings = [
    "S. No.",
    "Mangrove species",
    "Number of plants/heactare"
];

const Bhitakanika_species_data = [
    ["1.", "Excoecaria agallocha", "1,772"], 
    ["2.", "Heritiera fomes", "3080"],
    ["3.", "Cynometra ramiflora", "759"],
    ["4.", "Aegiceras corniculatum", "363"],
    ["5.", "Sonneratia apetala", "236"],
    ["6.", "Avicennia officinalis", "196"],
    ["7.", "Amoora cucullata", "123"],
    ["8.", "Ceriops decandra", "103"]
];

const Bhitakanika_land_cover_headings = [
    "Sr. No.",
    "LULC classes",
    "Year 2000 (in sq km)",
    "Year 2006 (in sq km)",
    "Year 2015 (in sq km)",
    "% change from 2000 to 2015"
];

const Bhitakanika_land_cover_data = [
    ["1","Agricultural Pond" , "26.85","24.991","61.691","56.47"],
    ["2", "Drainage", "345.135","350.391", "351.61", "1.882"],
    ["3", "Grass Land", "33.18", "35.29", "35.129", "5.52"],
    ["4", "Mangrove Forest", "4489.076", "4545.91", "4421.68", "-1.52"],
    ["5", "Road", "18.673", "20.525", "20.525", "9.9"],
    ["6", "Scrub Forest","123.533","79.404","203.823","64.39"],
    ["7", "Settlement","27.328","38.017","46.191","40.3"],
];

const Bhitakanika_species_pie = {
    'data': [1772, 3080, 759, 363, 236, 196, 123, 103],
    'labels': ["Excoecaria agallocha", "Heritiera fomes", "Cynometra ramiflora", "Aegiceras corniculatum", "Sonneratia apetala", "Avicennia officinalis", "Amoora cucullata", "Ceriops decandra"]
}

const Bhitakanika_land_cover_line = {
    'years': [2000, 2006, 2015],
    'labels': ["Agricultural Pond", "Drainage", "Grass Land", "Mangrove Forest", "Road", "Scrub Forest", "Settlement"],
    'data': [
        [26.85, 24.991, 61.691],
        [345.135, 350.391, 351.61],
        [33.18, 35.29, 35.129],
        [4489.076, 4545.91, 4421.68],
        [18.673, 20.525, 20.525],
        [123.533, 79.404, 203.823],
        [27.328, 38.017, 46.191]
    ]
}

const Bhitakanika_land_pie = {
    'labels': ["Agricultural Pond", "Drainage", "Grass Land", "Mangrove Forest", "Road", "Scrub Forest", "Settlement"],
    'data': [61.691, 351.61, 35.129, 4421.68, 20.525, 203.823, 46.191]
}

module.exports = {
    Bhitakanika_species_headings,
    Bhitakanika_species_data,
    Bhitakanika_land_cover_headings,
    Bhitakanika_land_cover_data,
    Bhitakanika_species_pie,
    Bhitakanika_land_cover_line,
    Bhitakanika_land_pie
}
