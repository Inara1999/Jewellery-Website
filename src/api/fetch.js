import axios from "axios";

export const postWithoutToken = async (endPoint, data) => {
    try {
        const resp = await axios.post(endPoint, data, {
            headers : {
                "Content-Type": "application/json",
            },
        });
        if (!resp.data.status) {
            alert(resp.data.msg);
            return;
        }

        return resp.data;        
    } catch (error){
        console.log(error.msg);
        
    }
};

export const getWithToken = async (endPoint) => {
    try {
        const token = localStorage.getItem("token");

        const resp = await axios.get(endPoint, {
            headers: {
                "Content-Type": "application/json",
                Authorization:  `Bearer ${token}`,
            },
        });
        if(!resp.data.status){
            alert(resp.data.msg);
            return;
        }
        return resp.data;
    } catch (error) {
        console.log(error.msg);
    }
}; 

export const updateWithToken = async (endPoint,data) => {
    try {
        const token = localStorage.getItem("token");

        const resp = await axios.put(endPoint,data,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        if (!resp.data.status){
            alert(resp.data.msg);
            return;
        }
        return resp.data;
    } catch (error) {
        console.log(error.msg);
    }
};