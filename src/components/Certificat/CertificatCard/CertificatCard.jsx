import React from "react";
import './CertificatCard.css';

const CertificatCard = ({ details }) => {
    return (
        <div className="certif-card">
            <img src={ details.image } alt="" />
        </div>
    )
}

export default CertificatCard;