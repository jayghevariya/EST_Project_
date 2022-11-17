import { Sundarban_species_headings, Sundarban_species_data } from "./mangroves/Sundarban";
import { Bhitakanika_species_headings, Bhitakanika_species_data } from "./mangroves/Bhitakanika";
import { Krishna_species_data,Krishna_species_headings } from "./mangroves/Krishna";
import { Andaman_species_data,Andaman_species_headings } from "./mangroves/Andaman";

const species_cover = {
    headings: {
        'Sundarbans': Sundarban_species_headings,
        'Bhitarkanika': Bhitakanika_species_headings,
        'Krishna': Krishna_species_headings,
        'Andaman': Andaman_species_headings
    },

    data: {
        'Sundarbans': Sundarban_species_data,
        'Bhitarkanika': Bhitakanika_species_data,
        'Krishna': Krishna_species_data,
        'Andaman': Andaman_species_data
    }
}

export default species_cover;