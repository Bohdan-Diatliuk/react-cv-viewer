import React from "react";
import './A4Container.scss';

interface A4ContainerProps {
    children: React.ReactNode;
}

const A4Container: React.FC<A4ContainerProps> = ({ children }) => {
    return (
        <div className="a4-container">
            <div className="a4-container__paper">
                {children}
            </div>
        </div>
    );
};

export default A4Container;