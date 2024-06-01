import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function MedicalFormsHome() {
    const[forms, setForms] = useState([]);
    const[form, setForm] = useState([]);
    const[searchParams, setSearchParams] = useSearchParams();
    const form_id = searchParams.get("form_id")

    let navigate = useNavigate();

    let api_url = "http://127.0.0.1:8000/medical-forms"

    const getForms = async () => {
        const res = await fetch(api_url);
        const json = await res.json();
        setForms(json.medical_forms);
    }

    const getForm = async () => {
        const res = await fetch(`http://127.0.0.1:8000/medical-forms?form_id=${form_id}`);
        const json = await res.json();
        setForm(json);
    }

    useEffect(() => {
        getForms();
        if (form_id) {
            getForm()
        }
    }, [searchParams]);

    const onLinkClick = (event) => {
        const id = event.target.textContent;
        setSearchParams({form_id: id});
    }

    if (!form_id) {
        return (
            <div>
                <h1> Home Page </h1>
                <div>
                    {forms.map(medical_form => {
                        return (
                            <div>
                                <button onClick={onLinkClick}>{medical_form}</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } else {

        return (
            <div className="medicalForm">
                <div>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
                <div>
                    {Object.keys(form).map(key => {
                        return (
                            <div>
                                <p>{key}</p>
                                <input
                                    type="text"
                                    defaultValue={form[key]}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default MedicalFormsHome;