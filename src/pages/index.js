import React from "react"
import inkCloud from "../images/inkCloud.mp4"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    video: {
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "101%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
      filter: "brightness(40%)",
    },
    text: {
      height: "100vh",
      fontFamily: "Lato, sans-serif",
      fontWeight: 900,
      fontSize: "2.8rem",
      paddingLeft: "2rem",
      lineHeight: "4rem",
      color: "white",
      display: "flex",
      alignItems: "center",
      marginTop: "auto",
    },
    container: {
      overflow: "auto",
    },
    button: {
      zIndex: 3,
      color: "white",
      backgroundColor: "#1064B0",
      textTransform: "none",
      fontFamily: "Poppins, sans-serif",
      padding: "0.7rem",
      transition: "all 0.4s ease",
      "&:hover": {
        backgroundColor: "#1064B0",
        opacity: "85%",
      },
    },
    subText: {
      fontWeight: 'lighter',
      paddingTop: '0.9rem',
      paddingBottom: '0.9rem',
      fontFamily: 'Raleway, sans-serif',
      fontSize: '1rem',
      lineHeight: '2rem',
    },
  })
)

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.root}>
        <SEO title="Home" />
        <div className={classes.container}>
          <video autoPlay muted loop="loop" className={classes.video}>
            <source src={inkCloud} type="video/mp4" />
          </video>
        </div>
        <div className={classes.text}>
          <div>
            Focus on what you do best.
            <br />
            We'll find you the clients.
            <br />
            <div className={classes.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Aliquam
              at enim vitae magna vulputate venenatis. Maecenas <br/>feugiat quam
              quis quam varius molestie.
            </div>
            <Button className={classes.button}>Get In Touch</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
