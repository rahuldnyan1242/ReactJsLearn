import React, {useEffect} from 'react'
// import noteContext from '../contexts/notesContext'

const About = () => {
  // const aboutState = useContext(noteContext);

  useEffect(() => {
    if(localStorage.getItem('token')){

    }
  }, [])
  
  return (
    <div style={{marginTop:"4rem"}}>
      {/* This is About {aboutState.state.name} learning {aboutState.state.learning}. */}
      This is About Component.
    </div>
  )
}

export default About;
