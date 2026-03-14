"use client";

export default function Error({ error, reset }){
    return (
        <div className="page-section">
            <h2>Something went wrong</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()} className="button">
                Try Again
            </button>
        </div>
    );
}