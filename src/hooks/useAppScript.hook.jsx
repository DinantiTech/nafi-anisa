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

            const options = {
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Access-Control-Allow-Credentials': true
                },
                method: 'GET',
              };
            const result = await fetch(
                `${HOSTNAME_APP_SCRIPT}?action=${ACTION_SCRIPT.GET_ALL}&tableName=${SHEET_NAME}&sheetId=${SPREADSHEET_ID}`
            )
    
            console.log(await result.json())
    
            return setData(result)
            
        } catch (error) {
            console.log(error);
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllData()
    }, [])

    return [data, loading, loading]
}