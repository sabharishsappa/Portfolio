
import React from 'react';

const TimelineItem = (props) => {
  return (
    <div className="timeline-item mb-5 " >
      <div className="row" >
        <div className="col-lg-6 col-md-6 col-sm-6 ">
          <div className=" date-label-left position-relative text-md-end ">
            <img src={props.image} alt={props.company} style={{ color: "white" }} width="150" height="auto" ></img>
            <h5 style={{ color: "white" }} className="my-2" >{props.company}</h5>
          </div>
        </div>


        <div className="col-lg-6 col-md-6 col-sm-6 mt-6 mt-sm-0 ">

          <div className="event event-description-right float-left text-start">
            <h4 style={{ color: "white" ,textAlign:"left"}} className="">{props.startDate}  -  {props.endDate}</h4>
            <h6 className="title mt-4 text-capitalize purple my-2" style={{ fontWeight: 'bold' }}>{props.role}</h6>
            <p style={{ color: "white", paddingRight: "100px"}} className="" >{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;