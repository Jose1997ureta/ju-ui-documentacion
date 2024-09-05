import mitt, { Emitter } from "mitt";
import React, { ReactNode } from "react";

type EventsEmitter = {
	isMenu: boolean;
};

const emitter: Emitter<EventsEmitter> = mitt<EventsEmitter>();

export interface MittContextType {
	emitter: Emitter<EventsEmitter>;
}

export const MittContext = React.createContext<MittContextType>({ emitter });

interface MittProviderProps {
	children: ReactNode;
}

export const MittProvider: React.FC<MittProviderProps> = ({ children }) => {
	return (
		<MittContext.Provider value={{ emitter }}>{children}</MittContext.Provider>
	);
};
