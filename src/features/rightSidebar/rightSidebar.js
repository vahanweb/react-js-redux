import React from "react";
import { useSelector } from "react-redux";
import { borderRadiusDataValue } from "../formVali/borderRadiusDataSlice";
import { descriptionColorDataValue } from "../formVali/descriptionColorDataSlice";
import {descriptionValue} from "../formVali/formValidDescriptionSlice";
import { titleValue } from "../formVali/formValidSlice";
import { titleColorValue } from "../formVali/titleColorDataSlise";
import "./styles.css";

export function RightSidebar() {

    const titleValueRight = useSelector(titleValue);
    
    const formValidDescriptionRight = useSelector(descriptionValue)

    const borderRadiusDataRight = useSelector(borderRadiusDataValue)

    const titleColorDataRight = useSelector(titleColorValue);
    
    const descriptionColorDataRight = useSelector(descriptionColorDataValue);

    return (
        <div className="right_sidebar">
            <div className="content" style={{borderRadius: borderRadiusDataRight.value + "px"}}>
                <h1
                    style={{color: titleColorDataRight.value}}
                >{titleValueRight.value == '' ? "Right Sidebar Title":titleValueRight.value}</h1>
                <h3
                    style={{color: descriptionColorDataRight.value}}
                >{formValidDescriptionRight.value == '' ? "Description":formValidDescriptionRight.value}</h3>
            </div>
        </div>
    )
}