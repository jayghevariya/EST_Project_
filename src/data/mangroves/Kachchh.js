export const Kachchh_land_cover_headings = [
    "Sr. No.",
    "Land Cover",
    "Year 1977 (in km2)",
    "Year 1992 (in km2)",
    "Year 1999 (in km2)",
    "Year 2006 (in km2)",
    "Year 2008 (in km2)",
    "Year 2011 (in km2)",
    "Year 2015 (in km2)",
    "% change in 1977-2015",
];

export const Kachchh_land_cover_data = [
    ["1.", "Mangrove", "140.5", "143.7", "170.5", "278.6", "358.3", "579.5", "700.2","398.36"],
    ["2.", "Prosopis scrub", "3.3", "7.8" ,"1.9", "4.2" ,"5.2" ,"6.8" ,"5.2","57.57"],
    ["3.", "Mudflats" , "2058.6" ,"1697.8" ,"1674.8" ,"1567.5", "1493.4", "1500.4" ,"1634.5","-20.6"],
    ["4.","Water" ,"5583.3", "5839.9" ,"5688.7", "5663.7", "5614.6", "5278.4", "4990.0","-10.6"],
    ["5","Salt pans", "75.2", "165.6", "311.4", "329.6", "365.4", "439.8", "469.4","524.2"],
    ["6","Built-up land" ,"3.6" ,"6.1" ,"13.6", "17.3", "24", "56" ,"61.5","1608.33"],
];

export const Kachchh_species_pie = {
    'data': [97, 3],
    'labels': ["Avicennia Marina", "Others"]
}

export const Kachchh_land_cover_line = {
    'years': [1977, 1992, 1999, 2006, 2008, 2011, 2015],
    'labels': ["Mangrove", "Prosopis scrub", "Mudflats", "Water", "Salt pans", "Built-up land"],
    'data': [
        [140.5, 143.7, 170.5, 278.6, 358.3, 579.5, 700.2],
        [3.3, 7.8, 1.9, 4.2, 5.2, 6.8, 5.2],
        [2058.6, 1697.8, 1674.8, 1567.5, 1493.4, 1500.4, 1634.5],
        [5583.3, 5839.9, 5688.7, 5663.7, 5614.6, 5278.4, 4990.0],
        [75.2, 165.6, 311.4, 329.6, 365.4, 439.8, 469.4],
        [3.6, 6.1, 13.6, 17.3, 24, 56, 61.5]
    ]
}

export const Kachchh_land_pie = {
    'labels': ["Mangrove", "Prosopis scrub", "Mudflats", "Water", "Salt pans", "Built-up land"],
    'data': [700.2, 5.2, 1634.5, 4990.0, 469.4, 61.5]
}