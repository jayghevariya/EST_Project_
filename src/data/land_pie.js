import { Andaman_land_pie } from "./mangroves/Andaman";
import { Sundarban_land_pie } from "./mangroves/Sundarban";
import { Bhitakanika_land_pie } from "./mangroves/Bhitakanika";
import { Krishna_land_pie } from "./mangroves/Krishna";
import { Kachchh_land_pie } from "./mangroves/Kachchh";

export const LandPieChartLabels = (mangrove) => {
    switch (mangrove) {
        case 'Andaman':
            return Andaman_land_pie['labels'];
            break;
        case 'Sundarbans':
            return Sundarban_land_pie['labels'];
            break;
        case 'Bhitarkanika':
            return Bhitakanika_land_pie['labels'];
            break;
        case 'Krishna':
            return Krishna_land_pie['labels'];
            break;
        case 'Kachchh':
            return Kachchh_land_pie['labels'];
            break;
        default:
            break;
    }
    return [1, 2, 3]
}

export const LandPieChartData = (mangrove) => {
    switch (mangrove) {
        case 'Andaman':
            return Andaman_land_pie['data'];
            break;
        case 'Sundarbans':
            return Sundarban_land_pie['data'];
            break;
        case 'Bhitarkanika':
            return Bhitakanika_land_pie['data'];
            break;
        case 'Krishna':
            return Krishna_land_pie['data'];
            break;
        case 'Kachchh':
            return Kachchh_land_pie['data'];
            break;
        default:
            break;
    }
    return [33.33, 33.33, 33.33]
}

export const LandPieChartColors = (mangrove) => {
    // console.log(mangrove);
    switch (mangrove) {
        case 'Andaman':
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4", "#29cc61"];
            // return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4", "#29cc61", "#7040fa", "#ff8a65", "#d0d0d0", "#6a8a65", "#1dd0d0"];
            break;
        case 'Sundarbans':
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4"];
            break;
        case 'Bhitarkanika':
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4", "#29cc61", "#7040fa"];
            break;
        case 'Krishna':
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4", "#29cc61", "#7040fa", "#ff8a65", "#d0d0d0"];
            break;
        case 'Kachchh':
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4", "#29cc61"];
            break;
        default:
            break;
    }
    return [];
}

// module.exports = {
//     LandPieChartLabels,
//     LandPieChartData,
// };