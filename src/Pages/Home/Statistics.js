import React from 'react';

const Statistics = () => {
    return (
        <section className='my-12' >
            <h2 className='text-center' >Statistics</h2>
            <div className='flex items center justify-center'>
                <div class="stats stats-vertical lg:stats-horizontal shadow p-12">

                    <div class="stat">
                        <div class="stat-title">Total Course</div>
                        <div class="stat-value">20</div>
                        <div class="stat-desc">New courses are coming</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">Students</div>
                        <div class="stat-value">420M</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">Job Placement Team</div>
                        <div class="stat-value">100</div>
                        <div class="stat-desc">Success: (14%)</div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Statistics;