import React from 'react';

const Statistics = () => {
    return (
        <section className='my-12' >
            <h2 className='text-center' >Statistics</h2>
            <div className='flex items center justify-center'>
                <div className="stats stats-vertical lg:stats-horizontal shadow p-12">

                    <div className="stat">
                        <div className="stat-title">Total Course</div>
                        <div className="stat-value">20</div>
                        <div className="stat-desc">New courses are coming</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Students</div>
                        <div className="stat-value">420M</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Job Placement Team</div>
                        <div className="stat-value">100</div>
                        <div className="stat-desc">Success: (14%)</div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Statistics;