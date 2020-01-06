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
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";
import MUIDataTable from "mui-datatables";
import MemberDetails from "../MemberDetails/MemberDetails";
import SearchMember from "../SearchMember/SearchMember";

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

export default function Dashboard(props) {
    var classes = useStyles();
    var theme = useTheme();

    var MemberId = 1;

    // local
    var [mainChartState, setMainChartState] = useState("monthly");

    return (
        <>
            {MemberId == undefined ? 
            <SearchMember></SearchMember> : <MemberDetails></MemberDetails>}
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
