import React from 'react'
import image from '../images/img-4.jpg'
import img5 from '../images/img-5.jpg'

const About = () => {
    return(
        <div className="about-page">

            <h3>About Us</h3>
            <hr /><br/>
            <img src={img5} alt="" className="left-img"/>
            <p>This app is for the software engineers who are seeking remote jobs. Due to COVID-19, there are thousands
            of companies running remotely and I took this as an opportunity to build this application,
            which can be beneficial for a lot of software engineers. This app is listing all the remote jobs, sorted by
            recent date and it's updating each time a new job is posted. There is also a search feature where you can search jobs by tags.
            Make sure to use only one word in search input to get an accurate result.

            </p>
            <img src={image} alt="" className="right-img"/>
            <p>Users can create accounts to save the jobs they are interested in. One job can be saved only one time.
            Users who don't have an account can still view all the jobs and apply for it. Actual job links are provided
            in the list so you can apply it directly from there. Users who have an account will have a private dashboard
            where all the saved jobs stay safely and once you apply for a job it can be removed from the dashboard anytime.
            </p>
                   
        </div>
    )
}

export default About