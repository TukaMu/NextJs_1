import React from "react";

export default function Styler({ children, as, style }) {
    const Tag = as;
    return (
        <React.Fragment>
            <Tag>
                {children}
            </Tag>
            <style global jsx>{`
            ${Tag} {
                ${style}
            }
        `}</style>
        </React.Fragment>
    )
};