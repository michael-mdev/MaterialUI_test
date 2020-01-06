import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
    ["Jacob Shwartz", "11", "Jun 4 2011", "Satmar", "3", "Active"],
    ["Mayer Weiss", "14", "Feb 14 2013", "Satmar", "3", "Active"],
    ["Yechiel Gold", "4", "Jun 24 2014", "Satmar", "3", "Active"],
    ["Moshe Goldberg", "19", "Jun 3 2010", "Satmar", "3", "Excersized"],
    ["Yitzchok Shimon", "10", "Jun 29 2018", "Satmar", "3", "Pending Signup"],
];

export default function Tables() {
    return (
        <>
            
            <Grid container spacing={4}>

                <Grid item xs={12}>
                    <MUIDataTable
                        title="Children"
                        data={datatableData}
                        columns={["Name", "Age", "Enrolled On", "School", "Units", "Status"]}
                        options={{
                            filterType: "checkbox",
                        }}
                    />
                </Grid>
                //<Grid item xs={12}>
                //    <Widget title="Material-UI Table" upperTitle noBodyPadding>
                //        <Table data={mock.table} />
                //    </Widget>
                //</Grid>
            </Grid>
        </>
    );
}
