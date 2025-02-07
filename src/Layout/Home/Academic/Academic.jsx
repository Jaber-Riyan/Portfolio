import React from 'react';
import { BiSolidInstitution } from 'react-icons/bi';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';

const Academic = () => {
    return (
        <div>
            <div className="">
                <div className='mb-8'>
                    <h2 className='md:text-4xl text-2xl text-center font-bold heading text-white md:w-2/4 w-[80%] border-2 mx-auto py-4 border-[#0ef] border-dashed uppercase shadow-[0_0_15px_#0ef] rounded-2xl'>
                        Academic Qualification
                    </h2>
                </div>

                <div className='p-6 text-white flex justify-center'>
                    <div className='shadow-[0_0_20px_#fff] p-6 rounded-2xl hover:shadow-[0_0_30px_#fff]'>
                        <div className="mb-4">
                            <h3 className="font-semibold para-strong-line text-3xl mb-4">🎓 Diploma in Computer Science & Technology</h3>
                            <p className="text-2xl font-semibold flex items-center gap-x-3 mb-2"><BiSolidInstitution /> <span>Moulvibazar Polytechnic Institute</span></p>
                            <p className="text-gray-300 font-medium flex items-center gap-x-3"><HiOutlineCalendarDateRange size={24} color='white' /><span>2022 - 2025 (Currently in 7th Semester)</span></p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-semibold para-strong-line mb-2">📊 CGPA Progress</h3>
                            <ul className="text-md text-gray-300 list-disc ml-6">
                                <li>1st Semester: <span className="font-semibold text-white">3.93</span></li>
                                <li>2nd Semester: <span className="font-semibold text-white">3.32</span></li>
                                <li>3rd Semester: <span className="font-semibold text-white">3.58</span></li>
                                <li>4th Semester: <span className="font-semibold text-white">3.74</span></li>
                                <li>5th Semester: <span className="font-semibold text-white">3.95</span></li>
                                <li>6th Semester: <span className="font-semibold text-white">Pending</span></li>
                                <li>7th Semester: <span className="font-semibold text-white">Ongoing</span></li>
                                <li>8th Semester: <span className="font-semibold text-white">Start on August 2025</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Academic;