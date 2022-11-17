import { Krishna_land_cover_headings, Krishna_land_cover_data } from "./mangroves/Krishna"
import { Kachchh_land_cover_headings, Kachchh_land_cover_data } from "./mangroves/Kachchh"
import { Sundarban_land_cover_headings, Sundarban_land_cover_data } from "./mangroves/Sundarban"
import { Bhitakanika_land_cover_headings, Bhitakanika_land_cover_data } from "./mangroves/Bhitakanika";
import { Andaman_land_cover_headings, Andaman_land_cover_data } from "./mangroves/Andaman";

const land_cover = {
    headings: {
        'Krishna': Krishna_land_cover_headings,
        'Kachchh': Kachchh_land_cover_headings,
        'Sundarbans': Sundarban_land_cover_headings,
        'Bhitarkanika': Bhitakanika_land_cover_headings,
        'Andaman': Andaman_land_cover_headings
    },

    data: {
        'Krishna': Krishna_land_cover_data,
        'Kachchh': Kachchh_land_cover_data,
        'Sundarbans': Sundarban_land_cover_data,
        'Bhitarkanika': Bhitakanika_land_cover_data,
        'Andaman': Andaman_land_cover_data
    }

}

export default land_cover;