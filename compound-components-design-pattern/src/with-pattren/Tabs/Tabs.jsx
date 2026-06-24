import { useState } from "react";

const Tabs = ({ children }) => {
    return (
        <div className="accordion">{children}</div>
    );
}

const TabTitle = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="accordion-item">
            <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}> {title}</button>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
}

Tabs.Item = TabTitle;

export default Tabs;