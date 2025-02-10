"use client";

import { Box } from "@mantine/core";

import { StatisticsCard } from "@/components/shared/interface/cards/statistics";
import { HomeTrendDownIcon } from "@/icons/home-trend-down";
import { makePath, PAGES } from "@/packages/libraries";

interface StatisticsOverviewProps {
  totalHouses: number;
  totalOccupants: number;
  totalSubOccupants: number;
  totalGates: number;
  skeleton?: boolean;
}

export function StatisticsOverview({
  totalHouses,
  totalOccupants,
  totalSubOccupants,
  totalGates,
  skeleton: isPlaceholderData,
}: StatisticsOverviewProps) {
  return (
    <Box
      className='grid gap-6'
      style={{
        gridTemplateColumns: "repeat(auto-fill,minmax(min(350px,100%),1fr))",
        gridAutoRows: "1fr",
      }}
    >
      <StatisticsCard
        icon={HomeTrendDownIcon}
        title='Total Houses'
        value={totalHouses}
        label='Manage Houses'
        href={makePath(PAGES.DASHBOARD)}
        skeleton={isPlaceholderData}
      />

      <StatisticsCard
        icon={HomeTrendDownIcon}
        title='Total Occupants'
        value={totalOccupants}
        total={totalOccupants}
        label='Manage Users'
        href={makePath(PAGES.DASHBOARD)}
        skeleton={isPlaceholderData}
      />

      <StatisticsCard
        icon={HomeTrendDownIcon}
        title='Total Sub-Occupants'
        value={totalSubOccupants}
        total={totalSubOccupants}
        label='Manage Sub-Occupants'
        href={makePath(PAGES.DASHBOARD)}
        skeleton={isPlaceholderData}
      />

      <StatisticsCard
        icon={HomeTrendDownIcon}
        title='Total Gates'
        value={totalGates}
        total={totalGates}
        label='Manage Gates'
        href={makePath(PAGES.DASHBOARD)}
        skeleton={isPlaceholderData}
      />
    </Box>
  );
}
