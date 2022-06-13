import React from 'react'
import './createhack.css'
import { useRef, useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';
import ChipInput from 'material-ui-chip-input'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

function CreateHack() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [clicked, setClicked] = useState(false);
    const [hackimgadded, setHackimgadded] = useState(false);
    const [hackimg, setHackimg] = useState();
    const [hackname, setHackname] = useState();
    const [orgwalletid, setOrgwalletid] = useState();
    const [websitelink, setWebsitelink] = useState();
    const [hackdisc, setHackdisc] = useState();
    const [hackenddate, setHackenddate] = useState();
    const [submissiondate, setSubmissiondate] = useState();
    const [judgelist, setJudgelist] = useState([{ "name": "", "title": "", "pic": null, "email": "", "linkedin": "", "wallet_id": "" }]);
    const [prizelist, setPrizelist] = useState([{ "name": "", "amount": "", "track": "", "pic": null }]);
    const [teams, setTeams] = useState([]); //array of team leads wallet ids

    const fillform = useRef();
    const steponeball = useRef();
    const steptwoball = useRef();
    const stepthreeball = useRef();
    const [step, setStep] = useState(1);

    const nextstep = (step) => {
        if (step < 3) {
            setStep(step + 1);
            fillform.current.style.transform = `translateX(${fillform.current.getBoundingClientRect().x - document.documentElement.clientWidth}px)`;
        }

        if (step === 3) {
            // code for backend
        }
    }

    const prevstep = (step) => {
        if (step > 1) {
            setStep(step - 1);
            fillform.current.style.transform = `translateX(${fillform.current.getBoundingClientRect().x + document.documentElement.clientWidth}px)`;
        }
    }

    useEffect(() => {
        if (step === 1) {
            steponeball.current.style.backgroundColor = "greenyellow"
            steptwoball.current.style.backgroundColor = "#fff"
            stepthreeball.current.style.backgroundColor = "#fff"
        }
        else if (step === 2) {
            steponeball.current.style.backgroundColor = "#fff"
            steptwoball.current.style.backgroundColor = "greenyellow"
            stepthreeball.current.style.backgroundColor = "#fff"
        }
        else {
            steponeball.current.style.backgroundColor = "#fff"
            steptwoball.current.style.backgroundColor = "#fff"
            stepthreeball.current.style.backgroundColor = "greenyellow"
        }
    }, [step]);

    useEffect(() => {

    }, [])

    return (
        <div className="wrapper">
            <div className="steps">
                <div style={{ height: "60%", width: "100%", display: "flex", justifyContent: "space-between" }}><h2 style={{ marginTop: "10px", paddingLeft: "15px", paddingBottom: "12px", textAlign: "left", color: "#fff" }}>Create A Hackthon In 3 Simple Steps</h2> <ClearIcon id='addbtn' sx={{ marginTop: "10px", paddingRight: "15px", paddingBottom: "12px", color: "white" }} onClick={() => { /*redirect back*/ }} /></div>
                <div className="strip">
                    <div className="ball" ref={steponeball}>1</div>
                    <div className="ball" ref={steptwoball}>2</div>
                    <div className="ball" ref={stepthreeball}>3</div>
                </div>

            </div>
            <div className="fillform" ref={fillform}>
                <div className='form'>
                    <h3>Basic Details</h3>
                    <div className="basicdetails">
                        <div style={{ display: "flex", height: "100%", width: "50%", flexDirection: "column", justifyContent: "space-evenly" }}>
                            <TextField label={"Name of the hackathon"} sx={{ width: "50%" }} onChange={(e) => { setHackname(e.target.value) }} />
                            <TextField label={"Organizer wallet id"} sx={{ width: "72%" }} onChange={(e) => { setOrgwalletid(e.target.value) }} />
                            <TextField label={"Discription"} multiline maxRows={4} minRows={4} sx={{ width: "72%" }} onChange={(e) => { setHackdisc(e.target.value) }} />
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <div>
                                    <label for="endsub">Last date for submissions </label>
                                    <input type="date" id="endsub" name="birthday" style={{ width: "30%" }} onChange={(e) => { setSubmissiondate(e.target.value) }} />
                                </div>
                                <div>
                                    <label for="endhack">End date for the hackathon </label>
                                    <input type="date" id="endhack" name="birthday" style={{ width: "30%" }} onChange={(e) => { setHackenddate(e.target.value) }} />
                                </div>
                            </div>

                        </div>
                        <div style={{ display: "flex", height: "100%", width: "50%", flexDirection: "column", justifyContent: "start", alignItems: "center" }}>
                            <div style={{
                                height: "65%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }} >
                                <h4 style={{ marginTop: 0, display: (hackimgadded ? "none" : "") }}>Click below to an image for the hackathon</h4>
                                <input id='inputhackimg' type={"file"} style={{ display: "none" }} onChange={(e) => { setHackimgadded(true); setHackimg(e.target.files[0]); }} />
                                {hackimgadded ? <img src={URL.createObjectURL(hackimg)} height={250} width={250} /> : <AddPhotoAlternateIcon id="addhackimg" sx={{ transform: "scale(8)", marginTop: "100px" }} onClick={() => { document.getElementById("inputhackimg").click(); }} />}
                            </div>
                            <TextField label={"Hackthon website link"} sx={{ width: "50%", marginTop: "8%" }} onChange={(e) => { setWebsitelink(e.target.value) }} />
                            <div className="paybtn" onClick={handleOpen}>
                                Add teams
                            </div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ marginBottom: "10px" }}>
                                        Enter all the team leaders' wallet ids
                                    </Typography>
                                    <div style={{ borderRadius: "15px", height: "80%", width: "95%", backgroundColor: "whitesmoke", padding: "15px" }}>
                                        <ChipInput
                                            defaultValue={teams}
                                            onChange={(chips) => setTeams(chips)}
                                            style={{ height: "90%", width: "100%", overflow: "auto" }}
                                            disableUnderline={true}
                                        />
                                        <hr />
                                    </div>
                                </Box>
                            </Modal>
                        </div>
                    </div>

                </div>
                <div className='form'>
                    <h3>Judge Details</h3>
                    <div className="judgedetails">
                        <div className="thelist">
                            {judgelist.map((judge) => {
                                return (
                                    <div className="detailscard">
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'space-evenly', height: "100px" }}>{judge.pic ? <img src={URL.createObjectURL(judge.pic)} height={85} width={85} style={{ borderRadius: "100%" }} /> : <AccountCircleIcon id="addbtn" sx={{ transform: "scale(4)", marginBottom: "15px", paddingTop: "5px" }} onClick={() => { document.getElementById("judgeimg-" + judgelist.indexOf(judge)).click(); }} />}</div>
                                        <input id={"judgeimg-" + judgelist.indexOf(judge)} type={"file"} style={{ display: "none" }} onChange={(e) => { judge.pic = e.target.files[0]; setClicked(!clicked); }} />
                                        <TextField label={"Name"} sx={{ width: "90%" }} variant="filled" onChange={(e) => { judge.name = e.target.value; }} />
                                        <TextField label={"Title"} sx={{ width: "90%" }} variant="filled" onChange={(e) => { judge.title = e.target.value; }} />
                                        <TextField label={"Email"} sx={{ width: "90%" }} variant="filled" onChange={(e) => { judge.email = e.target.value; }} />
                                        <TextField label={"LinkedIn Id"} sx={{ width: "90%" }} variant="filled" onChange={(e) => { judge.linkedin = e.target.value; }} />
                                        <TextField label={"Wallet Id"} sx={{ width: "90%" }} variant="filled" onChange={(e) => { judge.wallet_id = e.target.value; }} />
                                    </div>
                                )
                            })}
                        </div>
                        <AddCircleIcon id="addbtn" sx={{ transform: "scale(8)" }} onClick={() => { setClicked(!clicked); let newjudgelist = judgelist; newjudgelist.push({ "name": "", "title": "", "pic": null, "email": "", "linkedin": "", "wallet_id": "" }); setJudgelist(newjudgelist); }} />
                    </div>
                </div>
                <div className='form'>
                    <h3>Prizes Details</h3>
                    <div className="prizedetails">
                        <div className="thelist">
                            {prizelist.map((prize) => {
                                return (
                                    <div className="detailscard">
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'space-evenly', height: "100px" }}>{prize.pic ? <img src={URL.createObjectURL(prize.pic)} height={85} width={85} style={{ borderRadius: "100%" }} /> : <EmojiEventsIcon id="addbtn" sx={{ transform: "scale(4)", marginBottom: "15px", paddingTop: "5px" }} onClick={() => { document.getElementById("prizeimg-" + prizelist.indexOf(prize)).click(); }} />}</div>
                                        <input id={"prizeimg-" + prizelist.indexOf(prize)} type={"file"} style={{ display: "none" }} onChange={(e) => { prize.pic = e.target.files[0]; setClicked(!clicked); }} />
                                        <TextField label={"Name"} sx={{ width: "90%" }} variant="filled" />
                                        <TextField label={"Track"} sx={{ width: "90%" }} variant="filled" />
                                        <TextField label={"Amount"} sx={{ width: "90%" }} variant="filled" />
                                        <div className="paybtn">PAY NOW</div>
                                    </div>
                                )
                            })}
                        </div>

                        <AddCircleIcon id="addbtn" sx={{ transform: "scale(8)" }} onClick={() => { setClicked(!clicked); let newprizelist = prizelist; newprizelist.push({ "name": "", "amount": "", "track": "", "pic": null }); setPrizelist(newprizelist); }} />

                    </div>
                </div>
            </div>
            <div className="footer">
                <div className='btn' onClick={() => { prevstep(step) }}>Prev</div>
                <div className='btn' onClick={() => { nextstep(step) }}>Next</div>
            </div>
        </div >
    )
}

export default CreateHack