export const loadData = () => {
    try {
        const serializedData = localStorage.getItem('formData');
        if (serializedData === null) {
            return undefined;
        }
        return JSON.parse(serializedData);
    } catch (err) {
        console.error("Could not load data", err);
        return undefined;
    }
};

export const saveData = (data) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem('formData', serializedData);
    } catch (err) {
        console.error("Could not save data", err);
    }
};
