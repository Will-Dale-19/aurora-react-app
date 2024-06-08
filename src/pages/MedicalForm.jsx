import {useEffect, useState} from 'react'
import {useParams, useSearchParams} from 'react-router-dom'

function MedicalForm() {

    const[data, setData] = useState([]);

    const[searchParams, setSearchParams] = useSearchParams()

    const form_id =searchParams.get("form_id")

    //let api_url = `http://127.0.0.1:8000/medical-forms/${form_id}`
    let api_url = `http://127.0.0.1:8000/medical-forms/test-form`

    const getServers = async () => { // todo change name
        const res = await fetch(api_url);
        const json = await res.json();
        setData(json);
        console.log(form_id)
    }

    useEffect(() => {
        getServers();
    }, []);

    return (
        <div className="medicalForm">
            <div>
                {Object.keys(data).map(key => {
                    return (
                        <div>
                            <p>{key}</p>
                            <input
                                type="text"
                                defaultValue={data[key]}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MedicalForm;