"use client";

import { useState, useEffect } from "react";
import { HOSTNAME_APP_SCRIPT, SPREADSHEET_ID } from "@/libs/constants/others.const";
import { ACTION_SCRIPT } from "@/libs/emuns/method_app_script.enum";

type DataItem = {
    createdAt: string;
};

export const useAppScript = (SHEET_NAME: string): [DataItem[] | null, boolean, any, (data: any) => Promise<any>, React.Dispatch<React.SetStateAction<boolean>>, (data: any) => Promise<any>] => {
    const [loading, setLoading] = useState<boolean>(false);
    const [startFetching, setStartFetching] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState<DataItem[] | null>(null);

    const getAllData = async () => {
        try {
            setLoading(true);

            const result = await fetch(
                `${HOSTNAME_APP_SCRIPT}?action=${ACTION_SCRIPT.GET_ALL}&tableName=${SHEET_NAME}&sheetId=${SPREADSHEET_ID}`,
                {
                    method: "GET"
                }
            );

            const jsonData = await result.json();

            setData(jsonData?.data?.sort((a: DataItem | null, b: DataItem | null) => {
                if (a && b) {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                }
                return 0;
            }));
            
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setStartFetching(false);
            setLoading(false);
        }
    };

    const createData = async (data: string) => {
        console.log(data);
        
        try {
            setLoading(true)
            const response = await fetch(
                `${HOSTNAME_APP_SCRIPT}?action=${ACTION_SCRIPT.CREATE_RSVP}&tableName=${SHEET_NAME}&sheetId=${SPREADSHEET_ID}` + data,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    method: 'POST',
                }
            );

            const result = await response.json();
            return result;
        } catch (error: unknown | any) {
            console.log(error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false)
        }
    };

    const updateData = async (data: any) => {
        try {
            setLoading(true);
            const response = await fetch(
                `${HOSTNAME_APP_SCRIPT}?action=${ACTION_SCRIPT.UPDATE}&tableName=${SHEET_NAME}&sheetId=${SPREADSHEET_ID}`,
                {
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();
            return result;
        } catch (error: unknown | any) {
            console.log(error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (startFetching) {
            getAllData();
        }
    }, [startFetching]);

    return [data, loading, error, createData, setStartFetching, updateData];
};
