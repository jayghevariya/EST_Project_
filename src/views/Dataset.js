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



const LandCoverTable = ({ mangroveKey }) => {
    const headings = land_cover["headings"][mangroveKey] || [];
    const data = land_cover["data"][mangroveKey] || [];

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
};

const SpeciesCoverTable = ({ mangroveKey }) => {
    const headings = species_cover["headings"][mangroveKey] || [];
    const data = species_cover["data"][mangroveKey] || [];

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

    const mangroveKeys = ["Krishna", "Sundarbans", "Bhitarkanika", "Andaman", "Kachchh"];

    const mangroveName = new Map([
        ["Krishna", "Krishna Godavari"],
        ["Kachchh", "Gulf of Kachchh"],
        ["Bhitarkanika", "Bhitarkanika"],
        ["Sundarbans", "Sunderbans"],
        ["Andaman", "Andaman and Nicobar"],
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
            <div className="content">
                <Row>
                    <MangroveDropDown />
                </Row>  
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Land Cover of {mangroveName.get(mangrove)} </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <LandCoverTable mangroveKey={mangrove} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                {mangrove !== "Kachchh" && (
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Species of {mangroveName.get(mangrove)} </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <SpeciesCoverTable mangroveKey={mangrove} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                )}

            </div>
        </>
    );
}

export default Dataset;
