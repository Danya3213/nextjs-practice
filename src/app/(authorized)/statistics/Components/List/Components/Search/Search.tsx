import {type Dispatch, type ReactElement, type SetStateAction} from "react";
import {InputLayout} from "@authPages/statistics/Components/List/Components/Search/Layout/InputLayout/InputLayout";
import {years} from "./constans/years.const";
import {months} from "./constans/months.const";
import cl from './search.module.scss'

export const Search = ({month, setMonth, year, setYear}: {
    month: string;
    setMonth: Dispatch<SetStateAction<string>>;
    year: number;
    setYear: Dispatch<SetStateAction<number>>;
}): ReactElement => {

    return (
        <div className={cl.container}>
            <InputLayout<string> data={months} value={month} setValue={setMonth}/>
            <InputLayout<number> data={years} value={year} setValue={setYear}/>
        </div>
    );
};