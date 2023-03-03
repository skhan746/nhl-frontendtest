//Members.jsx
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Featurebox from './Featurebox'

import { FaLinkedin, FaGithub, FaUser } from 'react-icons/fa';



import ReactIcon from '../images/physics.png'
import CSSIcon from '../images/css-3.png'


import pr from '../images/user.png'

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };




function Members() {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [icon1, setIcon1] = React.useState('');
  const [icontitle1, seticonTitle1] = React.useState('');
  const [icon2, setIcon2] = React.useState('');
  const [icontitle2, seticonTitle2] = React.useState('');
  const [linkedin, setLinkedin] = React.useState('');
  const [github, setGithub] = React.useState('');
  const [resume, setResume] = React.useState('');
  
  const handleOpen = (name, position, icon1, icontitle1, icon2, icontitle2, linkedin, github, resume) => {
    setOpen(true);
    setName(name);
    setPosition(position);
    setIcon1(icon1);
    seticonTitle1(icontitle1)
    setIcon2(icon2);
    seticonTitle2(icontitle2)
    setLinkedin(linkedin);
    setGithub(github);
    setResume(resume);
}


  const handleClose = () => setOpen(false);
  return (
    <div id='members'>
      <div id='features'>
    <h1>Team Members</h1>
    <div className='a-container'>
    <Featurebox 
          image={pr} 
          title="Ethan" 
          desc="Data-Analyst" 
          onClick={() => handleOpen('Ethan', 'Data Analyst Technologies used', <img src={ReactIcon} alt="React icon" width="30" height="30" />, <img src={CSSIcon} alt="CSS icon" width="30" height="30" />, "", "", "")} 
      />
    <Featurebox 
          image={pr} 
          title="James" 
          desc="Back-End"
          onClick={() => handleOpen('James', 'Back-End Technologies used', <img src={ReactIcon} alt="React icon" width="30" height="30" />,'React', <img src={CSSIcon} alt="CSS icon" width="30" height="30" />,'CSS', "", "", "")} 
      />
    <Featurebox
      image={pr}
      title="Shaz"
      onClick={() => handleOpen('Shahzore Khan', 'front-end Technologies used', <img src={ReactIcon} alt="React icon" width="30" height="30" />,'React', <img src={CSSIcon} alt="CSS icon" width="30" height="30" />,'CSS', "https://www.linkedin.com/in/shahzorek/", "https://github.com/skhan746", "https://shaz-k.me")}
      desc="Front-End"
      />
        <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            {position}
            <ul>
              <li>{icon1} {icontitle1}</li>
              <li>{icon2} {icontitle2}</li>

            </ul>
            Check out my LinkedIn, GitHub, and resume:
            <ul>
              <li><a href={linkedin}><FaLinkedin /> Linkedin</a></li>
              <li><a href={github}><FaGithub /> GitHub</a></li>
              <li><a href={resume}><FaUser /> Personal Website</a></li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>


    
</div>

    </div>
    

  )
}

export default Members