import React, { useState } from "react";
import {
    Grid,
    LinearProgress,
    Select,
    OutlinedInput,
    MenuItem,
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

    return (
        <>
            <PageTitle title="Search Member" />
            <Grid alignItems="center" justify="center" container spacing={4}>
                <Grid item xs={8}>
                    <Widget
                        upperTitle
                        noBodyPadding
                        bodyClass={classes.tableWidget}
                    >
                        {"hhh"}
                    </Widget>
                </Grid>
                <Grid item xs={8}>
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
        </>
    );
}

