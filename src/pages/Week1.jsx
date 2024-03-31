import {Box, Grid, Stack, Typography} from "@mui/material";
import GirlPicture from "../assets/GirlPicture.svg";
import Element1 from "../assets/Element1.svg";
import Element2 from "../assets/Element2.svg";
import Element3 from "../assets/Element3.svg";
import Element4 from "../assets/Element4.svg";
import Element5 from "../assets/Element5.svg";


const elements = [
  {img: Element1},
  {img: Element2},
  {img: Element3},
  {img: Element4},
  {img: Element5},
]

const Week1 = () => {
  return (
      <>
        <Grid sx={styles.mainGrid} container>
          <Grid item>
            <Box sx={styles.pinkBox}>
              <Typography
                  sx={styles.mainTypography}>
                Elements of Story Writng</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={styles.introTypography}>
              Welcome to term 2 of Writers Club. Are you excited for this amazing journey?
              Over the next week, we will be practicing the different elements of story writing.
              Our aim is to make stories more interesting and exciting.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box sx={styles.blueBox}>
              <Typography sx={styles.whiteTypography}>
                There are five elements which make the foundation for story writing. An element is an essential part of
                something and every fiction story has the same key elements:
              </Typography>
              <img src={GirlPicture}/>
            </Box>
          </Grid>

          <Grid sx={{marginBottom: '20px',}} container justifyContent='space-evenly' spacing={2}>
            {elements.map((element, index) =>
                <Grid key={index} item xs={8} sm={6} md={2.2} lg={2}>
                  <img src={element.img}/>
                </Grid>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography
                sx={styles.simpleTypography}>
              You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go
              along.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box sx={styles.outterBox}>
              <Box
                  sx={styles.innerbox}>
                <Typography
                    sx={styles.innerTypography}>
                  For today’s lesson, we will try to understand and practice writing the setting for our stories.
                </Typography>
                <Typography
                    sx={styles.innerTypography}>
                  The setting is an important element of every fiction story.
                </Typography>
              </Box>
            </Box>
          </Grid>

        </Grid>


      </>
  )
}
export default Week1;
const styles = {
  pinkBox: {
    backgroundColor: "#f06684", border: '4px dotted', borderColor: '#f5aebe',
    borderRadius: 12,
    borderSpacing: '4px',
    marginBottom: '20px',
  },
  blueBox:{
    backgroundColor: "#42a3a1", border: '4px dotted', borderColor: '#a4fdfb',
    borderRadius: 12,
    borderSpacing: '4px',
    marginTop: '20px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  outterBox:{
    backgroundColor: "#f06684",
    borderRadius: 5,
    paddingX: '20px',
    paddingTop: '5px',
    paddingBottom: '10px',

  },
  innerbox: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  mainTypography:{marginX: '20px', color: 'white', width: '100%', fontSize: '32px', fontWeight: '400'},
  whiteTypography:{marginX: '20px', color: 'white', fontSize: '24px', fontWeight: '400'},
  introTypography:{color: '#1E242F', width: '100%', fontSize: '24px', fontWeight: '400'},
  simpleTypography: {color: '#1E242F', width: '100%', fontSize: '24px', fontWeight: '400', marginBottom: '20px',},
  mainGrid:{display: 'flex', justifyContent: 'center', alignItems: 'center'},
  innerTypography:{marginX: '20px', color: '#1E242F', width: '100%', fontSize: '24px', fontWeight: '400'},
}