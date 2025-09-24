import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import "./NavBar.css"

export default function NavBar() {
    const { setSearchQuery } = useSearch();
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        setSearchQuery(inputValue);
    };

    return (
        <div className="container">
            <header className="main-header">
                <div className="logo">
                    Logo
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <span className="search-icon" onClick={handleSearch}>     🔍</span>
                </div>
                <div className="profile">
                    profile
                </div>
            </header>
  </div>
    )
}
