import { useForm } from '@inertiajs/inertia-react';

const CreateLegalNeed = () => {
    const { data, setData, post,  } = useForm({
        DateOfNextAppearance: '',
        NatureOfAppearance: '',
        ServicesLanguage: '',
        AdditionalInformation: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route('createLegalNeed')); 
    };

    return (
        <div>
            <h2>Legal Need Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Case Information */}
                <div>
                    <label>Date of Next Appearance *</label>
                    <input 
                        type="date" 
                        name="DateOfNextAppearance" 
                        value={data.DateOfNextAppearance} 
                        onChange={(e) => setData('DateOfNextAppearance', e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Nature of Appearance *</label>
                    <input 
                        type="text" 
                        name="NatureOfAppearance" 
                        value={data.NatureOfAppearance} 
                        onChange={(e) => setData('NatureOfAppearance', e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Service Language</label>
                    <input 
                        type="text" 
                        name="ServicesLanguage" 
                        value={data.ServicesLanguage} 
                        onChange={(e) => setData('ServicesLanguage', e.target.value)} 
                    />
                </div>
                <div>
                    <label>Additional Information</label>
                    <textarea 
                        name="AdditionalInformation" 
                        value={data.AdditionalInformation} 
                        onChange={(e) => setData('AdditionalInformation', e.target.value)} 
                    />
                </div>

             
                {/* Submit button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateLegalNeed;
