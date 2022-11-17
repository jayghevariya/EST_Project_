export const Andaman_land_cover_headings = [
    "Sr. No.",
    "Land cover",
    "year 1976",
    "year 1989",
    "Year 1993",
    "Year 2000",
    "Year 2006",
    "Year 2014",
    "Change in 1976-2014"

];

export const Andaman_land_cover_data = [
    ["1.", "Forest-cover", "4707.5", "4609.9", "4615.4", "4582","4522.1","4369.9","-337.6"],
    ["2.", "Mangrove", "763.7", "752.6", "749.7", "749.6","726.5","674.5","-89.2"],
    ["3.", "Agriculture", "163.9", "228.6", "241.7", "245.3"," 278.1","402.5","238.6"],
    ["4.", "Barren", "83.5", "98.2", "100.2", "100.2","113.1","125.9","42.4"],
    ["5.", "Water", "598.2", "593.5", "594.8", "596.8","616.3","634.4","36.2"],
    ["6.", "Settlements", "9.2", "11.1", "12.0", "13.6","14.5","15..5","6.3"],
];

export const Andaman_species_headings = [
    "Sr. No.",
    "Family",
    "Scientific Name", 
    "North Andaman",
    "Middle Andaman",
    "South Andaman",
    "Little Andaman",
    " Car Nicobar",
    "Great Nicobar",
];

export const Andaman_species_data = [
    ["1.","Acanthaceae","Acanthus ebracteatus","❌","❌","✅","❌","❌","✅"],
    ["2.", "Acanthaceae", "Acanthus ilicifolius", "✅", "✅", "✅", "✅", "❌", "✅"],
    ["3.", "Acanthaceae", "Avicennia marina", "✅", "✅", "✅", "✅", "❌", "❌"],
    ["4.", "Acanthaceae", "Avicennia officinalis", "✅", "✅", "✅", "✅", "❌", "❌"],
    ["5.","Arecaceae","Nypa fruticans","✅","✅","✅","✅","❌","✅"],
    ["6.","Arecaceae","Phoenix paludosa","✅","✅","✅","✅","❌","✅"],
    ["7.","Combretaceae","Lumnitzera littorea","✅","✅","✅","✅","❌","❌"],
    ["8.","Combretaceae","Lumnitzera racemosa","✅","✅","✅","✅","✅","❌"],
    ["9.", "Euphorbiaceae", "Excoecaria agallocha", "✅", "✅", "✅", "✅", "❌", "✅"],
    ["10.","Lythraceae","Sonneratia alba","✅","✅","✅","✅","❌","✅"],
    ["11.","Lythraceae","Sonneratia caseolaris","❌","❌","❌","✅","❌","❌"],
    ["12.","Lythraceae","Sonneratia griffithi","❌","✅","❌","❌","❌","❌"],
    ["13.","Lythraceae","Sonneratia ovata","❌","❌","✅","❌","❌","❌"],
    ["14.","Meliaceae","Xylocarpus granatum","✅","✅","✅","✅","❌","✅"],
    ["15.","Meliaceae","Xylocarpus moluccensis","❌","❌","✅","❌","❌","❌"],
    ["16.", " Myrsinaceae","Aegiceras corniculatum","✅","✅","✅","✅","❌","❌"],
    ["17.","Rhizophoraceae","Bruguiera cylindrica","✅","✅","✅","✅","❌","❌"],
    ["18.","Rhizophoraceae","Bruguiera gymnorrhiza","✅","✅","✅","✅","✅","✅"],
    ["19.","Rhizophoraceae","Bruguiera parviflora","✅","❌","✅","❌","❌","❌"],
    ["20.","Rhizophoraceae","Ceriops tagal","✅","✅","✅","✅","❌","✅"],
    ["21.","Rhizophoraceae","Rhizophora apiculata","✅","✅","✅","✅","✅","✅"],
    ["22.","Rhizophoraceae","Rhizophora mucronata","✅","✅","✅","✅","✅","✅"],
    ["23.","Rhizophoraceae","Rhizophora stylosa","✅","✅","✅","✅","✅","❌"],
    ["24.","Rubiaceae","Scyphiphora hydrophyllaceae","✅","✅","✅","✅","❌","❌"],
    ["25.","Sterculiaceae","Heritiera littoralis","✅","✅","✅","✅","❌","❌"],
];

export const Andaman_species_pie = {
    'data': [44,10,17,1,3,5,1,5,2,9,3],
    'labels': ["Rhizophora","Ceriops","Bruguiera","Aegiceras","Xylorhiza","Sonneratia","pemphis","Excoecaria","Lumnitzera","Avaicennia","Heritiera"],
}

export const Andaman_land_cover_line = {
    'years': [1976, 1989, 1993, 2000, 2006, 2014],
    'labels': ["Forest-cover", "Mangrove", "Agriculture", "Barren", "Water", "Settlements"],
    'data': [
        [4707.5, 4609.9, 4615.4, 4582, 4522.1, 4369.9],
        [763.7, 752.6, 749.7, 749.6, 726.5, 674.5],
        [163.9, 228.6, 241.7, 245.3, 278.1, 402.5],
        [83.5, 98.2, 100.2, 100.2, 113.1, 125.9],
        [598.2, 593.5, 594.8, 596.8, 616.3, 634.4],
        [9.2, 11.1, 12.0, 13.6, 14.5, 15.5],
    ]
}

export const Andaman_land_pie = {
    'labels': ["Forest-cover", "Mangrove", "Agriculture", "Barren", "Water", "Settlements"],
    'data': [4369.9, 674.5, 402.5, 125.9, 634.4, 15.5]
}