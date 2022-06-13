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


import GavelIcon from '@mui/icons-material/Gavel';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarsIcon from '@mui/icons-material/Stars';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 400,
    width: 400,
    bgcolor: '#9254C8',
    boxShadow: 24,
    p: 4,
    color: "white"
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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function cleanlink(link) {
    var cleanlink = link;
    if (cleanlink.includes("youtu.be")) {
        cleanlink = cleanlink.replace("youtu.be", "www.youtube.com/embed");
    }
    if (cleanlink.includes('watch?v=')) {
        cleanlink = cleanlink.replace("watch?v=", "embed/");
    }
    if (cleanlink.includes('&')) {
        cleanlink = cleanlink.slice(0, cleanlink.indexOf('&'));
    }
    if (cleanlink.includes('?')) {
        cleanlink = cleanlink.slice(0, cleanlink.indexOf('?'));
    }
    console.log(cleanlink);
    return cleanlink;
}

function HackPage() {

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
    return (
        <div className="hackpgwrapper">
            <HackHeader
                hackname={"Web3 Hack By BITS"}
                hackimg={"https://srmap.edu.in/file/2019/02/HackSRM.jpg?x51277"}
                judgelist={[{ "imglink": "https://www.macworld.com/wp-content/uploads/2021/10/steve-jobs-2-1.jpg?quality=50&strip=all", "name": "Steve Jobs", "title": "CEO of Apple", "email": "jobs@apple.com", "linkedin": "Steve Jobs" },
                { "imglink": "https://assets.entrepreneur.com/content/3x2/2000/1652298519-GettyImages-13276855511.jpg", "name": "Mark Zuck", "title": "CEO of Meta", "email": "mark@meta.com", "linkedin": "Mark Zuck" },
                { "imglink": "https://d.newsweek.com/en/full/1548436/rick-morty-elon-tusk.jpg?w=1600&h=1600&l=55&t=21&q=88&f=8ee9ccf4be0bcb709cc54809d1722cd7", "name": "Elon Tusk", "title": "CEO of Tesla", "email": "elon@tesla.com", "linkedin": "Elon Tusk" },
                { "imglink": "https://assets.entrepreneur.com/content/3x2/2000/1652298519-GettyImages-13276855511.jpg", "name": "Mark Zuck", "title": "CEO of Meta", "email": "mark@meta.com", "linkedin": "Mark Zuck" },
                { "imglink": "https://d.newsweek.com/en/full/1548436/rick-morty-elon-tusk.jpg?w=1600&h=1600&l=55&t=21&q=88&f=8ee9ccf4be0bcb709cc54809d1722cd7", "name": "Elon Tusk", "title": "CEO of Tesla", "email": "elon@tesla.com", "linkedin": "Elon Tusk" },
                { "imglink": "https://assets.entrepreneur.com/content/3x2/2000/1652298519-GettyImages-13276855511.jpg", "name": "Mark Zuck", "title": "CEO of Meta", "email": "mark@meta.com", "linkedin": "Mark Zuck" },
                { "imglink": "https://d.newsweek.com/en/full/1548436/rick-morty-elon-tusk.jpg?w=1600&h=1600&l=55&t=21&q=88&f=8ee9ccf4be0bcb709cc54809d1722cd7", "name": "Elon Tusk", "title": "CEO of Tesla", "email": "elon@tesla.com", "linkedin": "Elon Tusk" },
                { "imglink": "https://assets.entrepreneur.com/content/3x2/2000/1652298519-GettyImages-13276855511.jpg", "name": "Mark Zuck", "title": "CEO of Meta", "email": "mark@meta.com", "linkedin": "Mark Zuck" },
                { "imglink": "https://d.newsweek.com/en/full/1548436/rick-morty-elon-tusk.jpg?w=1600&h=1600&l=55&t=21&q=88&f=8ee9ccf4be0bcb709cc54809d1722cd7", "name": "Elon Tusk", "title": "CEO of Tesla", "email": "elon@tesla.com", "linkedin": "Elon Tusk" }, { "imglink": "https://assets.entrepreneur.com/content/3x2/2000/1652298519-GettyImages-13276855511.jpg", "name": "Mark Zuck", "title": "CEO of Meta", "email": "mark@meta.com", "linkedin": "Mark Zuck" },
                { "imglink": "https://d.newsweek.com/en/full/1548436/rick-morty-elon-tusk.jpg?w=1600&h=1600&l=55&t=21&q=88&f=8ee9ccf4be0bcb709cc54809d1722cd7", "name": "Elon Tusk", "title": "CEO of Tesla", "email": "elon@tesla.com", "linkedin": "Elon Tusk" }]}
                hackdisc={"Greetings from BITS Blockchain Club, BITS Pilani! We are a group of web3 enthusiasts and buidlers and are organizing the inaugural edition of our flagship event, Web3 Week, and as part of the event, will be hosting a hackathon for all the budding developers who are already building or want to start building with web3. This is an exciting opportunity for those who have been exploring web3 to get hands-on, practical coding experience in the ecosystem by ‘buidling’ out a project. We have partnered with LearnWeb3DAO for technical workshops for those who are just starting out with web3 and want to explore it more by participating in the hackathon, along with partners like Arcana, Biconomy and Celo, who will be sponsoring bounties for projects using their technology stack. So, buidlers, what are you waiting for? Register for the hackathon, rack your brains on cutting edge problems and buidl something cool!"} />
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
                            <Accordion>
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
                            <Accordion>
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
                            <Accordion >
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
                            <div className="submitbtn">Sumbit</div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Wait till the last date of submissions to see all the submissions...
                </TabPanel>
            </Box>
        </div>
    )
}

export default HackPage