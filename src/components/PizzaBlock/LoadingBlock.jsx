import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {

    return (
        <ContentLoader
            className="pizza-block"
            speed={0}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <circle cx="140" cy="140" r="140" />
            <rect x="1" y="138" rx="6" ry="6" width="177" height="23" />
            <rect x="0" y="293" rx="6" ry="6" width="302" height="36" />
            <rect x="1" y="341" rx="6" ry="6" width="285" height="79" />
            <rect x="0" y="433" rx="6" ry="6" width="60" height="26" />
            <rect x="104" y="434" rx="15" ry="15" width="170" height="24" />
        </ContentLoader>

    )
}

export default LoadingBlock;