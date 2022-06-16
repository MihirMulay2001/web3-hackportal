import React from 'react'
import './hackpage.css'
import HackHeader from '../components/HackHeader'
import { TextField } from '@mui/material'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import ChipInput from 'material-ui-chip-input'
import Modal from '@mui/material/Modal';
import hackData from "../data/data.json";
import ProjectsSection from "../sections/ProjectsSection";
import LeaderboardSection from "../sections/LeaderboardSection";

import { Link, useParams } from "react-router-dom";

import GavelIcon from "@mui/icons-material/Gavel";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import StarsIcon from "@mui/icons-material/Stars";

import GavelIcon from '@mui/icons-material/Gavel';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarsIcon from '@mui/icons-material/Stars';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import axios from 'axios';
import { useEffect } from 'react';

import axios from "axios";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 400,
    width: 400,
    bgcolor: "#9254C8",
    boxShadow: 24,
    p: 4,
    color: "white",
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function cleanlink(link) {
    var cleanlink = link;
    if (cleanlink.includes("youtu.be")) {
        cleanlink = cleanlink.replace("youtu.be", "www.youtube.com/embed");
    }
    if (cleanlink.includes("watch?v=")) {
        cleanlink = cleanlink.replace("watch?v=", "embed/");
    }
    if (cleanlink.includes("&")) {
        cleanlink = cleanlink.slice(0, cleanlink.indexOf("&"));
    }
    if (cleanlink.includes("?")) {
        cleanlink = cleanlink.slice(0, cleanlink.indexOf("?"));
    }
    console.log(cleanlink);
    return cleanlink;
}

function HackPage({ account, link }) {

    const [hackdata, setHackdata] = useState({});

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [projname, setProjname] = useState();
    const [projdisc, setProjdisc] = useState();
    const [repolink, setRepolink] = useState();
    const [videolink, setVideolink] = useState();
    const [livelink, setLivelink] = useState();

    const [teamname, setTeamname] = useState();
    const [teamlogo, setTeamlogo] = useState();
    const [teamlead_wallet_id, setTeamlead_wallet_id] = useState();
    const [teammates_wallet_ids, setTeammates_wallet_ids] = useState([]);

    const [cmts, setCmts] = useState(["Boob", "AssDick"]);

    const { hack_id } = useParams();

    const getlinkfromimg = async (img) => {
        var thelink;
        const data = new FormData();
        data.append("filetos3", img);
        await axios.post(link + "/filetos3", data).then((r) => {
            console.log(r.data);
            thelink = r.data;
        });
        return thelink;
    };

    const doSubmit = async () => {
        if (
            (await axios.get(link + "/event/getsubmissioninfo", {
                event_id: hack_id,
                team_leader_wallet_id: teamlead_wallet_id,
            })) === {}
        ) {
            await axios
                .post(link + "/user/addsubmission", {
                    event_id: hack_id,
                    team_name: teamname,
                    team_leader_wallet_id: teamlead_wallet_id,
                    teammates_wallet_ids: teammates_wallet_ids,
                    team_logo: getlinkfromimg(teamlogo),
                    proj_name: projname,
                    proj_disc: projdisc,
                    live_link: livelink,
                    repo_link: repolink,
                    video_link: livelink,
                })
                .then((r) => {
                    console.log(r);
                });
        } else {
            await axios
                .patch(link + "/user/updatesubmission", {
                    team_logo: getlinkfromimg(teamlogo),
                    proj_name: projname,
                    proj_disc: projdisc,
                    live_link: livelink,
                    repo_link: repolink,
                    video_link: livelink,
                })
                .then((r) => {
                    console.log(r);
                });
        }
    };

    useEffect(() => {
        const grabdata = async () => {
            await axios.get(link + '/event/info/' + localStorage.getItem('curr_hack_id')).then(r => { console.log(r.data.judges); setHackdata(r.data); })
        }
        grabdata();
    }, []);

    return (
        <div className="hackpgwrapper">
            {hackdata ?
                <HackHeader
                    hackname={hackdata.event_name}
                    hackimg={hackdata.event_logo}
                    judgelist={hackdata.judges}
                    hackdisc={hackdata.event_disc} /> : <></>}

            <div style={{ width: "97%", marginTop: "10px" }}>
                <Link style={{ display: "flex", aligItems: "center", justifyContent: "end" }} to={"/"}>Back to home  <ExitToAppIcon /></Link>
            </div>
            <Box sx={{ width: '100%', marginTop: "15px" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="My Submission" {...a11yProps(0)} />
                        <Tab label="All Submissions" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div>
                        <div>
                            <Accordion sx={{ marginBottom: "2px" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Project Details</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="submitcard">
                                        <div className="submitleft">
                                            <TextField label={"Project name"} sx={{ width: "50%" }} onChange={(e) => { setProjname(e.target.value) }} />
                                            <TextField label={"GitHub repo link"} sx={{ width: "50%" }} onChange={(e) => { setRepolink(e.target.value) }} />
                                            <TextField label={"Project live link"} sx={{ width: "50%" }} onChange={(e) => { setLivelink(e.target.value) }} />
                                            <TextField label={"Discription"} multiline maxRows={4} minRows={4} sx={{ width: "72%" }} onChange={(e) => { setProjdisc(e.target.value) }} />
                                        </div>
                                        <div className="submitright">
                                            <iframe width="100%" height="75%" src={videolink ? cleanlink(videolink) : "https://www.youtube.com/embed/MnrJzXM7a6o"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                            <TextField placeholder='Eg. https://www.youtube.com/watch?v=MnrJzXM7a6o' label={"Video link"} sx={{ width: "100%" }} onChange={(e) => { setVideolink(e.target.value) }} />
                                        </div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ marginBottom: "2px" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Team Details</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="submitcard">
                                        <div className="submitleft" style={{ alignItems: "center" }}>
                                            <TextField label={"Team name"} sx={{ width: "50%" }} onChange={(e) => { setProjname(e.target.value) }} />
                                            <TextField label={"Team lead's wallet id"} sx={{ width: "50%" }} onChange={(e) => { setTeamlead_wallet_id(e.target.value) }} />
                                            <div className="paybtn" style={{ width: "50%", margin: 0 }} onClick={handleOpen}>Add teammates' wallet ids</div>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ marginBottom: "10px" }}>
                                                        Enter all your teammates wallet ids
                                                    </Typography>
                                                    <div style={{ borderRadius: "15px", height: "80%", width: "95%", backgroundColor: "whitesmoke", padding: "15px" }}>
                                                        <ChipInput
                                                            defaultValue={teammates_wallet_ids}
                                                            onChange={(chips) => setTeammates_wallet_ids(chips)}
                                                            style={{ height: "90%", width: "100%", overflow: "auto" }}
                                                            disableUnderline={true}
                                                        />
                                                        <hr />
                                                    </div>
                                                </Box>
                                            </Modal>
                                        </div>
                                        <div className="submitright" style={{ alignItems: "center" }}>

                                            {teamlogo ? <img src={URL.createObjectURL(teamlogo)} style={{ height: "50%", width: "32%", borderRadius: "100%", objectFit: "cover" }} />
                                                :
                                                <GroupWorkIcon id="addbtn" sx={{ transform: "scale(8)" }} onClick={() => { document.getElementById("teamlogo").click(); }} />
                                            }
                                            <div>Click to upload team logo</div>
                                            <input id={"teamlogo"} type={"file"} style={{ display: "none" }} onChange={(e) => { setTeamlogo(e.target.files[0]); }} />
                                        </div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                    <Typography>Coins & Comments</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{ display: "flex", justifyContent: "end", marginBottom: "2%" }}>
                                        <div style={{ marginRight: "3%", display: "flex", alignItems: "center" }}>
                                            <GavelIcon />
                                            {69}
                                        </div>
                                        <div style={{ marginRight: "3%", display: "flex", alignItems: "center" }}>
                                            <LocalFireDepartmentIcon />
                                            {69}
                                        </div>
                                        <div style={{ marginRight: "3%", display: "flex", alignItems: "center" }}>
                                            <StarsIcon />
                                            {69}
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            cmts.map((cmt) => {
                                                return (
                                                    <div style={{
                                                        height: "10%",
                                                        borderRadius: "5px",
                                                        margin: "10px",
                                                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                                        overflow: "auto"
                                                    }}>
                                                        <p style={{ padding: "10px" }}>{cmt}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className="submitbtn" onClick={doSubmit}>
                                Sumbit
                            </div>
                        </div>
                    </div >
                </TabPanel >
                <TabPanel value={value} index={1}>
                    {hackData.hacktimeout ? (
                        hackData.votetimeout ? (
                            <LeaderboardSection />
                        ) : (
                            <ProjectsSection hackId={"hackId"} />
                        )
                    ) : (
                        <div> Wait until hackathon is over </div>
                    )}
                </TabPanel>
            </Box >
        </div >
    );
}

export default HackPage;
