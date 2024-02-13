import {useMoralis} from "react-moralis";

export default function ManualHeader(){

    const {enableWeb3} = useMoralis();
    return (
        <div>
            <p>Hello, from Header!</p>
        </div>
    )
}

