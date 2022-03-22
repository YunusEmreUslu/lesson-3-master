    import React from "react";

    import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";


    // HOC to enables spinning wheel while component data loads
    export const WithSpinner = WrappedComponent => { 
        const Spinner = ({isLoading, ...otherPorps}) => {

        return isLoading ? ( 
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherPorps} />
        )
        }

        return Spinner;
    }


    // wrapping shop component bc it has the loading state and is responsible of the reducers related
