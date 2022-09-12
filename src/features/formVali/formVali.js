import React from "react";
import { useDispatch } from "react-redux";

import "./styles.css";
import { titleData } from './formValidSlice';

import { descriptionData } from './formValidDescriptionSlice';

import { borderRadiusData } from "./borderRadiusDataSlice";

import { titleColorData } from "./titleColorDataSlise";

import { descriptionColorData } from "./descriptionColorDataSlice";

export function FormVali(){
    
    const dispatch = useDispatch();

    return (
        <div className="left_sidebar">
            <h1>Left Sidebar</h1>
            <label>
                Title
                <input type="text" className="title" onChange={(e)=>{
                    dispatch(titleData(e.target.value));
                }} />
            </label>
            <label>
                Description
                <input type="text" className="description" onChange={(e)=>{
                    dispatch(descriptionData(e.target.value));

                }} />
            </label>
            <label>
                Border Radius
                <input type="range" min="0" start="0" max="150" className="border_radius"
                    onChange={(e)=>{
                        dispatch(borderRadiusData(e.target.value));
                    }} />
            </label>
            <label>
                Title Color
                <input type="color" className="title_color" onChange={(e)=>{
                    dispatch(titleColorData(e.target.value));
                }}/>
            </label>
            <label>
                Description
                <input type="color" className="description_color" onChange={(e)=>{
                    dispatch(descriptionColorData(e.target.value));
                }}/>
            </label>
        </div>
    )
}