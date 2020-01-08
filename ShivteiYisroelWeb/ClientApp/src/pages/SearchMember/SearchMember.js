import React, { useState } from "react";
import {
    Grid,
    LinearProgress,
    Select,
    OutlinedInput,
    MenuItem,
    TextField,
    FormControlLabel,
    Switch,
    InputBase,
    IconButton,
    Card,
    Button,
    CardActions,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    Paper,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
    ResponsiveContainer,
    ComposedChart,
    AreaChart,
    LineChart,
    Line,
    Area,
    PieChart,
    Pie,
    Cell,
    YAxis,
    XAxis,
    
} from "recharts";

import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import TuneIcon from '@material-ui/icons/Tune';

// styles
import useStyles from "./styles";

// icons
import * as Icons from "@material-ui/icons";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import MUIDataTable from "mui-datatables";

const datatableData = [
    ["Jacob Shwartz", "11", "Jun 4 2011", "Satmar", "3", "Active"],
    ["Mayer Weiss", "14", "Feb 14 2013", "Satmar", "3", "Active"],
    ["Yechiel Gold", "4", "Jun 24 2014", "Satmar", "3", "Active"],
    ["Moshe Goldberg", "19", "Jun 3 2010", "Satmar", "3", "Excersized"],
    ["Yitzchok Shimon", "10", "Jun 29 2018", "Satmar", "3", "Pending Signup"],
];

export default function SearchMember(props) {
    var classes = useStyles();
    var theme = useTheme();

    // local
    var [mainChartState, setMainChartState] = useState("monthly");
    const [checked, setChecked] = useState([0]);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
    };

    return (
        <>

            <Grid alignItems="flex-start" justify="flex-start" container spacing={1}>
                <Grid item xs={9}>
                    <PageTitle title="Search Member" />
                    <Grid alignItems="flex-end" justify="flex-end" container spacing={3}>
                        <Grid item xs={10}>
                            <Paper>
                                <IconButton type="submit" className={classes.searchIconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Search Google Maps"
                                    inputProps={{ 'aria-label': 'Type to filter' }}
                                />
                                <IconButton type="submit" className={classes.iconButton} aria-label="tune">
                                    <ClearIcon />
                                </IconButton>
                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <TuneIcon />
                                </IconButton>
                            </Paper>
                        </Grid>
                        
                        <Grid item xs={10}>
                            <Widget
                                title="Members"
                                upperTitle
                                noBodyPadding
                                bodyClass={classes.tableWidget}
                            >
                                <MUIDataTable
                                    data={datatableData}
                                    columns={["Name", "Age", "Enrolled On", "School", "Units", "Status"]}
                                    options={{
                                        filterType: "checkbox",
                                    }}
                                />
                            </Widget>
                        </Grid>
                    </Grid> 
                </Grid>
                
                <Grid item xs={3} container spaing={2}>
                    <Widget
                        title="Refine"
                        upperTitle
                    >
                        <Typography variant="h6" component="h6">
                                    Status
                        </Typography>
                        <FormControlLabel
                            value="flag"
                            control={<Switch color="primary" />}
                            label="Show active members only"
                            labelPlacement="start"
                        />
                        <Typography variant="h6" component="h6">
                            Fields
                        </Typography>
                        <Card>
                            <CardActions>
                                <IconButton type="submit" className={classes.searchIconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Search Google Maps"
                                    inputProps={{ 'aria-label': 'Type to filter' }}
                                />
                            </CardActions>
                            <CardActions>
                                <Button size="small" color="primary">
                                Select all
                                </Button>
                                <Button size="small" color="primary">
                                Select none
                                </Button>
                            </CardActions>
                            <CardActions>
                                <List className={classes.filtercheckbox}>
                                    {['Age', 'Enrolled On', 'School', 'Units', 'Status'].map(value => {
                                        const labelId = `checkbox-list-label-${value}`;

                                        return (
                                        <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                            <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                color="primary"
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                            </ListItemIcon>
                                            <ListItemText id={labelId} primary={value} />
                                            <ListItemSecondaryAction>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        );
                                    })}
                                </List>
                            </CardActions>
                            <CardActions className={classes.filterButtonArea}>
                                <Button size="small" color="primary">
                                Cancel
                                </Button>
                                <Button size="small" color="primary">
                                OK
                                </Button>
                            </CardActions>
                        </Card>
                        <Button disabled className={classes.resetButton}>Reset</Button>
                        <Button variant="outlined" color="default" className={classes.refinePanelButton}>
                            Cancel
                        </Button>
                        <Button variant="outlined" color="default" className={classes.refinePanelButton}>
                            Apply
                        </Button>
                    </Widget>
                </Grid>
            </Grid>
        </>
    );
}

