import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Head from "next/head";
import { useEffect, useState } from "react";
import { SelectedTrainProvider } from '../../contexts/SelectedTrainContext';


const Post = () => {

    const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
        ssr: false
    });

    const router = useRouter()
    const { id } = router.query


    //z>No profile data</p>

    if (!id) return;


    return <>
        <Head>
            <title>{id.toString().toUpperCase()} - SimRail Map</title>
            <link
                rel="canonical"
                href={"https://map.simrail.app/server/" + id}
                key="canonical"
            />
        </Head>
        <SelectedTrainProvider>
            <MapWithNoSSR serverId={id} />
        </SelectedTrainProvider>
    </>
}

export default Post