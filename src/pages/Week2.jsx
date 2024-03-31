import {Box, Grid, Stack, TextField, Typography} from "@mui/material";
import Beach from "../assets/Beach.svg";
import HauntedHouse from "../assets/HauntedHouse.svg";
import Clock from "../assets/Clock.svg";
import Home from "../assets/Home.svg";


const Week2 = () => {
  return (
      <>
        <Grid sx={styles.mainGrid} container >

          <Grid item xs={12} >
            <Typography sx={styles.mainTypography} >
              Can you figure out the definition of setting from the following examples?
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography sx={styles.subTypography} >
              (take a minute to think about this)
            </Typography>
          </Grid>

          <Grid sx={styles.innerGrid} container >
            <Grid item xs={12} sm={4} md={3} >
              <Box sx={styles.outterBox}>
                <img src={Beach}/>
              </Box>
              <Typography sx={styles.picTypography} >Sunny day at a beach</Typography>
            </Grid>
            <Grid item xs={12} sm={4}  md={3}>
              <Box sx={styles.outterBox}>
                <img src={HauntedHouse}/>
              </Box>
              <Typography sx={styles.picTypography} >
                A cold rainy night in a
                haunted house in October
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} >
            <Typography sx={styles.subTypography} >
              So, what do you think the definition of setting is?
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container sx={styles.grid2}>
              <Grid item  >
                <Typography sx={styles.simpleTypography}>
                  Any guesses?
                </Typography>
              </Grid>

              <Grid item xs={12} md={6} lg={8}  >
                <Box sx={styles.outterBox}>
                  <TextField fullWidth={true} variant='standard'></TextField>
                </Box>
              </Grid>

              <Grid sx={styles.item} item xs={4} sm={6} md={1}>
                <Typography sx={styles.hintTypography}>
                  Hint:
                </Typography>
                <img style={styles.img} src={Clock}/>
                <img style={styles.img} src={Home}/>
              </Grid>




            </Grid>
          </Grid>

          <Grid  item xs={12} >
            <Box sx={styles.blueBox} >
              <Typography sx={styles.innerTypography} >
                Setting is the time      and place     of a story. It often answers the questions: when? and where?
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} >
            <Typography sx={styles.endTypography}  >
              The time of the story could be in the past, future, day, night, summer or winter.
              A story may take place in a school, a mall, a desert, an airplane or in a variety
              of other places.
            </Typography>
          </Grid>



        </Grid>
      </>
  )
}
export default Week2

const styles = {
  outterBox:{
    backgroundColor: "white", border: '4px dotted', borderColor: '#cccccc',
    borderRadius: 2, // Adjust border radius if desired
    borderSpacing: '6px',
    padding: '20px',
    display:'flex',
    justifyContent:'center'
  },
  innerbox: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  blueBox: {  backgroundColor:"#42a3a1", border: '4px dotted', borderColor:'#a4fdfb',
    borderRadius: 12,
    borderSpacing: '4px',
    marginBottom:'20px',
  },
  mainGrid:{display:'flex', justifyContent:'center', alignItems:'center'},
  innerGrid:{marginBottom:'10px', display:'flex', justifyContent:'space-evenly'},
  grid2:{display: 'flex', flexDirection: 'row', marginBottom:'20px'},
  item:{display:'flex', flexDirection:'row', textAlign:'center', marginLeft:'10px'},
  mainTypography:{ color:'#1E242F', width:'100%', fontSize:'32px', fontWeight:'400', marginBottom:'20px'},
  subTypography:{ color:'#1E242F', width:'100%', fontSize:'24px', fontWeight:'400', marginBottom:'10px'},
  picTypography:{ color:'#1E242F', width:'100%', fontSize:'20px', fontWeight:'400'},
  simpleTypography:{color: '#1E242F', width: '100%', fontSize: '24px', fontWeight: '400', marginRight:'10px'},
  innerTypography: { marginX:'20px', color:'white', fontSize:'24px', fontWeight:'400'},
  hintTypography:{color: '#1E242F', width: '100%', fontSize: '24px', fontWeight: '400', alignSelf:'center'},
  img:{marginLeft: '10px'},
  endTypography:{ color:'#1E242F', width:'100%', fontSize:'20px', fontWeight:'400', marginBottom:'20px',},
}