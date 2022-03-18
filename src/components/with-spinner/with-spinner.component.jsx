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
