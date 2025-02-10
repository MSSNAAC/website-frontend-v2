"use client";

import { StatisticsOverview } from "@/components/admin/overview/statistics-overview";
import { AppShellHeader } from "@/components/shared/interface/app-shell/header";
import { AppShellMain } from "@/components/shared/interface/app-shell/main";

import { Stack } from "@mantine/core";
import { Fragment } from "react";

export default function Overview() {
  return (
    <Fragment>
      <AppShellHeader title='Overview' />

      <AppShellMain layout='default'>
        <Stack gap={35} w='100%'>
          <StatisticsOverview
            totalGates={0}
            totalHouses={0}
            totalOccupants={0}
            totalSubOccupants={0}
          />
        </Stack>
      </AppShellMain>
    </Fragment>
  );
}
