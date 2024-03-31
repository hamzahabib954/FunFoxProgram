import {Box, Typography} from "@mui/material";
import FunfoxLogo from "../assets/FunFoxLogo.svg";
import Pencil from "../assets/Pencil.svg";
import Week from "../assets/Week.svg";
import Scale from "../assets/Scale.svg";
import Bag from "../assets/Bag.svg";
import Book from "../assets/Book.svg";
import GreenBook from "../assets/GreenBook.svg";
import Question from "../assets/Question.svg";
import Cap from "../assets/Cap.svg";
import User from "../assets/User.svg";
import Info from "../assets/Info.svg";
import LeftArrow from "../assets/LeftArrow.svg";
import RightArrow from "../assets/ArrowRight.svg";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const pages = ['/', 'week2'];


const DefaultLayout = ({children}) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(1);

  const HandleNextClick = () => {
    if (currentIndex === pages.length) {
      return;
    } else {
      navigate(`${pages[currentIndex]}`);
      setCurrentIndex(currentIndex + 1);
    }
  }

  const HandlePreviousClick = () => {
    if (currentIndex === 1) {
      return;
    } else {
      navigate(`${pages[currentIndex - 2]}`);
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
      <>
        <Box sx={styles.mainBox}>
          <Box sx={styles.innerbox}>
            {children}
          </Box>
          <img src={FunfoxLogo} style={{position: 'absolute', top: '0', left: '0'}}/>
          <img src={Pencil} style={{position: 'absolute', top: '12%', left: '0'}}/>
          {currentIndex === 1 ? <img src={Week} style={{position: 'absolute', top: '0', left: '149px'}}/> : ''}
          <img src={Scale} style={{position: 'absolute', top: '18%', right: '0'}}/>
          <img src={Bag} style={{position: 'absolute', top: '38%', left: '0'}}/>
          <img src={Book} style={{position: 'absolute', bottom: '100px', left: '0'}}/>
          {currentIndex === 2 ? <img src={Question} style={{position: 'absolute', top: '38%', right: '0'}}/> :
              <img src={GreenBook} style={{position: 'absolute', top: '38%', right: '0'}}/>}
          <img src={Cap} style={{position: 'absolute', bottom: '20%', right: '0'}}/>
          <img src={User} style={{position: 'absolute', bottom: '0%', left: '4%'}}/>
          <img src={Info} style={{position: 'absolute', bottom: '0%', right: '4%'}}/>
          <Box sx={{
            position: 'absolute',
            left: {xs: 'calc(100% - 65%)', md: 'calc(100% - 55%)'},
            display: 'flex',
            flexDirection: 'row',
            marginTop: '8px',
          }}>
            <img style={{cursor: 'pointer'}} onClick={HandlePreviousClick} src={LeftArrow}/>
            <Box sx={styles.purpleBox}>
              <Typography sx={{color: 'white'}}>{currentIndex}</Typography>
            </Box>
            <img style={{cursor: 'pointer'}} onClick={HandleNextClick} src={RightArrow}/>
          </Box>


        </Box>
      </>
  )
}
export default DefaultLayout;

const styles = {
  mainBox: {backgroundColor: '#f5aebe', padding: '61px', position: 'relative'},
  innerbox: {backgroundColor: '#f7f9fe', borderRadius: '20px', padding: '24px',},
  purpleBox: {
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '4px',
    backgroundColor: '#cd3f97',
    height: '34px',
    width: '73px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}