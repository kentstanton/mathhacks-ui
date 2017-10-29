import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const HackForm = ({hack, allAuthors, onSave,onChange,saving,errors}) => {
    return (
        <form>
            <h1>Manage Hack</h1>
            <TextInput
                name="title"
                label="Title"
                value={hack.title}
                onChange={onChange}
                error={errors.title}
            />

            <SelectInput
                name="authorID"
                label="Author"
                value={hack.authorId}
                defaultOPtion="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.title}
            />

            <TextInput
                name="category"
                label="Category"
                value={hack.category}
                onChange={onChange}
                error={errors.category}
            />

            <TextInput
                name="length"
                label="Length"
                value={hack.length}
                onChange={onChange}
                error={errors.length}
            />
            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...': 'Save'}
                className="btn btn-primary"
                onClick={onSave}
            />
            
        </form>
    );
};

HackForm.propTypes = {
    hack: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default HackForm;
