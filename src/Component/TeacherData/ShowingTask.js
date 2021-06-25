import React from 'react'
import './ShowingTask.css'
function ShowingTask() {
    return (
        <div className="st">
            <h2 className="task__heading">Dashbaord</h2>
            <div className="days__buttons">
                <button>TODAY</button>
                <button>WEEKLY</button>
                <button>MONYHLY</button>
            </div>

            <div className="show__task" >
                <div className="days__buttons" >
                    <button>Timings</button>
                    <button>Teachers</button>
                    <button>Batches</button>
                </div>

                <div className="show__taskTable">
                    
                    <div className="show__tasker">
                        <span>1.)</span>
                        <h3>
                            <span>1:00 AM - 12:00 PM ,</span>
                            <span>Teacher A ,</span>
                            <span> M W F</span>
                        </h3>
                    </div>
                    <div className="show__tasker">
                        <span>2.)</span>
                        <h3>
                            <span>11:00 AM - 1:00 PM ,</span>
                            <span>Teacher B ,</span>
                            <span> M W F</span>
                        </h3>
                    </div>
                    <div className="show__tasker">
                        <span>3.)</span>
                        <h3>
                            <span>1:00 AM - 2:00 PM ,</span>
                            <span>Teacher C ,</span>
                            <span> M W F</span>
                        </h3>
                    </div>
                    <div className="show__tasker">
                        <span>4.)</span>
                        <h3>
                            <span>1:00 AM - 3:00 PM ,</span>
                            <span>Teacher D ,</span>
                            <span> M W F</span>
                        </h3>
                    </div>
                    <div className="show__tasker">
                        <span>5.)</span>
                        <h3>
                            <span>1:00 AM - 4:00 PM ,</span>
                            <span>Teacher E ,</span>
                            <span> M W F</span>
                        </h3>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default ShowingTask
