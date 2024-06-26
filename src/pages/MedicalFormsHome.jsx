import {useEffect, useRef, useState} from 'react'
import ReactJson from 'react-json-view';
import {useNavigate, useSearchParams} from 'react-router-dom'

function MedicalFormsHome() {
    const[forms, setForms] = useState([]);
    const[form, setForm] = useState([]);
    const[searchParams, setSearchParams] = useSearchParams();
    const form_id = searchParams.get("form_id")

    let navigate = useNavigate();

    let forms_api_url_local = 'http://127.0.0.1:8000/medical-forms'
    let forms_api_url = 'https://api.binarytint.com/medical-forms'

    const getForms = async () => {
        const res = await fetch(forms_api_url);
        const json = await res.json();
        setForms(json.medical_forms);
    }

    let test = 0
    let form_api_url_local = `http://127.0.0.1:8000/medical-forms?form_id=${form_id}`
    let form_api_url = `https://api.binarytint.com/medical-forms?form_id=${form_id}`

    const getForm = async () => {
        const res = await fetch(form_api_url);
        const json = await res.json();
        setJsonData(json);
    }

    useEffect(() => {
        if (form_id) {
            getForm()
        } else {
            getForms()
        }
    }, [searchParams]);

    const [jsonData, setJsonData] = useState(null);

    const handleEdit = (edit) => {
        setJsonData(edit.updated_src);
    };

    const onLinkClick = (event) => {
        const id = event.target.textContent;
        setSearchParams({form_id: id});
    }

    if (!form_id) {
        return (
            <div>
                <h1> Clinix </h1>
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
        if (jsonData === null) {
            getForm()
        } else {
            return (
                <div className="medicalForm">
                    <div>
                        <button onClick={() => navigate(-1)}>Back</button>
                    </div>
                    <ReactJson
                        src={jsonData}
                        collapsed={false}
                        enableClipboard={true}
                        displayDataTypes={false}
                        displayObjectSize={false}
                        onEdit={handleEdit}
                        onAdd={handleEdit}
                        onDelete={handleEdit}
                    />
                </div>
            )
        }
    }


}




export default MedicalFormsHome;

/*
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
 */