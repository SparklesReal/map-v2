import type { Signal } from "@simrail/types";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

type SignalMarkerProps = {
	signal: Signal;
};

export const SignalMarker = ({ signal }: SignalMarkerProps) => {
	const icon = L.icon({
		iconUrl: "/markers/icon-signal.png",
		iconSize: [16, 16],
		popupAnchor: [0, -16],
	});

	return (
		<Marker
			key={signal.Name}
			icon={icon}
			position={[signal.Latitude, signal.Longitude]}
			zIndexOffset={30}
			eventHandlers={{
				mouseover: (event) => event.target.openPopup(),
				mouseout: (event) => event.target.closePopup(),
			}}
		>
			<Popup>
				{signal.Name}
				<br />
			</Popup>
		</Marker>
	);
};
