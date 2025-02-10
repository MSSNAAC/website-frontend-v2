"use client";

import Link from "next/link";

import { MAX_SCREEN_WIDTH } from "@/packages/constants/size";
import { Button, Flex, Stack, Text, Title } from "@mantine/core";
import { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

type Branch = {
  position: LatLngTuple;
  label: string;
  description?: string;
  website?: {
    href: string;
    label: string;
  };
};

const branches: Branch[] = [
  {
    position: [7.4551, 3.90932],
    label: "MSSN Akinyele Area Council, Secretariat",
    description:
      "The administrative center for MSSN Akinyele. Meetings and events are held here.",
  },
  {
    position: [7.445, 3.907],
    label: "University of Ibadan",
    description:
      "The premier university in Nigeria and home to many MSSN activities.",
    website: {
      href: "https://www.mssnuniibadan.org",
      label: "Visit MSSN UI Website",
    },
  },
];

export function HeroSection() {
  const [selectedPosition, setSelectedPosition] = useState<LatLngTuple | null>(
    null
  );

  function FitBounds() {
    const map = useMap();

    useEffect(() => {
      const bounds = branches.map((marker) => marker.position);
      map.fitBounds(bounds, { padding: [50, 50] });
    }, [map]);

    return null;
  }

  function CenterMap({ position }: { position: LatLngTuple }) {
    const map = useMap();

    useEffect(() => {
      map.setView(position, 14, { animate: true });
    }, [position, map]);

    return null;
  }

  return (
    <Stack
      align='center'
      ta='center'
      className='py-24 font-jakarta'
      maw={MAX_SCREEN_WIDTH}
      mx='auto'
      gap={40}
      px={18}
    >
      <Title
        className='font-sans'
        order={2}
        fw={600}
        fz={{
          base: 32,
          sm: 40,
          xl: 60,
        }}
      >
        About Us
      </Title>
      <Text
        fz={{
          base: 16,
          sm: 18,
        }}
        lh={1.5}
        maw={900}
        w='100%'
      >
        Discover a network of Muslim students dedicated to building a better
        future for the Ummah.
      </Text>

      <MapContainer
        zoom={14}
        scrollWheelZoom={false}
        style={{
          height: 500,
          width: "100%",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <TileLayer url='https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}' />
        {branches.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            eventHandlers={{
              click: () => setSelectedPosition(marker.position),
            }}
          >
            <Popup>
              <Title order={4} fw={600} className='font-jakarta'>
                {marker.label}
              </Title>
              <Text size='sm' mt='xs' c='dimmed'>
                {marker.description}
              </Text>
              {marker.website && (
                <Flex align='center' justify='center' mt='sm'>
                  <Text
                    fz={14}
                    fw={600}
                    flex={2}
                    component={Link}
                    href={marker.website.href}
                    className='underline'
                    target='_blank'
                  >
                    {marker.website.label}
                  </Text>

                  <Button
                    flex={1}
                    fz={14}
                    variant='light'
                    size='sm'
                    fullWidth
                    onClick={() => alert(`More details about ${marker.label}`)}
                  >
                    Details
                  </Button>
                </Flex>
              )}
            </Popup>
          </Marker>
        ))}
        <FitBounds />
        {selectedPosition && <CenterMap position={selectedPosition} />}
      </MapContainer>
    </Stack>
  );
}
