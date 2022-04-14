import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { ActiveShapePieChart, EventBarChart, MonochromePieChart, PolarAreaCharts } from "../../../../components/GraphComponents/components";
import { CricularProgressBar } from '../../components';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 'auto',
    },
    commongraphContainer: {
        maxWidth: 'auto',
        height: '200px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    orange: {
        fontSize: '16px',
        textTransform: 'uppercase',
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function GraphContainerCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [affProjectsTeamMembers, setAffProjectsTeamMembers] = useState([]);

    useEffect(() => {
        setAffProjectsTeamMembers([
            {
                affname: 'Clerk Kent',
                affemail: 'clerkkent@gmail.com'
            },
            {
                affname: 'James Bond',
                affemail: 'james@gmail.com'
            },
            {
                affname: 'Clerk Kent',
                affemail: 'Bond@gmail.com'
            },
            {
                affname: 'Bond Kent',
                affemail: 'kent@gmail.com'
            },
            {
                affname: 'Clerk Kent',
                affemail: 'clerkkent@gmail.com'
            },
            {
                affname: 'Clerk Kent',
                affemail: 'clerkkent@gmail.com'
            }
        ])
    }, []);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const generateRandomNum = () => {
        return Math.abs(Math.floor(Math.random() * (1 - affProjectsTeamMembers.length) + 1));
    }
    return (
        <React.Fragment className="bg-white">
            <section className="px-2 gap-2 md:grid grid-cols-12">
                <div className='col-span-9'>
                    <section className="px-2 gap-2 md:grid grid-cols-12">
                        <Card className='col-span-4' style={{ background: '#FEF7DA' }}>
                            <CardHeader
                                className="bg-white text-gray-500 font-bold h-9 border-b border-gray-200"
                                avatar={
                                    <div className="bg-blue-600 w-5 h-5 rounded-md">
                                        <svg className="w-4 h-4 text-white text-center mx-auto pt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd"></path></svg>
                                    </div>
                                }
                                titleTypographyProps={{ variant: 'subtitle2' }}
                                title="Total Statistics"
                            ></CardHeader>
                            <CardContent>
                                <ActiveShapePieChart />
                            </CardContent>
                        </Card>
                        <Card className='col-span-4' style={{ background: '#FFE7DD' }}>
                            <CardHeader
                                className="bg-white text-gray-500 font-bold h-9 border-b border-gray-200"
                                avatar={
                                    <div className="bg-blue-600 w-5 h-5 rounded-md">
                                        <svg className="w-4 h-4 text-white text-center mx-auto pt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path></svg>
                                    </div>
                                }
                                action={
                                    <button className="bg-white px-2 font-medium text-xs rounded-md" aria-label="settings">
                                        <div className="flex flex-row space-x-1 justify-between items-center">
                                            <p>Today</p>
                                            <div>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </div>
                                        </div>
                                    </button>
                                }
                                title="Total Statistics"
                            ></CardHeader>
                            <CardContent>
                                <MonochromePieChart />
                            </CardContent>
                        </Card>
                        <Card className='col-span-4' style={{ background: '#F0DCFF' }}>
                            <CardHeader
                                className="bg-white text-gray-500 font-bold h-9 border-b border-gray-200"
                                avatar={
                                    <div className="bg-blue-600 w-5 h-5 rounded-md">
                                        <svg className="w-4 h-4 text-white text-center mx-auto pt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"></path></svg>
                                    </div>
                                }
                                title="Total Statistics"
                            ></CardHeader>
                            <CardContent>
                                <EventBarChart />
                            </CardContent>
                        </Card>
                        <div className='col-span-4 bg-white shadow-sm p-2 pt-1 rounded-sm'>
                            <div className="flex items-center justify-between text-sm border-b border-gray-200">
                                <div>
                                    <button className="py-1 w-20 text-sm capitalize font-semibold select-none h-full focus:outline-none border-b border-black">
                                        Employees
                                    </button>
                                </div>
                            </div>
                            <ul className="py-1 h-64 bg-white shadow-sm rounded-sm sm:h-40 overflow-auto custom-scroll scrollbar">
                                {
                                    affProjectsTeamMembers && affProjectsTeamMembers.length !== 0 ?
                                        affProjectsTeamMembers.map((el, index) => {
                                            return (
                                                <li className={index % 2 == 0 ? "bg-gray-50 rounded-md" : ""}>
                                                    <div>
                                                        <button className="flex items-center w-full px-0 py-2 select-none hover:bg-gray-100 focus:outline-none">
                                                            <img alt="team" className="w-10 h-10 object-cover object-center flex-shrink-0 rounded-full mr-4" src={'/img/avatar-' + generateRandomNum() + '.svg'} />
                                                            <div className="transform translate-y-0.5 text-left ml-2 w-full">
                                                                <div className='flex flex-row w-full justify-between'>
                                                                    <h3 className="leading-4 text-sm font-bold text-indigo-700 capitalize">{el.affname}</h3>
                                                                </div>
                                                                <span className="text-xs text-gray-500">{el.affemail}</span>
                                                            </div>
                                                        </button>
                                                        <div className='border-dashed border-b-2 border-gray-200 w-52 mx-auto'></div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                        :
                                        <li>
                                            <p className="text-sm font-bold mt-4">Click on a project to view affiliates</p>
                                            <img alt="team" className="w-48 h-48 mx-auto object-fit object-center flex-shrink-0 rounded-md mr-4" src="./img/notfound.svg" />
                                        </li>
                                }
                            </ul>
                        </div>
                        <div className='col-span-8'>
                            <div className="p-2 w-full">
                                <div className="bg-white h-full flex items-center border-gray-200 border p-2 rounded-lg">
                                    <div className='flex flex-col space-y-1'>
                                        <div>
                                            <img alt="team" className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md mr-4" src="./img/empy.png" />
                                        </div>
                                        <div className='flex flex-row justify-around'>
                                            <p className='text-xs text-gray-800 font-bold'>Clerk Kent</p>
                                            <svg className="w-4 h-4 mr-3 text-indigo-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        </div>
                                    </div>

                                    <div className="flex-grow space-y-4">
                                        <div className="flex-grow">
                                            <h2 className="text-gray-500 title-font font-bold">Total Affiliates</h2>
                                            <div className='flex flex-row space-x-1 items-center'>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                                                <p className="text-blue-500 font-bold text-sm">857</p>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="text-gray-500 title-font font-bold">Total Offers</h2>
                                            <p className="text-blue-500 font-bold text-sm">58</p>
                                        </div>
                                    </div>
                                    <div className="flex-grow space-y-4">
                                        <div className="flex-grow">
                                            <h2 className="text-gray-500 title-font font-bold">Total Conversion</h2>
                                            <div className='flex flex-row space-x-1 items-center'>
                                                <p className="text-blue-500 font-bold text-sm">85,904</p>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path></svg>
                                            </div>

                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="text-gray-500 title-font font-bold">Revenue</h2>
                                            <div className='flex flex-row space-x-1 items-center'>
                                                <p className="text-blue-500 font-bold text-sm">85,85958</p>
                                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow space-y-4">
                                        <div className="flex-grow">
                                            <h2 className="text-gray-500 title-font font-bold">Payout</h2>
                                            <div className='flex flex-row space-x-1 items-center'>
                                                <p className="text-blue-500 font-bold text-sm">29,4049</p>
                                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="text-gray-500 title-font font-bold">Earnings</h2>
                                            <div className='flex flex-row space-x-1 items-center'>
                                                <p className="text-blue-500 font-bold text-sm">99.8787</p>
                                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mx-2'>
                                <p className='text-sm font-semibold text-gray-600'>Team Members</p>
                                <div className='teamcontainer py-1'>
                                    <div className='flex flex-row justify-start space-x-2'>
                                        <Avatar className={classes.orange}>AG</Avatar>
                                        <Avatar className={classes.orange}>NH</Avatar>
                                        <Avatar className={classes.orange}>AS</Avatar>
                                        <Avatar className={classes.orange}>JY</Avatar>
                                        <Avatar className={classes.orange}>FS</Avatar>
                                        <Avatar className={classes.orange}>TJ</Avatar>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='col-span-3 bg-white shadow-sm p-2 pt-1 rounded-sm'>
                    <div className="flex items-center justify-between text-sm border-b border-gray-200">
                        <div>
                            <button className="py-1 w-20 text-sm capitalize font-semibold select-none h-full focus:outline-none border-b border-black">
                                Affiliates
                            </button>
                        </div>
                        <div>
                            <button className="py-1 w-20 text-sm capitalize font-semibold select-none h-full focus:outline-none border-b border-black">
                                Convertion
                            </button>
                        </div>
                    </div>
                    <ul className="py-1 h-64 sm:h-96 overflow-auto custom-scroll scrollbar">
                        {
                            affProjectsTeamMembers && affProjectsTeamMembers.length !== 0 ?
                                affProjectsTeamMembers.map((el, index) => {
                                    return (
                                        <li className={index % 2 == 0 ? "bg-gray-50 rounded-md" : ""}>
                                            <div>
                                                <div className="flex flex-row justify-between  items-center w-full px-0 py-2 select-none hover:bg-gray-100 focus:outline-none">
                                                    <div className="flex flex-row w-full justify-start">
                                                        <img alt="team" className="w-12 h-12 object-cover object-center flex-shrink-0 rounded-full" src={'/img/avatar-' + generateRandomNum() + '.svg'} />
                                                        <div className="transform translate-y-0.5 text-left ml-2 w-96">
                                                            <div className='flex flex-row w-full justify-between'>
                                                                <h3 className="leading-4 text-sm font-bold text-indigo-700 capitalize">{el.affname}</h3>
                                                            </div>
                                                            <span className="text-xs text-gray-500">{el.affemail}</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <CricularProgressBar percent={60} customclass='w-12 h-12 font-bold' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='border-dashed border-b-2 border-gray-200 w-52 mx-auto'></div>
                                            </div>
                                        </li>
                                    )
                                })
                                :
                                <li>
                                    <p className="text-sm font-bold mt-4">Click on a project to view affiliates</p>
                                    <img alt="team" className="w-48 h-48 mx-auto object-fit object-center flex-shrink-0 rounded-md mr-4" src="./img/notfound.svg" />
                                </li>
                        }
                    </ul>
                </div>
            </section>
        </React.Fragment>
    );
}
