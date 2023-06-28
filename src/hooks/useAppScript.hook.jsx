import { useState } from "react";
import { HOSTNAME_APP_SCRIPT, SPREADSHEET_ID } from "../contants/common.const";
import { ACTION_SCRIPT } from "../enums/method_app_script.enum";
import { useEffect } from "react";

export const useAppScript = (SHEET_NAME) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null)

    const getAllData = async () => {
        try {
            setLoading(true)

            const result = await fetch(
                `${HOSTNAME_APP_SCRIPT}?action=${ACTION_SCRIPT.GET_ALL}&tableName=${SHEET_NAME}&sheetId=${SPREADSHEET_ID}`,
                {
                    method: "GET"
                }
            )

            const data = await result.json()

            return setData(data?.data)

        } catch (error) {
            console.log(error);
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const createData = async (data) => {
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
        } catch (error) {
            console.log(error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false)
        }
    };

    const updateData = async (data) => {
        try {
            setLoading(true)
            const response = await fetch(
                `${HOSTNAME_APP_SCRIPT}?action=${ACTION_SCRIPT.UPDATE}&tableName=${SHEET_NAME}&sheetId=${SPREADSHEET_ID}`,
                {
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();
            return result;
        } catch (error) {
            console.log(error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getAllData()
    }, [])

    return [data, loading, error, createData, updateData]
}