import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className="max-w-sm rounded my-10 mx-auto">
            <form className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input
                        type="text" 
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        onChange={ e => setText(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                            onClick={e => onSubmit(e)}
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch;
