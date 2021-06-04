import React from "react";
import firebaseContext from "./firebaseContext";

import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "../../config/firebase";

const FirebaseState = (props) => {
    const AppInitFirebase = firebase.initializeApp(firebaseConfig);
    const databaseF = AppInitFirebase.firestore();
    return (
        <firebaseContext.Provider
            value={{
                databaseF,
                AppInitFirebase,
            }}
        >
            {props.children}
        </firebaseContext.Provider>
    );
};

export default FirebaseState;
