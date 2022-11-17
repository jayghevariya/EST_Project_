import { Sundarban_species_line } from "./mangroves/Sundarban"
// import { Andaman_species_line } from "./mangroves/Andaman";

// No Bhitarkanika data available
// No Andaman data available
// No Kachchh data available
// No Krishna data available

export const SpeciesLineYears = (mangrove) => {
    switch (mangrove) {
        case 'Sundarbans':
            return Sundarban_species_line['years'];
            break;
        default:
            break;
    }
    return [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
};

export const SpeciesLineData = (mangrove) => {
    switch (mangrove) {
        case 'Sundarbans':
            return Sundarban_species_line['data'];
            break;
        default:
            break;
    }
    return [
        [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
        [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63]
    ]
}

export const SpeciesLineColors = (mangrove) => {
    switch (mangrove) {

        case 'Sundarbans':
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4"];
            break;
    }
    return ['#fbc658', '#51CACF', '#f17e5d', '#6bd098', '#fcc468'];
}

export const SpeciesLineLabels = (mangrove) => {
    switch (mangrove) {
        case 'Sundarbans':
            return Sundarban_species_line['labels'];
            break;
        default:
            break;
    }
    return ["Dense", "Moderate-Dense", "Sparse", "Barren", "Water"];
}
