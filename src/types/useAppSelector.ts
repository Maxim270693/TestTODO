import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootStateType} from "../main/bll/store";

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector