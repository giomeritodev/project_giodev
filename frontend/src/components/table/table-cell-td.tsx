import classNames from "classnames";
import { ComponentProps } from "react";

interface TableCellTdProps extends ComponentProps<"td">{}
export function TableCellTd(props: TableCellTdProps){
    return(
        <td
            {...props}
            className={classNames("py-3 px-4 text-sm text-zinc-300", props.className)}
        />
    )
}