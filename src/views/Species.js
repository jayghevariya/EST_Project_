import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
} from "reactstrap";
import {
    Dropdown,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import land_cover from "data/land_cover";
import species_cover from "data/species_cover";
import { Typography } from "@mui/material";

const mangroveKeys = [
    "Bhitarkanika",
    "Kachchh",
    "Krishna",
    "Sundarbans",
    "Andaman",
    "All"
]
const commaSpecies = [
    "Excoecaria agallocha,Heritiera fomes,Cynometra ramiflora,Aegiceras corniculatum,Sonneratia apetala,Avicennia officinalis,Amoora cucullata,Ceriops decandra,Phoenix paludosa,Hibiscus tiliaceous,Pongamia pinnata,Kandelia candel,Rhizophora mucronata,Cerebra manghas,Xylocarpus granatum,Bruguiera gymnorhiza,Xylocarpus moluccensis,Brownlowia tersa,Intsia bijuga,Sonneratia caseolaris,Xylocarpus mekongensis,Dalbergia spinosa,Nypa fruticans,Suaeda maritima,Aegialitis rotundifolia,Acanthus ilicifolius,Acanthus ebracteatus,Avicennia alba,Avicennia marina,Bruguiera cylindrica,Bruguiera parviflora,Bruguiera sexangula,Ceriops tagal,Heritiera littoralis,Lumnitzera racemosa,Rhizophora apiculata,Rhizophora stylosa,Sonneratia alba",
    "Avicennia marina,Bruguiera gymnorhiza,Sonneratia apetala,Acanthus illicifolius,Ipomoea pes-carpae,Sesuvium portulacastrum,Salvadora persica,Suaeda fruticosa,Avicennia alba,Aegiceras corniculatum,Bruguiera cylindrica,Ceriops tagal,Excoecaria Agallocha,Avicennia officinalis,Rhizophora mucronata,Lumnitzera racemosa,Kandelia candel",
    "Fimbristylis ferruginea,Aeluropus lagopodioides,Heliotropium curassavicum,Sesuvium portulacastrum,Salicornia brachiata,Suaeda maritime,Suaeda monoica,Suaeda nudiflora,Aegiceras corniculatum,Dalbergia spinosa,Derris trifoliata,Acanthus ilicifolius,Avicennia alba,Avicennia marina,Avicennia officinalis,Volkameria inermis,Excoecaria agallocha,Bruguiera cylindrica,Bruguiera gymnorhiza,Ceriops decandra,Rhizophora apiculata,Lumnitzera racemosa,Sonneratia apetala",
    "Bruguiera cylindrica,Bruguiera gymnorhiza,Bruguiera parviflora,Bruguiera sexangula,Ceriops decandra,Ceriops tagal,Rhizophora apiculata,Rhizophora mucronata,Kandelia candel,Sonneratia apetala,Sonneratia caseolaris,Sonneratia griffithii,Lumnitzera racemosa,Xylocarpus granatum,Xylocarpus mekongensis,Aglaia cuculata,Avicennia alba,Avicennia marina,Avicennia officinalis,Aegialitis rotundifolia,Heritiera fomes,Aegiceras corniculatum,Nypa fruticans,Phoenix paludosa,Excoecaria agallocha,Acanthus ilicifolius",
    "Acanthus ebracteatus,Acanthus ilicifolius,Avicennia marina,Avicennia officinalis,Nypa fruticans,Phoenix paludosa,Lumnitzera littorea,Lumnitzera racemosa,Excoecaria agallocha,Sonneratia alba,Sonneratia caseolaris,Sonneratia griffithii,Sonneratia ovata,Xylocarpus granatum,Xylocarpus moluccensis,Aegiceras corniculatum,Bruguiera cylindrica,Bruguiera gymnorhiza,Bruguiera parviflora,Ceriops tagal,Rhizophora apiculata,Rhizophora mucronata,Rhizophora stylosa,Scyphiphora hydrophyllaceae,Heritiera littoralis"
]

const species = commaSpecies.map((species) => species.split(",").map((s) => s.toLowerCase()));

const AllSpeciesTable = () => {
    const headings = ["Sr. No.", "Species", "Bhitarkanika", "Gulf of Kachchh", "Krishna Godavari", "Sunderbans", "Andaman and Nicobar"];
    const allSpecies = new Set(([].concat(...species)).sort());
    const data = Array.from(allSpecies).map((specie, index) => {
        const row = [String(index + 1) +".", (specie[0]).toString().toUpperCase() + specie.slice(1).toLowerCase()];
        [0, 1, 2, 3, 4].forEach((indx) => {
            if (species[indx].includes(specie)) {
                row.push("✅");
            } else {
                row.push("❌");
            }
        });
        return row;
    });

    console.log(Array.from(allSpecies));
    return (
        <>
            <Table responsive style={{ 'text-align': 'center' }}>
                <thead className="text-primary">
                    <tr>
                        {headings.map((heading, index) => (
                            <th key={index}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((land, index) => {
                        return (
                            <tr>
                                {land.map((val, index) => {
                                    return <td>{val}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );   
}

const SpeciesCoverTable = ({ mangroveKey }) => {
    if (mangroveKey === "All") {
        return AllSpeciesTable();
    }
    const headings = ["Sr. No.", "Species"];
    const data = species[mangroveKeys.indexOf(mangroveKey)]
                    .map((specie, index) => {
                        return [String(index + 1) + ".",  (specie[0]).toString().toUpperCase() + specie.slice(1).toLowerCase()]
                    });

    return (
        <>
            <Table responsive style={{ 'text-align': 'center' }}>
                <thead className="text-primary">
                    <tr>
                        {headings.map((heading, index) => (
                            <th key={index}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((land, index) => {
                        return (
                            <tr>
                                {land.map((val, index) => {
                                    return <td>{val}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );   
}

function Dataset() {
    const [mangrove, setMangrove] = React.useState("Krishna");

    
    const mangroveName = new Map([
        ["Bhitarkanika", "Bhitarkanika"],
        ["Kachchh", "Gulf of Kachchh"],
        ["Krishna", "Krishna Godavari"],
        ["Sundarbans", "Sunderbans"],
        ["Andaman", "Andaman and Nicobar"],
        ["All", "All Mangroves"]
    ])

    const MangroveDropDown = () => {
        const [dropdownOpen, setDropdownOpen] = React.useState(false);
        const toggle = () => setDropdownOpen((prevState) => !prevState);

        return (
            <>
                <div className="d-flex p-5">
                    <UncontrolledDropdown 
                    // isOpen={dropdownOpen} toggle={toggle} direction={"down"}
                    >
                        <Typography>Mangrove: <DropdownToggle  caret> {mangroveName.get(mangrove)} </DropdownToggle> </Typography>
                        <DropdownMenu >
                            {mangroveKeys.map((mangroveKey) => (
                                <DropdownItem 
                                    onClick={() => setMangrove(mangroveKey)}
                                >
                                    {mangroveName.get(mangroveKey)}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </>);
    }


    return (
        <>
            <div className="content" style={{'marginTop': '3vh'}}>
                <Row>
                    <MangroveDropDown />
                </Row>  

                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">List of Species of {mangroveName.get(mangrove)} </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <SpeciesCoverTable mangroveKey={mangrove} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Dataset;
