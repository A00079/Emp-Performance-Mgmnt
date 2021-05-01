import React, { useEffect, useState } from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Text } from "../../../../../../components";
import Collapse from '@material-ui/core/Collapse';
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import LabelIcon from '@material-ui/icons/Label';

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingTop: theme.spacing(0),
        paddingLeft: theme.spacing(4),
        paddingBottom: theme.spacing(0),
    },
}));


const DynamicListItems = (props) => {
    const classes = useStyles();
    const [renderListItems, setRenderListItems] = useState([]);
    useEffect(async () => {
        await setRenderListItems(props.itemsData);
        await setDefaultActiveItem();
    }, []);

    const setDefaultActiveItem = () => {
        let element = document.querySelector(`${'#dashboard'}`);
        element.classList.add('border-blue-700', 'border-l-4', 'bg-blue-50');
    }

    const activePanel = (item) => {
        let listItems = document.getElementById('drawer-item-container');
        let element = document.querySelector(`${'#' + item}`);

        listItems.childNodes.forEach((el, index) => {
            el.classList.remove('border-blue-700', 'border-l-4', 'bg-blue-50');
            el.classList.add('border-white', 'border-l-4', 'bg-white', 'hover:border-blue-700', 'border-l-4', 'hover:bg-blue-50');
        })
        element.classList.add('border-blue-700', 'border-l-4', 'bg-blue-50');
        // handleDrawerOpen();
    };
    const handleListItem = (item, el) => {
        // if (!!el) {
        //     if (el == "close") {
        //     } else {
        //     }
        // }
        renderListItems.map((el_list, index) => {
            if (el_list.id === item.id && item.isexpanded) {
                el_list.isexpanded = false;
            } else if(el_list.id === item.id && !item.isexpanded){
                el_list.isexpanded = true;
            }
        })
        setRenderListItems([...renderListItems]);
        console.log('renderListItems', renderListItems);
    }

    return (
        <React.Fragment>
            {
                renderListItems.map((el, index) => {
                    return (
                        <React.Fragment>
                            <div
                                key={index}
                                id={el.id}
                                onClick={() => activePanel(el.id)}
                                className='border-white border-l-4 bg-white hover:border-blue-700 border-l-4 hover:bg-blue-50'
                            >
                                <ListItem button onClick={() => handleListItem(el, null)}>
                                    <ListItemIcon>
                                        <div className="bg-indigo-100 p-2 rounded -mx-3 sm:-mx-2">
                                            <svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Text
                                            classes="capitalize"
                                            size="sm"
                                            weight="700"
                                            variant="infoDark"
                                        >
                                            {el.itemname}
                                        </Text>
                                    </ListItemText>
                                    {el.hasdropdown ? el.isexpanded ? <ExpandMore /> : <ExpandLess /> : null}
                                </ListItem>
                            </div>
                            {
                                el.hasdropdown ?
                                    <Collapse in={el.isexpanded} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {
                                                el.subitemlist.map((sub_el, sub_index) => {
                                                    return (
                                                        <ListItem key={sub_index} button className={classes.nested}>
                                                            <ListItemIcon>
                                                                <div className="bg-indigo-100 p-0 rounded ">
                                                                    <LabelIcon
                                                                        className='text-green-700'
                                                                    />
                                                                </div>
                                                            </ListItemIcon>
                                                            <ListItemText>
                                                                <Text
                                                                    classes="capitalize"
                                                                    size="xs"
                                                                    weight="800"
                                                                    variant="black"
                                                                >
                                                                    {sub_el}
                                                                </Text>
                                                            </ListItemText>
                                                        </ListItem>
                                                    )
                                                })
                                            }
                                        </List>
                                    </Collapse>
                                    : null
                            }

                        </React.Fragment>
                    )
                })
            }
        </React.Fragment>
    )
}

export default DynamicListItems;