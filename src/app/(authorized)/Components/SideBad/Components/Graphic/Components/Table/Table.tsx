import {InfoListItem} from "./Components/InfoListItem/InfoListItem";
import {InfoList} from "./Components/InfoList/InfoList";
import {Text} from "./Components/Text/Text";
import type {ReactElement} from "react";

export const Table = (): ReactElement => {

    return (
        <InfoList>
            <InfoListItem>
                <Text>USD</Text>
                <Text>EUR</Text>
            </InfoListItem>
            <InfoListItem>
                <Text>27.55</Text>
                <Text>30.00</Text>
            </InfoListItem>
            <InfoListItem>
                <Text>27.65</Text>
                <Text>30.10</Text>
            </InfoListItem>
        </InfoList>
    );
};