import { Sundarban_land_cover_line } from "./mangroves/Sundarban"
import { Andaman_land_cover_line } from "./mangroves/Andaman";
import { Bhitakanika_land_cover_line } from "./mangroves/Bhitakanika";
import { Krishna_land_cover_line } from "./mangroves/Krishna";
import { Kachchh_land_cover_line } from "./mangroves/Kachchh";

export const LandCoverLineYears = (mangrove) => {
    switch (mangrove) {
        case 'Sundarbans':
            return Sundarban_land_cover_line['years'];
            break;
        case 'Andaman':
            return Andaman_land_cover_line['years'];
            break;
        case 'Bhitarkanika':
            return Bhitakanika_land_cover_line['years'];
            break;
        case 'Krishna':
            return Krishna_land_cover_line['years'];
            break;
        case 'Kachchh':
            return Kachchh_land_cover_line['years'];
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

export const LandCoverLineData = (mangrove) => {
    switch (mangrove) {
        case 'Sundarbans':
            return Sundarban_land_cover_line['data'];
            break;
        case 'Andaman':
            return Andaman_land_cover_line['data'];
            break;
        case 'Bhitarkanika':
            return Bhitakanika_land_cover_line['data'];
            break;
        case 'Krishna':
            return Krishna_land_cover_line['data'];
            break;
        case 'Kachchh':
            return Kachchh_land_cover_line['data'];
            break;
        default:
            break;
    }
    return [
        [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
        [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63]
    ]
}

export const LandCoverLineColors = (mangrove) => {
    switch (mangrove) {
        // return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4", "#29cc61", "#7040fa", "#ff8a65", "#d0d0d0", "#6a8a65", "#1dd0d0"];
        case 'Sundarbans':
            return ['#fbc658', '#51CACF', '#f17e5d', '#6bd098', '#fcc468'];
            break;
        case 'Andaman':
            return ['#fbc658', '#51CACF', '#f17e5d', '#6bd098', '#fcc468', '#ef8157'];
            break;
        case 'Bhitarkanika':
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4", "#29cc61", "#7040fa"];
            break;
        case 'Krishna':
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4", "#29cc61", "#7040fa", "#ff8a65", "#d0d0d0"];
            break;
        case 'Kachchh':
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4", "#29cc61"];
        default:
            break;
    }
    return ['#fbc658', '#51CACF', '#f17e5d', '#6bd098', '#fcc468'];
}

export const LandCoverLineLabels = (mangrove) => {
    switch (mangrove) {
        case 'Sundarbans':
            return Sundarban_land_cover_line['labels'];
            break;
        case 'Andaman':
            return Andaman_land_cover_line['labels'];
            break;
        case 'Bhitarkanika':
            return Bhitakanika_land_cover_line['labels'];
            break;
        case 'Krishna':
            return Krishna_land_cover_line['labels'];
            break;
        case 'Kachchh':
            return Kachchh_land_cover_line['labels'];
            break;
        default:
            break;
    }
    return ["Dense", "Moderate-Dense", "Sparse", "Barren", "Water"];
}
