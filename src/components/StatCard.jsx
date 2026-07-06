function StatCard({

    title,

    amount,

    subtitle,

    icon,

    color

}){

    return(

        <div className="stat-card">

            <div className="stat-left">

                <h5>{title}</h5>

                <h2>{amount}</h2>

                <p>{subtitle}</p>

            </div>

            <div
                className="stat-icon"
                style={{background:color}}
            >

                {icon}

            </div>

        </div>

    );

}

export default StatCard;