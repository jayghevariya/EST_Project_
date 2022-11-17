export const Sundarban_land_cover_headings = [
    "Sr. No.",
    "Land cover",
    "year 1975",
    "Year 1990",
    "Year 2005",
    "Year 2020",
];

export const Sundarban_land_cover_data = [
    ["1.", "Dense", "4527", "2657", "2818", "1884","-58.2"],
    ["2.", "Moderate-Dense", "809", "1817", "1734", "2120","161.9"],
    ["3.", "Sparse", "540", "1735", "1363", "1815"," 242.2"],
    ["4.", "Barren", "1002", "416", "522", "247","-75.3"],
    ["5.", "Water", "3142", "3408", "3596", "3963","26.1"],
];

export const Sundarban_species_headings = [
    "Sr. No.",
    "Mangrove species",
    "year 1977",
    "Year 1989",
    "Year 2000",
    "Year 2015"
];

export const Sundarban_species_data = [
    ["1.", "H. fomes", "221,886", "218,051", "214,679", "199,857"],
    ["2.", "E. agallocha", "200,662", "195,692", "178,425", "180,742"],
    ["3.", "C. decandra", "171,590", "178,972", "181,238", "193,698"],
    ["4.", "X. mekongensis", "5383", "3444", "7788", "8466"],
    ["5.", "S. apelatala", "3126", "8109", "11,934", "15,016"],
];

export const Sundarban_species_pie = {
    'data': [199857, 180742, 193698, 8466, 15016],
    'labels': ["H. fomes", "E. agallocha", "C. decandra", "X. mekongensis", "S. apelatala" ]
}

export const Sundarban_land_cover_line = {
    'years': [1975, 1990, 2005, 2020],
    'labels': ["Dense", "Moderate-Dense", "Sparse", "Barren", "Water"],
    'data': [
        [4527, 2657, 2818, 1884],
        [809, 1817, 1734, 2120],
        [540, 1735, 1363, 1815],
        [1002, 416, 522, 247],
        [3142, 3408, 3596, 3963]
    ]
}

export const Sundarban_land_pie = {
    'labels': ["Dense", "Moderate-Dense", "Sparse", "Barren", "Water"],
    'data': [1884, 2120, 1815, 247, 3963]
}

export const Sundarban_species_line = {
    'years': [1977, 1989, 2000, 2015],
    'labels': ["H. fomes", "E. agallocha", "C. decandra", "X. mekongensis", "S. apelatala"],
    'data': [
        [221886, 218051, 214679, 199857],
        [200662, 195692, 178425, 180742],
        [171590, 178972, 181238, 193698],
        [5383, 3444, 7788, 8466],
        [3126, 8109, 11934, 15016]
    ]
}