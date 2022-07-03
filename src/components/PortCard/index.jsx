import React from 'react'

const PortfolioCard = (portfolio) => {
    const imgsrc = `${portfolio.cover}`;
    return (
        <div class="card">
            <div class="card-image"></div>
            <div class="card-text">
                <h2>{portfolio.title}</h2>
                <p>{portfolio.description}</p>
            </div>
            <div class="card-stats">
                <div>
                    {portfolio.stack}
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard