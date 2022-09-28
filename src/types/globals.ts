import { FormEventHandler, ReactNode } from "react";
import { RawFormChain, RawFormLayer2, RawFormAuth, RawFormProject } from "./Api";

export interface ChildrenProp {
    children: ReactNode
}


export type RawFormData = RawFormChain | RawFormLayer2 | RawFormProject | RawFormAuth

export interface FormProps<T extends RawFormData> {
    onSubmit: (formData: T) => void
}

export interface LabeledInputProps {
    label: string
    name: string
    tip: string
    isPassword?: boolean 
}


export interface ChartDataItem {
    t: string,
    v?: number,
}