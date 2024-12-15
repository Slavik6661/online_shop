import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import App from "../../App";

export const useAppDispatch :()=>AppDispatch = useDispatch

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector