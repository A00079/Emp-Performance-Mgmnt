import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import { ActiveShapePieChart, EventBarChart, MonochromePieChart } from "../../../../components/GraphComponents/components";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
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

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <React.Fragment className="bg-white">
            <div class="w-full px-6 py-4">
                <div className="font-bold text-gray-400 text-lg">
                    Total Campaigns Completed
                </div>
                <h4 className="font-bold text-blue-600 text-lg">1,405</h4>
                <div class="w-full flex flex-row">
                    <div class="text-xs leading-none py-1 text-center text-white" style={{background: '#4CDA64',width: '3%'}}></div>
                    <div class="text-xs leading-none py-1 text-center text-white" style={{background: '#007AFF',width: '3%'}}></div>
                    <div class="text-xs leading-none py-1 text-center text-white" style={{background: '#FF00C6',width: '3%'}}></div>
                    <div class="text-xs leading-none py-1 text-center text-white" style={{background: '#FFCC00',width: '3%'}}></div>
                    <div class="text-xs leading-none py-1 text-center text-white" style={{background: '#D141F0',width: '3%'}}></div>
                </div>
            </div>
            <section class="px-6 py-4 grid grid-cols-3 gap-4">
                <Card className={classes.root}>
                    <CardHeader
                        className="bg-white text-gray-900 h-9 border-b border-gray-200"
                        avatar={
                            <div className="bg-indigo-400 w-6 h-6 rounded-md">
                            </div>
                        }
                        action={
                            <button className="bg-white px-2 border-2 font-bold text-xs border-indigo-500 rounded-md" aria-label="settings">
                                <div className="flex flex-row space-x-1 justify-between items-center">
                                    <p>Today</p>
                                    <div>
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </div>
                                </div>

                            </button>
                        }
                        title="Total Statistics"
                    ></CardHeader>
                    <CardContent>
                        <ActiveShapePieChart />
                    </CardContent>
                </Card>
                <Card className={classes.root}>
                    <CardHeader
                        className="bg-white text-gray-900 h-9 border-b border-gray-200"
                        avatar={
                            <div className="bg-indigo-400 w-6 h-6 rounded-md">
                            </div>
                        }
                        action={
                            <button className="bg-white px-2 border-2 font-bold text-xs border-indigo-500 rounded-md" aria-label="settings">
                                <div className="flex flex-row space-x-1 justify-between items-center">
                                    <p>Today</p>
                                    <div>
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
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
                <Card className={classes.root}>
                    <CardHeader
                        className="bg-white text-gray-900 h-9 border-b border-gray-200"
                        avatar={
                            <div className="bg-indigo-400 w-6 h-6 rounded-md">
                            </div>
                        }
                        title="Total Statistics"
                    ></CardHeader>
                    <CardContent>
                        <EventBarChart />
                    </CardContent>
                </Card>
            </section>
        </React.Fragment>
    );
}
