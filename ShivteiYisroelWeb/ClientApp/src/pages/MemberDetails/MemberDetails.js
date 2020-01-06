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

const mainChartData = getMainChartData();
const PieChartData = [
    { name: "On Time", value: 20, color: "success" },
    { name: "OK", value: 13, color: "primary" },
    { name: "30 days late", value: 6, color: "warning" },
    { name: "60 days late", value: 3, color: "error" },
];
const datatableData = [
    ["Jacob Shwartz", "11", "Jun 4 2011", "Satmar", "3", "Active"],
    ["Mayer Weiss", "14", "Feb 14 2013", "Satmar", "3", "Active"],
    ["Yechiel Gold", "4", "Jun 24 2014", "Satmar", "3", "Active"],
    ["Moshe Goldberg", "19", "Jun 3 2010", "Satmar", "3", "Excersized"],
    ["Yitzchok Shimon", "10", "Jun 29 2018", "Satmar", "3", "Pending Signup"],
];

export default function MemberDetails(props) {
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("monthly");

  return (
    <>
      <PageTitle title="Member Details" />
      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
                  >
                      <Icons.Person />
                <br />
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Name
                </Typography>
                <Typography size="md">Yechiel Weiss</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Address
                </Typography>
                <Typography size="md">300 Pupa Street</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Home Phone
                </Typography>
                <Typography size="md">1 718 388 0213</Typography>
              </Grid>
            </Grid>
          </Widget>
        </Grid>


        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            //title="Totals"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
              <Icons.AttachMoney/>
                <br />
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Total Balance
                </Typography>
                <Typography size="md">$135.00</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Total Paid Participation
                </Typography>
                <Typography size="md">$700.00</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Last Payment
                </Typography>
                <Typography size="md">$80.00</Typography>
              </Grid>
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Next Payment Due On
                </Typography>
                <Typography size="md">Nov 29</Typography>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
              <Icons.ViewList/>
                <br />
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography size="md" color="text" colorBrightness="secondary">Active Children</Typography>
              </Grid>
              <Grid item>
                <Typography size="md">4</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography size="md" color="text" colorBrightness="secondary">Active Units</Typography>
              </Grid>
              <Grid item>
                <Typography size="md">12</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography size="md" color="text" colorBrightness="secondary">Active Loans</Typography>
              </Grid>
              <Grid item>
                <Typography size="md">0</Typography>
              </Grid>
            </Grid>
            <br/>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>7</Typography>
                <Typography color="text" colorBrightness="secondary">
                  Paid Units
                </Typography>
              </Grid>
              <Grid item>
                <Typography>1</Typography>
                <Typography color="text" colorBrightness="secondary">
                  Used Loans
                </Typography>
              </Grid>
              <Grid item>
                <Typography>2</Typography>
                <Typography color="text" colorBrightness="secondary">
                  Available Loans
                </Typography>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget title="Payments Rate" upperTitle className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ResponsiveContainer width="100%" height={144}>
                  <PieChart margin={{ left: theme.spacing(2) }}>
                    <Pie
                      data={PieChartData}
                      innerRadius={45}
                      outerRadius={60}
                      dataKey="value"
                    >
                      {PieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={theme.palette[entry.color].main}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.pieChartLegendWrapper}>
                  {PieChartData.map(({ name, value, color }, index) => (
                    <div key={color} className={classes.legendItemContainer}>
                      <Dot color={color} />
                      <Typography style={{ whiteSpace: "nowrap" }}>
                        &nbsp;{name}&nbsp;
                      </Typography>
                      <Typography color="text" colorBrightness="secondary">
                        &nbsp;{value}
                      </Typography>
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
              
        <Grid item xs={12}>
          <Widget
            title="Children"
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

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
  var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
  var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

  for (let i = 0; i < tablet.length; i++) {
    resultArray.push({
      tablet: tablet[i].value,
      desktop: desktop[i].value,
      mobile: mobile[i].value,
    });
  }

  return resultArray;
}
