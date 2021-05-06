import React from "react";
import CSVReader from "react-csv-reader";
import './bulkstyle.css';

const handleForce = (data, fileInfo) => console.log(data, fileInfo);

const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

const BulkEmail = () => {
    return (
        <div className="bulk-container">
            <CSVReader cssClass="react-csv-input"
                label="Select CSV with secret Death Star statistics"
                onFileLoaded={handleForce}
                parserOptions={papaparseOptions}
            />
        </div>
    )
}

export default BulkEmail;