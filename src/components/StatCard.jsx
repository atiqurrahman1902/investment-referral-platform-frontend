function StatCard({

    title,

    amount,

    icon,

    color

}){

    return(

        <div className="stat-card">

            <div className="stat-left">

                <h4>

                    {title}

                </h4>

                <h2>

                    {amount}

                </h2>

            </div>

            <div

                className="stat-icon"

                style={{

                    background:color

                }}

            >

                {icon}

            </div>

        </div>

    );

}

export default StatCard;