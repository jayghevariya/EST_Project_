export const Krishna_land_cover_headings = [
    "Sr. No.",
    "Land Cover",
    "Year 1990",
    "Year 2000",
    "Year 2011",
    "% change in 1990-2011",
];
export const Krishna_land_cover_data = [
    ["1.", "Dense Mangroves", "7948", "8850", "9150", "15.12"],
    ["2.", "Sparse Mangroves", "1667", "1443", "3373", "102.34"],
    ["3.", "Degraded Mangroves", "2454", "1363", "1339", "-45.44"],
    ["4.", "Aquaculture", "863", "20758", "14838", "1619.35"],
    ["5.", "Water Bodies", "5765", "5878", "6319", "9.61"],
    ["6.", "Agricuture", "26535", "12111", "15448", "-41.78"],
    ["7.", "Sand", "1128", "2200", "2686", "138.12"],
    ["8.", "Mud Flat", "14656", "10638", "8999", "-38.6"],
    ["9.", "Casuarina", "3184", "959", "2048", "-35.68"],
];

export const Krishna_species_headings = [
    "Sr. No.",
    "Family",
    "Scientific Name",
    "Local Name"
];

export const Krishna_species_data = [
    ["1.", "Euphorbiaceae", "Excoecaria agallocha", "Tilla / Chilla"],
    ["2.", "Avicenniaceae", "Avicennia officinalis", "Nalla mada"],
    ["3.", "Avicenniaceae", "Avicennia mariana", "Tella mada"],
    ["4", "Rhizophoraceae", "Rhizophora apiculata", "uppu poa"],
    ["5","Aizoaceae","Sesuvium portulacastrum","Vangaredukura"],
    ["6","Fabaceae","Dalbergia spinosa Roxb","Chillanki"],
    ["7","Lamiaceae","Volkameria inermis L","Pisingi/Pisung"],
    ["8","Lythraceae","Sonneratia apetala","Kalingi"],
    ["9","Combretaceae","Lumnitzera racemosa","Kadivi"],
    ["10","Myrsinaceae","Aegiceras corniculatum","Guggiliam"],
];

export const Krishna_species_pie = {
    'data': [88.89, 5.55, 5.55],
    'labels': ["Excoecaria agallocha", "Avicennia officinalis", "Avicennia mariana"]
}

export const Krishna_land_cover_line = {
    'years': ["1990", "2000", "2011"],
    'labels': ["Dense", "Sparse", "Degraded", "Aquaculture", "Water", "Agriculture", "Sand", "Mud Flat", "Casuarina"],
    'data': [
        [7948, 8850, 9150],
        [1667, 1443, 3373],
        [2454, 1363, 1339],
        [863, 20758, 14838],
        [5765, 5878, 6319],
        [26535, 12111, 15448],
        [1128, 2200, 2686],
        [14656, 10638, 8999],
        [3184, 959, 2048]
    ]
}

export const Krishna_land_pie = {
    'labels': ["Dense", "Sparse", "Degraded", "Aquaculture", "Water", "Agriculture", "Sand", "Mud Flat", "Casuarina"],
    'data': [9150, 3373, 1339, 14838, 6319, 15448, 2686, 8999, 2048]
}