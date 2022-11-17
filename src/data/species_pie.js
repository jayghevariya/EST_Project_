import { Andaman_species_pie } from "./mangroves/Andaman";
import { Sundarban_species_pie } from "./mangroves/Sundarban";
import { Bhitakanika_species_pie } from "./mangroves/Bhitakanika";
import { Krishna_species_pie } from "./mangroves/Krishna";
import { Kachchh_species_pie } from "./mangroves/Kachchh";

export const SpeciesPieChartLabels = (mangrove) => {
    switch (mangrove) {
        case 'Andaman':
            return Andaman_species_pie['labels'];
            break;
        case 'Sundarbans':
            return Sundarban_species_pie['labels'];
            break;
        case 'Bhitarkanika':
            return Bhitakanika_species_pie['labels'];
            break;
        case 'Krishna':
            return Krishna_species_pie['labels'];
            break;
        case 'Kachchh':
            return Kachchh_species_pie['labels'];
            break;
        default:
            break;
    }
    return [1, 2, 3]
}

export const SpeciesPieChartData = (mangrove) => {
    switch (mangrove) {
        case 'Andaman':
            return Andaman_species_pie['data'];
            break;
        case 'Sundarbans':
            return Sundarban_species_pie['data'];
            break;
        case 'Bhitarkanika':
            return Bhitakanika_species_pie['data'];
            break;
        case 'Krishna':
            return Krishna_species_pie['data'];
            break;
        case 'Kachchh':
            return Kachchh_species_pie['data'];
            break;
        default:
            break;
    }
    return [33.33, 33.33, 33.33]
}

export const SpeciesPieChartColors = (mangrove) => {
    switch (mangrove) {
        case 'Andaman':
            //return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4", "#29cc61", "#7040fa", "#ff8a65", "#d0d0d0", "#ff8a65", "#d0d0d0"];
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4", "#29cc61", "#7040fa", "#ff8a65", "#d0d0d0", "#6a8a65", "#1dd0d0"];
            break;
        case 'Sundarbans':
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4"];
            break;
        case 'Bhitarkanika':
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4", "#29cc61", "#7040fa", "#ff8a65"];
            break;
        case 'Krishna':
            return ["#e3e3e3", "#4acccd", "#fcc468"];
            break;
        case 'Kachchh':
            return ["#e3e3e3", "#4acccd"];
    }
    return [];
}

// module.exports = {
//     SpeciesPieChartLabels,
//     SpeciesPieChartData,
// };