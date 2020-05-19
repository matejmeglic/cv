import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <em className="date">{education.graduated}</em>
        <p className="info">{education.degree}</p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p className="workLocation">{work.location}</p>
            <p>{work.description}</p>
        </div>
      })
      var otherWork = this.props.data.other_work.map(function(work){
        var backgroundColor = "";
        (work.background) ? backgroundColor = "infoYellow":backgroundColor = "info";
        return <div key={work.title}>
            
            <p className={backgroundColor}><span>{work.title}</span></p>
            <p className="workLocation">{work.location}</p>
        </div>
      })
      var consulting = this.props.data.consulting.map(function(work){
        return <div key={work.title}>
            <p className="info">{work.company}</p>
            <p className="workLocation">{work.title}</p>
        </div>
      })
      var volunteering = this.props.data.volunteering.map(function(work){
        var backgroundColor = "";
        (work.background) ? backgroundColor = "infoYellow":backgroundColor = "info";
        return <div key={work.title}>
            <p className={backgroundColor}><span>{work.title}</span></p>
            <p className="workLocation">{work.years}</p>
        </div>
      })
      var languages = this.props.data.languages.map(function(lang){
        return <div key={lang.lang}>
            <p className="workLocation"><b>{lang.lang}</b> - {lang.proficiency}</p>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row work">
         <div className="three columns header-col">
            <h1><span>EXPERIENCE</span></h1>
         </div>
         <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1><span>RELEVANT PROJECTS</span></h1>
        </div>
        <div className="nine columns main-col">
          {otherWork}
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1><span>STUDENT WORK</span></h1>
        </div>     
        <div className="nine columns main-col">
          {consulting}
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1><span>VOLUNTEERING</span></h1>
        </div> 
        <div className="nine columns main-col">
          {volunteering}
        </div>
      </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>EDUCATION</span></h1>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1><span>LANGUAGES</span></h1>
        </div> 
        <div className="nine columns main-col">
        {languages}
        </div>
      </div>
                  
   </section>
);
  }
}

export default Resume;
