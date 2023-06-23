
const Wa = () => {
    const handleClick = () => {
        window.open("https://wa.me/+6281213815491", "_blank");
    };
    return (
        <button className="glowing-btn" onClick={handleClick}>
            <span className="glowing-txt">
                W<span className="faulty-letter">H</span>A<span className="faulty-letter">TS</span>APP
            </span>
        </button>
    );
};

export default Wa;
